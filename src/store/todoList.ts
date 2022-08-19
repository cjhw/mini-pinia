import { defineStore } from '../pinia'

type ToDos = {
  text: string
  id: number
  isFinished: boolean
}

type ToDoState = {
  todos: ToDos[]
  filter: string
  nextId: number
}

export default defineStore('todoList', {
  state: (): ToDoState => ({
    todos: [], // id:number, text:string, text:isFinished
    filter: 'all',
    nextId: 0,
  }),
  getters: {
    finishedTodos(state: ToDoState): ToDos[] {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state: ToDoState): ToDos[] {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    filteredTodos(state: ToDoState): ToDos[] {
      switch (this.filter) {
        case 'finished':
          return this.finishedTodos
        case 'unfinished':
          return this.unfinishedTodos
        default:
          return this.todos
      }
    },
  },
  actions: {
    addTodo(text: string) {
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
    toggleTodo(id: number) {
      this.todos = this.todos.map((todo: ToDos) => {
        if (todo.id === id) {
          todo.isFinished = !todo.isFinished
        }
        return todo
      })
    },
    removeTodo(id: number) {
      console.log(id)
      this.todos = this.todos.filter((todo: ToDos) => todo.id !== id)
    },
  },
})
