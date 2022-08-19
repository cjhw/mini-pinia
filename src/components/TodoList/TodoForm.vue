<template>
  <div>
    <input
      type="text"
      placeholder="Please input someing...."
      v-model="inputRef"
    />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoListStore } from '../../store'

const todoListStore = useTodoListStore()

const inputRef = ref('')

const addTodo = () => {
  todoListStore.addTodo(inputRef.value)
}
</script>

<style lang="scss" scoped>
button {
  margin-left: 10px;
}
</style>
