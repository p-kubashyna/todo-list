<script setup>
import { ref } from "vue";

const inputText = ref("");
const emit = defineEmits(["submitForm"]);
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
    default: "",
  },
  isInvalidInput: {
    type: Boolean,
    required: false,
    default: false,
  },
});

function submitEvent() {
  emit("submitForm", inputText.value);
  inputText.value = "";
}
</script>

<template>
  <form @submit.prevent="submitEvent()">
    <input
      class="input-base"
      :class="{ 'input-invalid': props.isInvalidInput }"
      v-model.trim="inputText"
      :placeholder="props.placeholder"
    />
  </form>
</template>

<style scoped>
.input-base {
  width: 600px;
  height: 25px;
  border-radius: 7px;
  border-width: 10px;
  border-color: white;
  border-style: solid;
  font-family: monospace;
}

.input-invalid {
  background: white url(../../assets/images/invalid_input_icon.png) no-repeat
    right;
  background-size: auto 100%;
}
</style>
