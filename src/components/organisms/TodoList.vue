<script setup>
import TodoElement from "@/components/molecules/TodoElement.vue";
import { useStore } from "vuex";
import draggable from "vuedraggable";
import { computed } from "vue";

const store = useStore();
const todos = computed(() => store.getters.getTodoList);
</script>

<template>
  <div>
    <draggable :list="todos" item-key="id">
      <template #item="{ element }">
        <TodoElement :todo-item="element" :key="element.id" />
      </template>
    </draggable>
  </div>
</template>
