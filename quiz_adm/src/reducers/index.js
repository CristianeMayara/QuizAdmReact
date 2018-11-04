import { combineReducers } from "redux";
import Subject from "./Subject/SubjectReducer";
import User from "./User/UserReducer";

export default combineReducers({
  userStore: User,
  subjectStore: Subject
});
