// @flow
import React, { PropTypes } from 'react';

import Input from './input';
import Button from './button';

import './modal.css';


export default function Modal(props) {
  return (
    <div className="Modal">
      <form
        onSubmit={props.onSubmit}
        className="ModalForm"
      >
        <Input
          id="name"
          autoComplete={false}
          required={false}
          type="text"
          placeholder="Name"
        />
        <Input
          id="username"
          autoComplete={false}
          required={false}
          type="email"
          placeholder="name@example.com"
        />
        <Input
          id="password"
          autoComplete={false}
          required={true}
          type="password"
          placeholder="password"
        />
        <Button
          id="submit"
          text="Log in"
          btnType="default"
          type="submit"
          iconClassName=""
          iconName="rocket"
        />
      </form>
    </div>
  );
}

Modal.propTypes = {
  onSubmit: PropTypes.func,
};
