<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const activeFilterName = computed(() => store.state.activeFilterName);
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "",
  },
  filterName: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <button
    class="filter-button"
    :class="{ 'active-filter': activeFilterName === filterName }"
  >
    {{ props.label }}
  </button>
</template>

<style>
.filter-button {
  background: white;
  margin-left: 5px;
  font-family: monospace;
  border-style: none;
}

.filter-button:hover {
  text-decoration: underline;
}

.active-filter {
  text-decoration: underline;
}
</style>
