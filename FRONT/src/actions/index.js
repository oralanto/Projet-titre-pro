// Action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

// Action creators
export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});
