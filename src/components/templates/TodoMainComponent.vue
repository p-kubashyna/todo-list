<script setup>
/* eslint-disable */
import TextInput from "@/components/atoms/TextInput.vue";
import TodoPanel from "@/components/organisms/TodoPanel.vue";
import TodoTitle from "@/components/atoms/TodoTitle.vue";
import BackgroundImage from "@/components/atoms/BackgroundImage.vue";
import { ref } from "vue";
import store from "@/store";

const isInvalidInput = ref(false);

function submitTodo(inputText) {
  isInvalidInput.value = validateInput(inputText);
  if (!isInvalidInput.value) {
    store.commit("addTodo", inputText);
  }
}

function validateInput(inputText) {
  return !inputText || /^\s*$/.test(inputText) || inputText.length > 150;
}
</script>

<template>
  <BackgroundImage />
  <div class="content">
    <TodoTitle />
    <div>
      <TextInput @submitForm="(inputText) => submitTodo(inputText)" :is-invalid-input=isInvalidInput placeholder="Add task..."/>
      <TodoPanel />
    </div>
  </div>
</template>

<style>
.content {
  position: relative;
  padding: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: -webkit-center;
}
</style>
