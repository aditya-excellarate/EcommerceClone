import userSlice from './User.reducer';
const { login, logOut } = userSlice.actions;

export const loginApi = (userData) => (dispatch) => {
  dispatch(login({ token: 'Token' || userData?.idToken }));
};

export const logOutApi = () => async (dispatch) => {
  dispatch(logOut());
};
