import { createStore } from 'vuex'

export default createStore({
  state: {
    newTodoItem: ''
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
