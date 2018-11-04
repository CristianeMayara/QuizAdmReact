import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  createUser: null,
  createError: ["error"],
  createSuccess: ["user"],
  fetchUsers: null,
  fetchUsersError: ["error"],
  fetchUsersSuccess: ["users"],
  deleteUser: null,
  deleteUserError: ["error"],
  deleteUserSuccess: null
});

export const UserTypes = Types;
export default Creators;
