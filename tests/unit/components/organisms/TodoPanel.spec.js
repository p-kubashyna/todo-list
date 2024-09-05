import { describe, expect, it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";
import TodoPanel from "@/components/organisms/TodoPanel.vue";

describe("Given the TodoPanel component", () => {
  it("should render", () => {
    const wrapper = shallowMount(TodoPanel, {});

    expect(wrapper.element).toMatchSnapshot();
  });
});
