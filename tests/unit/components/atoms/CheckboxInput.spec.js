import { describe, expect, it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";
import CheckboxInput from "@/components/atoms/CheckboxInput.vue";

describe("Given the CheckboxInput component", () => {
  it.each([[{ checked: true }], [{ checked: false }]])(
    "should render",
    (propsData) => {
      const wrapper = shallowMount(CheckboxInput, { props: propsData });

      expect(wrapper.element).toMatchSnapshot();
    }
  );
});
