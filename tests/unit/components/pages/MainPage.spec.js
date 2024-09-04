import { describe, expect, it } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";
import MainPage from "@/components/pages/MainPage.vue";

describe("Given the MainPage component", () => {
  it("should render", () => {
    const wrapper = shallowMount(MainPage, {});

    expect(wrapper.element).toMatchSnapshot();
  });
});
