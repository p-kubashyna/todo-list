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
    }],
    allTasks: (todoList) => todoList,
    completedTasks: (todoList) => todoList.filter((todoItem) => todoItem.isCompleted),
    incompleteTasks: (todoList) => todoList.filter((todoItem) => !todoItem.isCompleted),
    activeFilter: (todoList) => todoList
  },
  getters: {
    getTodoList (state) {
      return state.activeFilter(state.todoList)
    },
    getIncompleteTodosCount (state) {
      return state.todoList.filter((todo) => !todo.isCompleted).length
    }
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
    },
    removeAllCompleted (state) {
      state.todoList = state.todoList.filter((todo) => !todo.isCompleted)
    },
    setFilter (state, filter) {
      state.activeFilter = filter
    }
  },
  actions: {
  },
  modules: {
  }
})
