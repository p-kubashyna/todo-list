import { describe, expect, it } from "@jest/globals";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import TodoList from "@/components/organisms/TodoList.vue";

describe("Given the TodoList component", () => {
  const todos = [
    { name: "todo-1", isCompleted: false, id: "id-1" },
    { name: "todo-2", isCompleted: true, id: "id-2" },
  ];

  it("should render", () => {
    const store = createStore({
      getters: {
        getTodoList: () => todos,
      },
    });
    const wrapper = mount(TodoList, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
