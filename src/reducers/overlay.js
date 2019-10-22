import { SAVE_VALUES, CANCEL } from "../utils/actionTypes";

const initialState = {};

export default function overlayReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_VALUES:
      return {
        ...state,
        showOverlay: false
      };
    case CANCEL:
      return {
        ...state,
        showOverlay: false
      };
    default:
      return state;
  }
}
