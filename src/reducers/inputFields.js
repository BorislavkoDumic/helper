import {
  OPEN_OVERLAY,
  SHOW_OPTIONS,
  ADD_FIELD,
  REMOVE_FIELD,
  CHANGE_VALUE,
  CHANGE_LABEL,
  SAVE_VALUES,
  CANCEL
} from "../utils/actionTypes";

const initialState = {
  showOverlay: false,
  value: "",
  values: [],
  labelValue: "",
  mainInput: ""
};
export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_OVERLAY:
      return {
        ...state,
        showOverlay: true
      };
    case SHOW_OPTIONS:
      return {
        ...state,
        value: action.value
      };
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
        mainInput: action.valuesString,
        showOverlay: false,
        values: [],
        labelValue: " "
      };
    case CANCEL:
      return {
        ...state,
        values: [],
        labelValue: " ",
        mainInput: "Click here to for input text"
      };
    default:
      return state;
  }
}
