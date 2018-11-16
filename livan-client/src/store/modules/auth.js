import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

const LOCAL_LOGIN = "auth/LOCAL_LOGIN";

export const localLogin = createAction(LOCAL_LOGIN);
