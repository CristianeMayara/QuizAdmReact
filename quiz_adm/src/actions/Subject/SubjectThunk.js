import { default as SubjectAction } from "./SubjectAction";
import { createSubject, fetchSubjects, deleteSubject } from "./SubjectAPI";

export function thunkCreateSubject(subject) {
  return async dispatch => {
    dispatch(SubjectAction.createSubject(true));

    try {
      let res = await createSubject(subject);
      console.log(res);
      dispatch(SubjectAction.createSuccess(res.data));
      dispatch(thunkFetchSubjectList());
    } catch (error) {
      dispatch(SubjectAction.createSubject(false));
      dispatch(SubjectAction.createError(true));
    }
  };
}

export function thunkFetchSubjectList() {
  return async dispatch => {
    dispatch(SubjectAction.fetchSubjects(true));

    try {
      let res = await fetchSubjects();
      console.log(res);
      dispatch(SubjectAction.fetchSubjectsSuccess(res.data.subjects));
    } catch (error) {
      dispatch(SubjectAction.fetchSubjects(false));
      dispatch(SubjectAction.fetchSubjectsError(true));
    }
  };
}

export function thunkDeleteSubject(subject) {
  return async dispatch => {
    dispatch(SubjectAction.deleteSubject(true));

    try {
      let res = await deleteSubject(subject);
      console.log(res);
      dispatch(SubjectAction.deleteSubjectSuccess());
      dispatch(thunkFetchSubjectList());
    } catch (error) {
      dispatch(SubjectAction.deleteSubject(false));
      dispatch(SubjectAction.deleteSubjectError(true));
    }
  };
}
