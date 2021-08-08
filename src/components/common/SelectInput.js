import React from "react";
import PropTypes from "prop-types";

const SelectInput = (props) => {
  let controlClass = "form-control mb-3";
  if (props.error) {
    controlClass = controlClass.replace(" mb-3", "");
  }
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div>
        <select
          className={controlClass}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        >
          <option value="">{props.defaultOption}</option>
          console.log(options)
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
};
export default SelectInput;
