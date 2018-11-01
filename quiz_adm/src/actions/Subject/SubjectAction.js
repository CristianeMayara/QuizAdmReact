import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  createSubject: null,
  createError: ["error"],
  createSuccess: ["subject"],
  fetchSubjects: null,
  fetchSubjectsError: ["error"],
  fetchSubjectsSuccess: ["subjects"],
  deleteSubject: null,
  deleteSubjectError: ["error"],
  deleteSubjectSuccess: null
});

export const SubjectTypes = Types;
export default Creators;
