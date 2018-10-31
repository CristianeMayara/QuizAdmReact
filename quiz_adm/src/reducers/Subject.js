import { createReducer } from "reduxsauce";
import { SubjectTypes } from "./../actions/Subject";

export const INITIAL_STATE = {
  error: false,
  loading: false,
  subject: { name: "", description: "" }
};

export const createSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    error: false,
    laoding: action.loading,
    subject: action.subject
  };
};

export const createError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    error: action.error,
    laoding: action.loading,
    subject: action.subject
  };
};

export const isLoading = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    error: false,
    laoding: action.loading,
    subject: action.subject
  };
};

export const HANDLER = {
  [SubjectTypes.CREATE_SUCCESS]: createSuccess,
  [SubjectTypes.CREATE_ERROR]: createError,
  [SubjectTypes.IS_LOADING]: isLoading
};
export default createReducer(INITIAL_STATE, HANDLER);
