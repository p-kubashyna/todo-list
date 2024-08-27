<script setup>
import TodoList from '@/components/organisms/TodoList.vue'
import TodoBottomPanel from '@/components/molecules/TodoBottomPanel.vue'
</script>

<template>
<div class="test">
  <TodoList/>
  <TodoBottomPanel/>
</div>
</template>

<style>
.test {
  margin-top: 30px;
  width: 600px;
  border-radius: 7px;
  border-width: 5px;
  border-color: white;
  border-style: solid;
  box-shadow: -15px 15px 30px 1px rgba(0, 0, 0, .25);
}
</style>
