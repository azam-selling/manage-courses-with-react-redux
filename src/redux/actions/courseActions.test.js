import * as courseActions from "./courseActions";
import * as actionTypes from "./actionTypes";
import { courses } from "../../../tools/mockData";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

//test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load course thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: actionTypes.BEGIN_API_CALL },
        { type: actionTypes.LOAD_COURSES_SUCCESS, courses: courses },
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createCourseSuccess", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    //Arrange
    const course = courses[0];

    const expectedAction = {
      type: actionTypes.CREATE_COURSE_SUCCESS,
      course: course,
    };

    //Act
    const result = courseActions.createCourseSuccess(course);

    //Assert
    expect(result).toEqual(expectedAction);
  });
});
