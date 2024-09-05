import { describe, expect, it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";
import DeleteTodoButton from "@/components/atoms/DeleteTodoButton.vue";

describe("Given the DeleteTodoButton component", () => {
  it("should render", () => {
    const wrapper = shallowMount(DeleteTodoButton, {});

    expect(wrapper.element).toMatchSnapshot();
  });
});
