import * as actionTypes from "../utils/actionTypes";

export const openOverlay = () => ({
  type: actionTypes.OPEN_OVERLAY
});
export const changeType = value => ({
  type: actionTypes.CHANGE_TYPE,
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

export const changeLabel = label => ({
  type: actionTypes.CHANGE_LABEL,
  label
});

export const saveValues = valuesString => ({
  type: actionTypes.SAVE_VALUES,
  valuesString
});
export const cancel = () => ({
  type: actionTypes.CANCEL
});
