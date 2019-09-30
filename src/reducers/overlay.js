import { OPEN_OVERLAY, SHOW_OPTIONS } from "../utils/actionTypes";

const initialState = {
  showOverlay: false,
  showOptions: false
};

export default function overlayReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_OVERLAY:
      return {
        ...state,
        showOverlay: true
      };
    case SHOW_OPTIONS:
      return {
        ...state,
        showOptions: true
      };
    default:
      return state;
  }
}
