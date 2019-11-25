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
  jsonString: "",
  inputErrorType: false,
  inputErrorOptions: false,
  inputErrorJson: false
};
function isValidType(type) {
  if (!["checkbox", "text", "select", "radios", ""].includes(type)) {
    return false;
  }
  return true;
}
function isValidOptions(options) {
  if (Array.isArray(options) && options.length > 0) {
    return true;
  } else {
    return false;
  }
}
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
        label: " ",
        inputErrorType: isValidType(action.type)
      };
    case CANCEL:
      return {
        ...state,
        options: [],
        label: " ",
        jsonString: ""
      };
    case SET_VALUES:
      let parseError = false;
      let parsedValues = { label: "", type: "", options: [] };
      try {
        parsedValues = JSON.parse(action.jsonString);
      } catch (e) {
        parseError = true;
      }

      return {
        ...state,
        options: parsedValues.hasOwnProperty("options")
          ? parsedValues.options
          : [],
        label: parsedValues.label,
        type: parsedValues.type,
        parsedValues: parsedValues,
        inputErrorType: !isValidType(parsedValues.type),
        inputErrorOptions:
          parsedValues.type === "select" || parsedValues.type === "radios"
            ? !isValidOptions(parsedValues.options)
            : false,
        inputErrorJson: parseError
      };
    default:
      return state;
  }
}
