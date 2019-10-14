import {
  OPEN_OVERLAY,
  CHANGE_TYPE,
  ADD_FIELD,
  REMOVE_FIELD,
  CHANGE_VALUE,
  CHANGE_LABEL,
  SAVE_VALUES,
  CANCEL
} from "../utils/actionTypes";

const initialState = {
  showOverlay: false,
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
      state.options.splice(action.index, 1);
      return {
        ...state,
        options: state.options.filter(index => index !== action.index)
      };
    case SAVE_VALUES:
      return {
        ...state,
        jsonString: action.valuesString,
        showOverlay: false,
        options: [],
        label: " "
      };
    case CANCEL:
      return {
        ...state,
        options: [],
        label: " ",
        jsonString: "Click here to for input text"
      };
    case OPEN_OVERLAY:
      return {
        ...state,
        showOverlay: true
      };
    default:
      return state;
  }
}
