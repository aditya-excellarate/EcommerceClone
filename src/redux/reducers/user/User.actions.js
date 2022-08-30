import userSlice from './User.reducer';
const { login, logOut, updateUser: updateUserAction } = userSlice.actions;

export const loginApi = (userData) => (dispatch) => {
  dispatch(login({ token: 'Token' || userData?.idToken }));
};
export const updateUser = (userData) => (dispatch) => {
  dispatch(updateUserAction(userData));
};
export const logOutApi = () => async (dispatch) => {
  dispatch(logOut());
};
