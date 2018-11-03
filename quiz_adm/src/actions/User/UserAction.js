import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  createUser: null,
  createError: ["error"],
  createSuccess: ["subject"],
  fetchUsers: null,
  fetchUsersError: ["error"],
  fetchUsersSuccess: ["subjects"],
  deleteUser: null,
  deleteUserError: ["error"],
  deleteUserSuccess: null
});

export const UserTypes = Types;
export default Creators;
