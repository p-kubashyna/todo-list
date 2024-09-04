import { describe, expect, it } from "@jest/globals";
import { FILTERS } from "@/constants/constants";
import store from "@/store/index";

describe("Test getters", () => {
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
  store.state.todoList = [incompleteTodo, completedTodo];

  it.each([
    [FILTERS.ALL, store.state.todoList],
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
