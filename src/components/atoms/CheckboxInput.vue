<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    required: true,
    default: false
  }
})
</script>

<template>
    <input type="checkbox" :checked="props.checked" />
</template>
