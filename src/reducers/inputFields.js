import {
  CHANGE_TYPE,
  ADD_FIELD,
  REMOVE_FIELD,
  CHANGE_VALUE,
  CHANGE_LABEL,
  SAVE_VALUES,
  CANCEL,
  SET_VALUES
} from "../utils/actionTypes";

const initialState = {
  type: "",
  options: [],
  label: "",
  jsonString: ""
};
export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TYPE:
      return {
        ...state,
        type: action.value
      };
    case CHANGE_VALUE:
      let options = state.options.map((item, index) => {
        if (index !== action.index) {
          return item;
        }
        return action.value;
      });
      return {
        ...state,
        options
      };
    case CHANGE_LABEL:
      return {
        ...state,
        label: action.label
      };
    case ADD_FIELD:
      return {
        ...state,
        options: [...state.options, ""]
      };
    case REMOVE_FIELD:
      return {
        ...state,
        options: [
          ...state.options.slice(0, action.index),
          ...state.options.slice(action.index + 1)
        ]
      };
    case SAVE_VALUES:
      return {
        ...state,
        jsonString: action.valuesString,
        options: [],
        label: " "
      };
    case CANCEL:
      return {
        ...state,
        options: [],
        label: " ",
        jsonString: ""
      };
    case SET_VALUES:
      console.log(action);
      return {
        ...state,
        options: [action.setFormValues.options],
        label: action.setFormValues.label,
        type: action.setFormValues.type
      };
    default:
      return state;
  }
}
