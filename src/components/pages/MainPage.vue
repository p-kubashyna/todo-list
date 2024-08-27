<script setup>
import BackgroundImage from '../../components/atoms/BackgroundImage.vue'
import TodoMainComponent from '../../components/templates/TodoMainComponent.vue'
</script>

<template>
  <BackgroundImage/>
  <div class="content">
    <span class=header>TODO</span>
    <TodoMainComponent/>
  </div>
</template>

<style>
.header {
  font-family: sans-serif;
  font-variant: all-small-caps;
  font-size: 48px;
  align-self: normal;
  margin-bottom: 15px;
  color: #0d1685;
}

.content {
  position: relative;
  padding: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: -webkit-center;
}
</style>
