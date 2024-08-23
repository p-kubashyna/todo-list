import { createStore } from 'vuex'

export default createStore({
  state: {
    newTodoItem: '',
    idCounter: 4,
    todoList: [{
      id: 1,
      name: 'Read for 1 hour',
      isCompleted: false
    },
    {
      id: 2,
      name: 'Pick up groceries',
      isCompleted: false
    },
    {
      id: 3,
      name: '10 minutes meditation',
      isCompleted: false
    }]
  },
  getters: {
  },
  mutations: {
    addTodo (state, newTodo) {
      state.todoList.push({
        id: state.idCounter,
        name: newTodo,
        isCompleted: false
      })
      state.idCounter++
    },
    removeTodo (state, todoId) {
      const index = state.todoList.findIndex((item) => item.id === todoId)
      state.todoList.splice(index, 1)
    },
    changeState (state, todoId) {
      const index = state.todoList.findIndex((item) => item.id === todoId)
      const todoItem = state.todoList[index]
      todoItem.isCompleted = !todoItem.isCompleted
    }
  },
  actions: {
  },
  modules: {
  }
})
