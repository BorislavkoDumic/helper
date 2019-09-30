import { ADD_FIELD, REMOVE_FIELD } from "../utils/actionTypes";

const initialState = {
  values: []
};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        values: this.state.values.concat([" "])
      };
    case REMOVE_FIELD:
      return {
        ...state
      };
    default:
      return state;
  }
}
