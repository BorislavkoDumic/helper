import { OPEN_OVERLAY } from "../utils/actionTypes";

const initialState = {
  showOverlay: false
};

export default function overlayReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_OVERLAY:
      return {
        ...state,
        showOverlay: true
      };
    default:
      return state;
  }
}
