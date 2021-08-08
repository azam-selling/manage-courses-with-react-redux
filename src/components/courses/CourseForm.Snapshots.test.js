import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("Should check text of save button to be 'Saving...' when saving", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      errors={{}}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving
    />
  );
  expect(tree).toMatchSnapshot();
});

it("Should check text of save button to be 'Save' when not saving", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      errors={{}}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
