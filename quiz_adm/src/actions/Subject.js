import { createActions } from "reduxsauce";
import { createSubject } from "./SubjectAPI";

const { Types, Creators } = createActions({
  createSuccess: ["subject"],
  createError: ["error"],
  isLoading: ["loading"]
});

export const SubjectTypes = Types;
export default Creators;

export function thunkCreateSubject(subject) {
  return async dispatch => {
    dispatch(Creators.isLoading(true));

    try {
      let res = await createSubject(subject);
      console.log(res);
      dispatch(Creators.createSuccess(true));
    } catch (error) {
      dispatch(Creators.isLoading(false));
      dispatch(Creators.createError(true));
    }
  };
}
