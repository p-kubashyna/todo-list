<script setup>
import TodoElement from '@/components/molecules/TodoElement.vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable'
import { computed } from 'vue'

const store = useStore()
const todos = computed({
  get () {
    return store.getters.getTodoList
  }
})
const incompleteCounter = computed(() => store.getters.getIncompleteTodosCount)
function setFilter (filterName) {
  store.commit('setFilter', filterName)
}
</script>

<template>
  <div class="list">
    <draggable :list="todos" itemKey="id">
      <template #item="{element}">
        <TodoElement v-bind:todo-item="element" v-bind:key="element.id"/>
      </template>
    </draggable>
    <div class=bottom-panel><span>Tasks to complete: {{ incompleteCounter }}</span>
      <button @click="setFilter(store.state.incompleteTasks)">Show incomplete</button>
      <button @click="setFilter(store.state.completedTasks)">Show complete</button>
      <button @click="setFilter(store.state.allTasks)">Show all</button>
      <button>Delete all completed</button>
    </div>
  </div>
</template>

<style>
.bottom-panel {
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  height: 40px;
  background-color: white;
}

.list {
  margin-top: 30px;
  width: 600px;
  border-radius: 7px;
  border-width: 5px;
  border-color: white;
  border-style: solid;
  box-shadow: -15px 15px 30px 1px rgba(0, 0, 0, .25);
}
</style>
