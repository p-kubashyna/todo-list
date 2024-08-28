<script setup>
import { ref } from "vue";
import store from "@/store";

const inputText = ref("");
const isInvalidInput = ref(false);

function submitTodo(inputText) {
  this.isInvalidInput = validateInput(this.inputText);
  if (!this.isInvalidInput) {
    store.commit("addTodo", inputText);
    this.inputText = "";
  }
}

function validateInput(inputText) {
  return !inputText || /^\s*$/.test(inputText) || inputText.length > 150;
}
</script>

<template>
  <form @submit.prevent="submitTodo(inputText)">
    <input
      class="input-base"
      :class="{ 'input-invalid': isInvalidInput === true }"
      v-model.trim="inputText"
      placeholder="Add task..."
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
