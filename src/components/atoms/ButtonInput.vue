<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: ''
  },
  class: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button :class="props.class">
    {{ props.label }}
  </button>
</template>
