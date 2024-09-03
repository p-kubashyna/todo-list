<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "",
  },
  isDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  additionalClass: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <button
    class="default-button"
    :disabled="props.isDisabled"
    :class="{
      [props.additionalClass]: props.additionalClass !== '',
      'active-button': !props.isDisabled,
    }"
  >
    {{ props.label }}
  </button>
</template>

<style>
.default-button {
  background: white;
  margin-left: 5px;
  font-family: monospace;
  border-style: none;
}

.active-button:hover {
  text-decoration: underline;
}
</style>
