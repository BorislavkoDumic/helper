import {
  ADD_FIELD,
  REMOVE_FIELD,
  CHANGE_VALUE,
  CHANGE_LABEL,
  SAVE_VALUES,
  CANCEL
} from "../utils/actionTypes";

const initialState = {
  values: [],
  labelValue: "",
  mainInput: ""
};
export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
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
    case CHANGE_LABEL:
      return {
        ...state,
        labelValue: action.labelValue
      };
    case ADD_FIELD:
      return {
        ...state,
        values: [...state.values, ""]
      };
    case REMOVE_FIELD:
      state.values.splice(action.index, 1);
      return {
        ...state,
        values: state.values.filter(index => index !== action.index)
      };
    case SAVE_VALUES:
      return {
        ...state,
        mainInput: action.valuesString
      };
    case CANCEL:
      return {
        ...state,
        values: [],
        labelValue: " ",
        mainInput: ""
      };
    default:
      return state;
  }
}
