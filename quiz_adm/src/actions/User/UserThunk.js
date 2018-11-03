import { default as UserAction } from "./UserAction";
import { createUser, fetchUsers, deleteUser } from "./UserAPI";

export function thunkCreateUser(user) {
  return async dispatch => {
    dispatch(UserAction.createUser(true));

    try {
      let res = await createUser(user);
      dispatch(UserAction.createSuccess(res.data));
      //dispatch(thunkFetchUserList());
    } catch (error) {
      dispatch(UserAction.createUser(false));
      dispatch(UserAction.createError(true));
    }
  };
}

export function thunkFetchUserList() {
  return async dispatch => {
    dispatch(UserAction.fetchUsers(true));

    try {
      let res = await fetchUsers();
      console.log(res);
      dispatch(UserAction.fetchUsersSuccess(res.data.users));
    } catch (error) {
      dispatch(UserAction.fetchUsers(false));
      dispatch(UserAction.fetchUsersError(true));
    }
  };
}

export function thunkDeleteUser(user) {
  return async dispatch => {
    dispatch(UserAction.deleteUser(true));

    try {
      let res = await deleteUser(user);
      console.log(res);
      dispatch(UserAction.deleteUserSuccess());
      dispatch(thunkFetchUserList());
    } catch (error) {
      dispatch(UserAction.deleteUser(false));
      dispatch(UserAction.deleteUserError(true));
    }
  };
}
