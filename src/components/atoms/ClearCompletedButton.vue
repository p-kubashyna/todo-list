<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const hasCompleted = computed(() => store.state.todoList.filter((todo) => todo.isCompleted).length > 0)
</script>

<template>
  <button :disabled="!hasCompleted" class="clear-completed-button" :class="{ 'active-button' : hasCompleted }">Delete
    completed
  </button>
</template>

<style>
.clear-completed-button {
  background: white;
  margin-left: 5px;
  font-family: monospace;
  border-style: none;
}

.active-button:hover {
  text-decoration: underline;
}
</style>
