import { describe, expect, it } from "@jest/globals";
import { mount, shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import TodoMainComponent from "@/components/templates/TodoMainComponent.vue";
import TextInput from "@/components/atoms/TextInput.vue";

describe("Given the TodoMainComponent component", () => {
  it("should render", () => {
    const store = createStore({});
    const wrapper = shallowMount(TodoMainComponent, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("should add new valid todo", async () => {
    const store = createStore({});
    store.commit = jest.fn();
    const wrapper = mount(TodoMainComponent, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.findComponent(TextInput).vm.$emit("submitForm", "todo");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledTimes(1);
    expect(store.commit).toHaveBeenCalledWith("addTodo", "todo");
  });

  it.each(["  ", "", "X".repeat(151)])(
    "should not add invalid todo",
    async (invalidTodo) => {
      const store = createStore({});
      store.commit = jest.fn();
      const wrapper = mount(TodoMainComponent, {
        global: {
          plugins: [store],
        },
      });
      await wrapper
        .findComponent(TextInput)
        .vm.$emit("submitForm", invalidTodo);
      await wrapper.vm.$nextTick();

      expect(store.commit).toHaveBeenCalledTimes(0);
    }
  );
});
