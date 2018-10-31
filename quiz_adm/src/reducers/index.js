import { combineReducers } from "redux";
import Subject from "./Subject/SubjectReducer";

export default combineReducers({
  subjectStore: Subject
});
