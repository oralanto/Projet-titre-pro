import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = ({ label, name, type }) => (
  <div className="Login__form__fields">
    <label
      htmlFor={name}
      className="Login__form__fields__label"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={label}
      className="Login__form__fields__field"
    />
  </div>
);
export default Field;
