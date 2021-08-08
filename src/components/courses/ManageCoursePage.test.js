import React from "react";
import { mount } from "enzyme";
import { courses, authors, newCourse } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function renderManageCoursePage(args) {
  const defaultProps = {
    authors,
    courses,
    course: newCourse,
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    saveCourse: jest.fn(),
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    match: {},
    courseSlug: "",
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursePage {...props} />);
}

it("set error when attepmting to save an empty title course", () => {
  const wrapper = renderManageCoursePage();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
