import { describe, expect, it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";
import TextInput from "@/components/atoms/TextInput.vue";

describe("Given the TextInput component", () => {
  const defaultPros = { placeholder: "placeholder", isInvalidInput: true };

  it.each([
    [{ placeholder: "placeholder1", isInvalidInput: true }],
    [{ placeholder: "placeholder2", isInvalidInput: false }],
  ])("should render", (propsData) => {
    const wrapper = shallowMount(TextInput, { props: propsData });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("should set the value", async () => {
    const wrapper = shallowMount(TextInput, { props: defaultPros });
    const textInput = wrapper.find("input");
    await textInput.setValue("some value");

    expect(wrapper.find("input").element.value).toBe("some value");
    expect(wrapper.vm.inputText).toBe("some value");
  });

  it("should emit an event and clear input when form is submitted", async () => {
    const wrapper = shallowMount(TextInput, { props: defaultPros });
    await wrapper.find("form").trigger("submit");
    const submitFormEvent = wrapper.emitted("submitForm");

    expect(wrapper.emitted()).toHaveProperty("submitForm");
    expect(submitFormEvent).toHaveLength(1);
    expect(wrapper.vm.inputText).toBe("");
  });
});
