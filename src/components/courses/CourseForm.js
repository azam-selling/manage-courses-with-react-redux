import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = (props) => (
  <form onSubmit={props.onSave}>
    <h2>{props.course.id ? "Edit" : "Add"} course</h2>
    {props.errors && props.errors.savingError && (
      <div className="alert alert-danger">{props.errors.savingError}</div>
    )}
    <TextInput
      name="title"
      label="Title"
      value={props.course.title}
      onChange={props.onChange}
      error={props.errors.title}
    />
    <SelectInput
      name="authorId"
      label="Author"
      value={props.course.authorId || ""}
      defaultOption="Select Author"
      options={props.authors.map((author) => {
        return {
          value: author.id,
          text: author.name,
        };
      })}
      onChange={props.onChange}
      error={props.errors.authorId}
    />
    <TextInput
      name="category"
      label="Category"
      value={props.course.category}
      onChange={props.onChange}
      error={props.errors.category}
    />

    <button type="submit" disabled={props.saving} className="btn btn-primary">
      {props.saving ? "Saving..." : "Save"}
    </button>
  </form>
);

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
};

export default CourseForm;
