<script setup>
import BackgroundImage from '../../components/atoms/BackgroundImage.vue'
import TodoMainComponent from '../../components/templates/TodoMainComponent.vue'
import TodoTitle from '@/components/atoms/TodoTitle.vue'
</script>

<template>
  <BackgroundImage/>
  <div class="content">
    <TodoTitle />
    <TodoMainComponent/>
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
