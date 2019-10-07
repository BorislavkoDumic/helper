import { ADD_FIELD, REMOVE_FIELD, CHANGE_VALUE } from "../utils/actionTypes";

const initialState = {
  values: []
};
export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      //console.log(action);
      let values = state.values.map((item, index) => {
        if (index !== action.index) {
          return item;
        }
        return action.value;
      });
      return {
        ...state,
        values
      };
    case ADD_FIELD:
      return {
        ...state,
        values: [...state.values, ""]
      };
    case REMOVE_FIELD:
      // console.log(action);
      state.values.splice(action.index, 1);
      //console.log(state);
      return {
        ...state,
        values: state.values.filter(index => index !== action.index)
      };
    default:
      return state;
  }
}
