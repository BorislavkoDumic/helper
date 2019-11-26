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
  errors: []
};

const errorMessages = {
  errorType: "Value of Type is incorrect!",
  errorOptions: "Value of Options is incorrect!",
  errorJSON: "Input is not a valid JSON string or is not formatted correctly!"
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
      let parsedValues = { label: "", type: "", options: [] };
      let errorJSON = false;
      try {
        parsedValues = JSON.parse(action.jsonString);
      } catch (e) {
        errorJSON = true;
      }
      const errorType = !isValidType(parsedValues.type);
      const errorOptions =
        parsedValues.type === "select" || parsedValues.type === "radios"
          ? !isValidOptions(parsedValues.options)
          : false;

      let errors = [];
      if (errorJSON) {
        errors.push(errorMessages["errorJSON"]);
      }
      if (errorType) {
        errors.push(errorMessages["errorType"]);
      }
      if (errorOptions) {
        errors.push(errorMessages["errorOptions"]);
      }

      return {
        ...state,
        options: parsedValues.hasOwnProperty("options")
          ? parsedValues.options
          : [],
        label: parsedValues.label,
        type: parsedValues.type,
        parsedValues: parsedValues,
        errors: errors
      };
    default:
      return state;
  }
}
