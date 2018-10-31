import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  createSubject: null,
  createError: ["error"],
  createSuccess: ["subject"],
  fetchSubjects: null,
  fetchSubjectsError: ["error"],
  fetchSubjectsSuccess: ["subjects"]
});

export const SubjectTypes = Types;
export default Creators;
