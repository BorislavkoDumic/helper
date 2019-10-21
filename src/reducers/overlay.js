import { OPEN_OVERLAY, SAVE_VALUES, CANCEL } from "../utils/actionTypes";

const initialState = {
  // showOverlay: true
};

export default function overlayReducer(state = initialState, action) {
  switch (action.type) {
    // case OPEN_OVERLAY:
    //   return {
    //     ...state,
    //     showOverlay: true
    //   };
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
