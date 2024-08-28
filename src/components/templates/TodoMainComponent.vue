<script setup>
/* eslint-disable */
import TextInput from "@/components/atoms/TextInput.vue";
import TodoPanel from "@/components/organisms/TodoPanel.vue";
import TodoTitle from "@/components/atoms/TodoTitle.vue";
import BackgroundImage from "@/components/atoms/BackgroundImage.vue";
</script>

<template>
  <BackgroundImage />
  <div class="content">
    <TodoTitle />
    <div>
      <TextInput />
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
