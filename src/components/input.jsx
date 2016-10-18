// @flow
import React, { PropTypes } from 'react';

import './input.css';

export default function Input(props) {
  return (
    <div className="Input">
      <input
        id={props.name}
        autoComplete={props.autoComplete}
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
      />
      <label htmlFor={props.name} />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  autoComplete: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
