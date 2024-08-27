<script setup>
import TaskCounter from '@/components/atoms/TaskCounter.vue'
import ButtonInput from '@/components/atoms/ButtonInput.vue'
import { useStore } from 'vuex'

const store = useStore()

function setFilter (filterName) {
  store.commit('setFilter', filterName)
  console.log(store.state.activeFilter.name)
}

function deleteCompletedTasks () {
  store.commit('removeAllCompleted')
}
</script>

<template>
  <div class=bottom-panel>
    <TaskCounter/>
    <ButtonInput @click="setFilter('incomplete')" label="Show incomplete"/>
    <ButtonInput @click="setFilter('completed')" label="Show completed"/>
    <ButtonInput @click="setFilter('all')" label="Show all"/>
    <ButtonInput @click="deleteCompletedTasks" label="Delete completed"/>
  </div>
</template>

<style>
.bottom-panel {
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  height: 50px;
  background-color: white;
  padding-bottom: 10px;
}
</style>
