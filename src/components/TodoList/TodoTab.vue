<template>
  <div>
    <a
      href="javascript:;"
      :class="{ active: todoListStore.filter === 'all' }"
      @click="setFilter('all')"
      >All</a
    >
    <a
      href="javascript:;"
      :class="{ active: todoListStore.filter === 'finished' }"
      @click="setFilter('finished')"
      >Finished</a
    >
    <a
      href="javascript:;"
      :class="{ active: todoListStore.filter === 'unfinished' }"
      @click="setFilter('unfinished')"
      >UnFinished</a
    >
  </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from '../../store'

const todoListStore = useTodoListStore()

const setFilter = (filter: string) => {
  todoListStore.$patch({ filter })
}
</script>

<style lang="scss" scoped>
.active {
  text-decoration: none;
  color: black;
}
a {
  margin-right: 15px;
}
</style>
