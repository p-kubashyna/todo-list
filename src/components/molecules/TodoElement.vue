<script setup>
import CheckboxInput from '@/components/atoms/CheckboxInput.vue'
import DeleteTodoButton from '@/components/atoms/DeleteTodoButton.vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  todoItem: {
    type: Object,
    required: true
  }
})

function removeTodo (itemId) {
  store.commit('removeTodo', itemId)
}

function changeTodoState (itemId) {
  store.commit('changeState', itemId)
}
</script>

<template>
  <div class="item">
    <CheckboxInput :checked="props.todoItem.isCompleted" @change="changeTodoState(props.todoItem.id)"/>
    <span class="task" :class="{ 'completed-task' : props.todoItem.isCompleted === true }">{{ props.todoItem.name }}</span>
    <DeleteTodoButton @click="removeTodo(props.todoItem.id)"/>
  </div>
</template>

<style scoped>
.item {
  height: 30px;
  background-color: white;
  border-width: 0 0 1px 0;
  border-color: gray;
  border-style: solid;
  padding: 7px;
  display: flex;
  align-items: center;
}

.task {
  font-family: monospace;
  color: #121952;
  margin-left: 5px;
}

.completed-task {
  text-decoration: line-through;
  color: grey;
}
</style>
