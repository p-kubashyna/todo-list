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
  <input type="checkbox" class="checkbox-round" :checked="props.checked"/>
</template>

<style>
.checkbox-round {
  width: 1em;
  height: 1em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #5b5b5c;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.checkbox-round:checked {
  background-color: #5b5b5c;
}

.checkbox-round:hover {
  border-width: 2px;
}
</style>
