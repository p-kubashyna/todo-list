<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: ''
  }
})
</script>

<template>
  <button class="default-todo-button">{{ props.label }}</button>
</template>

<style>
.default-todo-button {
  background: white;
  margin-left: 5px;
  font-family: monospace;
  border-style: none;
}

.default-todo-button:hover {
  text-decoration: underline;
}
</style>
