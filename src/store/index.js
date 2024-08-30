import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    todoList: [
      {
        id: uuidv4(),
        name: "Read for 1 hour",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        name: "Pick up groceries",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        name: "10 minutes meditation",
        isCompleted: false,
      },
    ],
    filters: {
      all: (todoList) => todoList,
      completed: (todoList) =>
        todoList.filter((todoItem) => todoItem.isCompleted),
      incomplete: (todoList) =>
        todoList.filter((todoItem) => !todoItem.isCompleted),
    },
    activeFilter: (todoList) => todoList,
    activeFilterName: "all",
  },
  getters: {
    getTodoList(state) {
      return state.activeFilter(state.todoList);
    },
    getIncompleteTodosCount(state) {
      return state.todoList.filter((todo) => !todo.isCompleted).length;
    },
    getCompletedTodosCount(state) {
      return state.todoList.filter((todo) => todo.isCompleted).length;
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todoList.push({
        id: uuidv4(),
        name: newTodo,
        isCompleted: false,
      });
    },
    removeTodo(state, todoId) {
      const index = state.todoList.findIndex((item) => item.id === todoId);
      state.todoList.splice(index, 1);
    },
    changeState(state, todoId) {
      const index = state.todoList.findIndex((item) => item.id === todoId);
      const todoItem = state.todoList[index];
      todoItem.isCompleted = !todoItem.isCompleted;
    },
    removeAllCompleted(state) {
      state.todoList = state.todoList.filter((todo) => !todo.isCompleted);
    },
    setFilter(state, filterName) {
      state.activeFilter = state.filters[filterName];
      state.activeFilterName = filterName;
    },
  },
  actions: {},
  modules: {},
});
