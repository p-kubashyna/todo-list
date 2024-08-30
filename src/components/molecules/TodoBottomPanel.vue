<script setup>
import TaskCounter from "@/components/atoms/TaskCounter.vue";
import TodoButton from "@/components/atoms/TodoButton.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_INCOMPLETE,
} from "@/constants/constants";

const store = useStore();
const activeFilterName = computed(() => store.state.activeFilterName);
const hasCompleted = computed(() => store.getters.getCompletedTodosCount > 0);

function setFilter(filterName) {
  store.commit("setFilter", filterName);
}

function deleteCompletedTasks() {
  store.commit("removeAllCompleted");
}

function setActiveFilterClass(filterName) {
  return activeFilterName.value === filterName ? "active-filter" : "";
}
</script>

<template>
  <div class="bottom-panel">
    <TaskCounter />
    <TodoButton
      @click="setFilter(FILTER_INCOMPLETE)"
      label="Show incomplete"
      :additional-class="setActiveFilterClass(FILTER_INCOMPLETE)"
    />
    <TodoButton
      @click="setFilter(FILTER_COMPLETED)"
      label="Show completed"
      :additional-class="setActiveFilterClass(FILTER_COMPLETED)"
    />
    <TodoButton
      @click="setFilter(FILTER_ALL)"
      label="Show all"
      :additional-class="setActiveFilterClass(FILTER_ALL)"
    />
    <TodoButton
      @click="deleteCompletedTasks"
      label="Delete completed"
      :is-disabled="!hasCompleted"
    />
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

.active-filter {
  text-decoration: underline;
}
</style>
