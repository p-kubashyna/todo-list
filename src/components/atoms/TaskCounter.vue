<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const incompleteCounter = computed(() => store.getters.getIncompleteTodosCount)
</script>

<template>
<span class="counter-label">{{ incompleteCounter }} tasks left</span>
</template>

<style scoped>
.counter-label {
  font-family: monospace;
  color: #121952;
  margin-left: 10px;
  margin-right: auto;
}
</style>
