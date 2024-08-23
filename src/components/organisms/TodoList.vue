<script setup>
import TodoElement from '@/components/molecules/TodoElement.vue'
import { useStore } from 'vuex'

const store = useStore()
const todos = store.state.todoList
</script>

<template>
  <div class="list">
    <TodoElement v-for="todo in todos" v-bind:todo-item="todo" v-bind:key="todo.id"/>
  </div>
</template>

<style>
.list {
  margin-top: 30px;
  width: 600px;
  border-radius: 7px;
  border-width: 5px;
  border-color: white;
  border-style: solid;
}
</style>
