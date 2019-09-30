import * as actionTypes from "../utils/actionTypes";

export const openOverlay = () => ({
  type: actionTypes.OPEN_OVERLAY
});

export const showOptions = () => ({
  type: actionTypes.SHOW_OPTIONS
});

export const addField = values => ({
  type: actionTypes.ADD_FIELD,
  values
});

export const removeField = values => ({
  type: actionTypes.REMOVE_FIELD,
  values
});
