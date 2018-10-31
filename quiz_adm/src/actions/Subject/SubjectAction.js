import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  createSubject: null,
  createError: ["error"],
  createSuccess: ["subject"]
});

export const SubjectTypes = Types;
export default Creators;
