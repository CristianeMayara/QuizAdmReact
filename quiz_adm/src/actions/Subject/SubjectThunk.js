import { default as SubjectAction } from "./SubjectAction";
import { createSubject } from "./SubjectAPI";

export function thunkCreateSubject(subject) {
  return async dispatch => {
    dispatch(SubjectAction.createSubject(true));

    try {
      let res = await createSubject(subject);
      console.log(res);
      dispatch(SubjectAction.createSuccess(true));
    } catch (error) {
      dispatch(SubjectAction.createSubject(false));
      dispatch(SubjectAction.createError(true));
    }
  };
}
