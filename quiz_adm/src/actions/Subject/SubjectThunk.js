import { default as SubjectAction } from "./SubjectAction";
import { createSubject, fetchSubjects } from "./SubjectAPI";

export function thunkCreateSubject(subject) {
  return async dispatch => {
    dispatch(SubjectAction.createSubject(true));

    try {
      let res = await createSubject(subject);
      console.log(res);
      dispatch(SubjectAction.createSuccess(res.data));
    } catch (error) {
      dispatch(SubjectAction.createSubject(false));
      dispatch(SubjectAction.createError(true));
    }
  };
}

export function thunkFetchSubjectList(subjects) {
  return async dispatch => {
    dispatch(SubjectAction.fetchSubjects(true));

    try {
      let res = await fetchSubjects(subjects);
      console.log(res);
      dispatch(SubjectAction.fetchSubjectsSuccess(res.data.subjects));
    } catch (error) {
      dispatch(SubjectAction.fetchSubjects(false));
      dispatch(SubjectAction.fetchSubjectsError(true));
    }
  };
}
