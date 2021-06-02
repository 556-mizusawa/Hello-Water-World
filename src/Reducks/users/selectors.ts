import { createSelector } from 'reselect';
import { UserState } from './actions';

const usersSelector = (state: { users: UserState }) => state.users;

export const getIsSignedIn = createSelector([usersSelector], (state) => state.isSignedIn);

export const getUserId = createSelector([usersSelector], (state) => state);

export const getUserName = createSelector([usersSelector], (state) => state);
