import React from "react";
import PropTypes from "prop-types";

const TextInput = (props) => {
  let controlClass = "form-control mb-3";
  if (props.error) {
    controlClass = controlClass.replace(" mb-3", "");
  }
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div>
        <input
          type="text"
          className={controlClass}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
