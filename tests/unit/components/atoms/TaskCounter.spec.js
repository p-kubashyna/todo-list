import { describe, expect, it } from "@jest/globals";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import TaskCounter from "@/components/atoms/TaskCounter.vue";

describe("Given the TaskCounter component", () => {
  it("should render", async () => {
    const store = createStore({
      getters: {
        getIncompleteTodosCount: () => 0,
      },
    });

    const wrapper = mount(TaskCounter, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it.each([
    [0, "No tasks left"],
    [1, "1 task left"],
    [2, "2 tasks left"],
  ])("should have correct label", async (counterValue, labelText) => {
    const store = createStore({
      getters: {
        getIncompleteTodosCount: () => counterValue,
      },
    });

    const wrapper = mount(TaskCounter, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find("span").text()).toBe(labelText);
  });
});
