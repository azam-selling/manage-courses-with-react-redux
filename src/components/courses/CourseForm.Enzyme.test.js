import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    errors: {},
    saving: false,
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCourseForm();

  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add course");
});

it("save button text to be save when not saving", () => {
  const wrapper = renderCourseForm();

  expect(wrapper.find("button").text()).toBe("Save");
});

it("save button text to be save when saving", () => {
  const wrapper = renderCourseForm({ saving: true });

  expect(wrapper.find("button").text()).toBe("Saving...");
});
