<template>
  <todo-list></todo-list>
</template>

<script setup lang="ts">
import TodoList from './components/TodoList/index.vue'
import { useTodoListStore } from './store'

const todoListStore = useTodoListStore()

console.log(todoListStore)
</script>

<style lang="scss" scoped></style>
