import * as actionTypes from "../utils/actionTypes";

export const openOverlay = () => ({
  type: actionTypes.OPEN_OVERLAY
});

export const showOptions = value => ({
  type: actionTypes.SHOW_OPTIONS,
  value
});

export const addField = () => ({
  type: actionTypes.ADD_FIELD
});

export const removeField = index => ({
  type: actionTypes.REMOVE_FIELD,
  index
});

export const changeValue = (value, index) => ({
  type: actionTypes.CHANGE_VALUE,
  value,
  index
});
