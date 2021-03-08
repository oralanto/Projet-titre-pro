import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = ({
  label,
  name,
  type,
  onChangeInputValue,
}) => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
    onChangeInputValue(e.target.value);
  };
  return (
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
        onChange={handleOnChange}
      />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
