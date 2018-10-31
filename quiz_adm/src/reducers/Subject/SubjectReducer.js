import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { SubjectTypes } from "../../actions/Subject/SubjectAction";

export const INITIAL_STATE = Immutable({
  newSubject: {
    error: false,
    loading: false,
    subject: { name: "", description: "" }
  }
});

export const createSubject = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    newSubject: {
      error: false,
      laoding: true,
      subject: { name: "", description: "" }
    }
  };
};

export const createSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    newSubject: {
      error: false,
      laoding: false,
      subject: action.subject
    }
  };
};

export const createError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    newSubject: {
      error: true,
      laoding: false,
      subject: { name: "", description: "" }
    }
  };
};

export const HANDLER = {
  [SubjectTypes.CREATE_SUBJECT]: createSubject,
  [SubjectTypes.CREATE_SUCCESS]: createSuccess,
  [SubjectTypes.CREATE_ERROR]: createError
};
export default createReducer(INITIAL_STATE, HANDLER);
