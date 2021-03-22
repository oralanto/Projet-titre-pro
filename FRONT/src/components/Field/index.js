import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = ({
  label,
  name,
  type,
  className,
  onChangeInputValue,
}) => {
  const handleOnChange = (e) => {
    onChangeInputValue(e.target.value);
  };
  return (
    <div>
      <input
        className={className}
        id={name}
        name={name}
        type={type}
        placeholder={label}
        onChange={handleOnChange}
      />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
