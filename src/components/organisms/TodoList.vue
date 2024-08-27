<script setup>
import TodoElement from '@/components/molecules/TodoElement.vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable'
import { computed } from 'vue'

const store = useStore()
const todos = computed(() => store.getters.getTodoList)
</script>

<template>
  <div>
    <draggable :list="todos" itemKey="id">
      <template #item="{element}">
        <TodoElement v-bind:todo-item="element" v-bind:key="element.id"/>
      </template>
    </draggable>
  </div>
</template>
