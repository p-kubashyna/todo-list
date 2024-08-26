<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const incompleteCounter = computed(() => store.getters.getIncompleteTodosCount)
</script>

<template>
<span>{{ incompleteCounter }} tasks left</span>
</template>

<style scoped>
.counter-label {
}
</style>
