import { describe, expect, it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";
import TodoButton from "@/components/atoms/TodoButton.vue";

describe("Given the TodoButton component", () => {
  it.each([
    [
      {
        label: "button 1",
        isDisabled: false,
        additionalClass: "additional-class",
      },
    ],
    [
      {
        label: "button 2",
        isDisabled: true,
        additionalClass: "additional-class",
      },
    ],
    [{ label: "button 3", isDisabled: false, additionalClass: "" }],
    [{ label: "button 4" }],
  ])("should render", (propsData) => {
    const wrapper = shallowMount(TodoButton, { props: propsData });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("should disable button when disabled prop is passed", async () => {
    const wrapper = shallowMount(TodoButton, {
      props: { label: "button", isDisabled: true },
    });
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(true);
  });
});
