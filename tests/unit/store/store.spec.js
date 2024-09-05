import { describe, expect, it, beforeEach } from "@jest/globals";
import { FILTERS } from "@/constants/constants";
import store from "@/store/index";

const completedTodo = {
  id: "todo-1",
  name: "todo-1",
  isCompleted: true,
};
const incompleteTodo = {
  id: "todo-2",
  name: "todo-2",
  isCompleted: false,
};

describe("Test getters", () => {
  beforeEach(() => {
    store.state.todoList = [incompleteTodo, completedTodo];
  });

  it.each([
    [FILTERS.ALL, [incompleteTodo, completedTodo]],
    [FILTERS.INCOMPLETE, [incompleteTodo]],
    [FILTERS.COMPLETED, [completedTodo]],
  ])("should get expected todos for each filter", (filterName, expected) => {
    store.state.activeFilter = store.state.filters[filterName];

    const result = store.getters.getTodoList;

    expect(result).toEqual(expected);
  });

  it("should get incomplete tasks count", () => {
    const result = store.getters.getIncompleteTodosCount;

    expect(result).toEqual(1);
  });

  it("should get completed tasks count", () => {
    const result = store.getters.getCompletedTodosCount;

    expect(result).toEqual(1);
  });
});

describe("Test mutations", () => {
  beforeEach(() => {
    store.state.todoList = [incompleteTodo, completedTodo];
  });

  it("should add todo", () => {
    store.commit("addTodo", "newTodo");

    expect(store.state.todoList.length).toEqual(3);
    const newTodo = store.state.todoList[2];
    expect(newTodo.name).toEqual("newTodo");
    expect(newTodo.isCompleted).toBe(false);
    expect(newTodo.id).not.toBeNull();
  });

  it("should remove todo", () => {
    store.commit("removeTodo", "todo-1");

    expect(store.state.todoList.length).toEqual(1);
    expect(
      store.state.todoList.filter((todo) => todo.id === "todo-1").length
    ).toEqual(0);
  });

  it("should remove all completed", () => {
    store.commit("removeAllCompleted");

    expect(store.state.todoList.length).toEqual(1);
    expect(
      store.state.todoList.filter((todo) => todo.isCompleted).length
    ).toEqual(0);
  });

  it.each([
    ["todo-1", false],
    ["todo-2", true],
  ])("should change completed state", (id, expectedState) => {
    store.commit("changeState", id);

    expect(
      store.state.todoList.filter((todo) => todo.id === id).at(0).isCompleted
    ).toEqual(expectedState);
  });

  it("should change filter", () => {
    store.commit("setFilter", FILTERS.COMPLETED);

    expect(store.state.activeFilterName).toEqual(FILTERS.COMPLETED);
    expect(store.state.activeFilter).toEqual(
      store.state.filters[FILTERS.COMPLETED]
    );
  });
});
