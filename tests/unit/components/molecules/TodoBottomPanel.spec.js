import { describe, expect, it } from "@jest/globals";
import { mount } from "@vue/test-utils";
import TodoBottomPanel from "@/components/molecules/TodoBottomPanel.vue";
import { createStore } from "vuex";
import { FILTERS } from "@/constants/constants";

function findByText(wrap, text) {
  return wrap
    .findAll("button")
    .filter((n) => n.text().match(text))
    .at(0);
}

describe("Given the TodoBottomPanel component", () => {
  const defaultStore = {
    state: {
      activeFilterName: FILTERS.ALL,
    },
    getters: {
      getCompletedTodosCount: () => 0,
    },
  };

  it.each([
    [FILTERS.ALL, 1],
    [FILTERS.COMPLETED, 0],
    [FILTERS.INCOMPLETE, 0],
  ])("should render", (activeFilter, completedCount) => {
    const store = createStore({
      state: {
        activeFilterName: activeFilter,
      },
      getters: {
        getCompletedTodosCount: () => completedCount,
      },
    });
    const wrapper = mount(TodoBottomPanel, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it.each([
    ["Show incomplete", FILTERS.INCOMPLETE],
    ["Show completed", FILTERS.COMPLETED],
    ["Show all", FILTERS.ALL],
  ])("should change filter on click", async (buttonLabel, filterName) => {
    const store = createStore(defaultStore);
    store.commit = jest.fn();
    const wrapper = mount(TodoBottomPanel, {
      global: {
        plugins: [store],
      },
    });
    await findByText(wrapper, buttonLabel).trigger("click");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledTimes(1);
    expect(store.commit).toHaveBeenCalledWith("setFilter", filterName);
  });

  it("should delete completed on click", async () => {
    const store = createStore({
      state: {
        activeFilterName: FILTERS.ALL,
      },
      getters: {
        getCompletedTodosCount: () => 1,
      },
    });
    store.commit = jest.fn();
    const wrapper = mount(TodoBottomPanel, {
      global: {
        plugins: [store],
      },
    });
    await findByText(wrapper, "Delete completed").trigger("click");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledTimes(1);
    expect(store.commit).toHaveBeenCalledWith("removeAllCompleted");
  });

  it("should do nothing on click when delete completed button is disabled", async () => {
    const store = createStore(defaultStore);
    store.commit = jest.fn();
    const wrapper = mount(TodoBottomPanel, {
      global: {
        plugins: [store],
      },
    });
    await findByText(wrapper, "Delete completed").trigger("click");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledTimes(0);
  });
});
