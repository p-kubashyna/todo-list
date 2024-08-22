import { createStore } from 'vuex'

export default createStore({
  state: {
    newTodoItem: '',
    todoList: [{
      name: 'Read for 1 hour',
      isCompleted: false
    },
    {
      name: 'Pick up groceries',
      isCompleted: false
    },
    {
      name: '10 minutes meditation',
      isCompleted: false
    }]
  },
  getters: {
  },
  mutations: {
    setTodo (state, newTodo) {
      state.newTodoItem = newTodo
    }
  },
  actions: {
  },
  modules: {
  }
})
