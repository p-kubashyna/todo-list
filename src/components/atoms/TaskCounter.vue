<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const incompleteCounter = computed(() => store.getters.getIncompleteTodosCount);

function getLabel() {
  if (incompleteCounter.value === 0) {
    return "No tasks left";
  } else if (incompleteCounter.value === 1) {
    return "1 task left";
  } else {
    return incompleteCounter.value + " tasks left";
  }
}
</script>

<template>
  <span class="counter-label">{{ getLabel() }}</span>
</template>

<style scoped>
.counter-label {
  font-family: monospace;
  color: #121952;
  margin-left: 10px;
  margin-right: auto;
}
</style>
