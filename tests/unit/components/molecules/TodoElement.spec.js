import { describe, expect, it } from "@jest/globals";
import { mount } from "@vue/test-utils";
import TodoElement from "@/components/molecules/TodoElement.vue";
import { createStore } from "vuex";

describe("Given the TodoElement component", () => {
  const defaultTodo = {
    todoItem: { name: "todo", isCompleted: false, id: "id" },
  };

  it.each([
    [{ todoItem: { name: "todo", isCompleted: false, id: "id" } }],
    [{ todoItem: { name: "todo", isCompleted: true, id: "id" } }],
  ])("should render", (propsData) => {
    const store = createStore({});
    const wrapper = mount(TodoElement, {
      props: propsData,
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("should change todo state on checkbox change", async () => {
    const store = createStore({});
    store.commit = jest.fn();
    const wrapper = mount(TodoElement, {
      props: defaultTodo,
      global: {
        plugins: [store],
      },
    });
    await wrapper.find("input[type='checkbox']").trigger("change");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledTimes(1);
    expect(store.commit).toHaveBeenCalledWith(
      "changeState",
      defaultTodo.todoItem.id
    );
  });

  it("should delete todo on button click", async () => {
    const store = createStore({});
    store.commit = jest.fn();
    const wrapper = mount(TodoElement, {
      props: defaultTodo,
      global: {
        plugins: [store],
      },
    });
    await wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledTimes(1);
    expect(store.commit).toHaveBeenCalledWith(
      "removeTodo",
      defaultTodo.todoItem.id
    );
  });
});
