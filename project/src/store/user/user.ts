import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, Status } from '../../constants';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/user/user';

type InitialState = {
  AuthorizationStatus: string;
  status: Status;
  userInformation: UserData | null;
};

const initialState: InitialState = {
  AuthorizationStatus: AuthorizationStatus.Unknown,
  status: Status.Idle,
  userInformation: null,
};


export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.AuthorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.AuthorizationStatus = AuthorizationStatus.Auth;
        state.userInformation = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.AuthorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.status = Status.Loading;
        state.AuthorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.AuthorizationStatus = AuthorizationStatus.Auth;
        state.userInformation = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.status = Status.Failed;
        state.AuthorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.status = Status.Idle;
        state.AuthorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.status = Status.Idle;
        state.AuthorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
