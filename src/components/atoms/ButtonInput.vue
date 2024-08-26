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
  <button>{{ props.label }}</button>
</template>
