import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import './button.css';

export default function Button(props) {
  return (
    <button
      id={props.id}
      className={props.btnType}
      type={props.type}
    >
      {props.text}
      <FontAwesome
        className={props.iconClassName}
        name={props.iconName}
        size={props.iconSize}
        spin={props.iconSpin}
      />
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  btnType: PropTypes.string,
  type: PropTypes.string,
  iconClassName: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.string,
  iconSpin: PropTypes.string,
};
