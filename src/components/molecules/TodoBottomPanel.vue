<script setup>
import TaskCounter from '@/components/atoms/TaskCounter.vue'
import FilterButton from '@/components/atoms/FilterButton.vue'
import ClearCompletedButton from '@/components/atoms/ClearCompletedButton.vue'
import { useStore } from 'vuex'

const store = useStore()

function setFilter (filterName) {
  store.commit('setFilter', filterName)
}

function deleteCompletedTasks () {
  store.commit('removeAllCompleted')
}
</script>

<template>
  <div class=bottom-panel>
    <TaskCounter/>
    <FilterButton @click="setFilter('incomplete')" label="Show incomplete" filter-name="incomplete"/>
    <FilterButton @click="setFilter('completed')" label="Show completed" filter-name="completed"/>
    <FilterButton @click="setFilter('all')" label="Show all" filter-name="all"/>
    <ClearCompletedButton @click="deleteCompletedTasks"/>
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
