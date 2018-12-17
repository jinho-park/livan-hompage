import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map, fromJS } from 'immutable';

const LOCAL_LOGIN = "auth/LOCAL_LOGIN";
const TOGGLE_LOGIN_MODAL = 'auth/TOGGLE_LOGIN_MODAL';
const SET_MODAL_MODE = 'auth/SET_MODAL_MODE';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const SET_ERROR = 'auth/SET_ERROR';
const TOGGLE_REGISTER_MODAL = 'auth/TOGGEL_REGISTER_MODAL';
const REGIST_CHANGE_INPUT = 'auth/REGIST_CHANGE_INPUT';
const PAGE_LOGOUT = 'auth/PAGE_LOGOUT';

export const localLogin = createAction(LOCAL_LOGIN);
export const toggleLoginModal = createAction(TOGGLE_LOGIN_MODAL);
export const setModalMode = createAction(SET_MODAL_MODE);
export const changeInput = createAction(CHANGE_INPUT);
export const setError = createAction(SET_ERROR);
export const toggleRegisterModal = createAction(TOGGLE_REGISTER_MODAL);
export const registChangeInput = createAction(REGIST_CHANGE_INPUT);
export const pageLogout = createAction(PAGE_LOGOUT);

const initialState = Map({
    modal : Map({
        loginVisible : false,
        registerVisible : false,
        mode : 'login'
    }),
    form: Map({
        email: '',
        password: ''
    }),
    regist: Map({
        email: '',
        password : '',
        password2 : '',
        nickname : ''
    }),
    error : null,
    loginResult : false
});

export default handleActions({
    [TOGGLE_LOGIN_MODAL] : (state, action) => {
        const visible = state.getIn(['modal', 'loginVisible']);
        
        if(visible){
            return state.setIn(['modal', 'loginVisible'], false);
        }
        return state.setIn(['modal', 'loginVisible'], true)
                    .setIn(['modal', 'registerVisible'], false)
                    .setIn(['modal', 'mode'], 'login');
    },
    [TOGGLE_REGISTER_MODAL] : (state, action) => {
        const visible = state.getIn(['modal', 'registerVisible']);
        console.log(visible);

        if(visible){
            return state.setIn(['modal', 'registerVisible'], false);
        }
        return state.setIn(['modal', 'loginVisible'], false)
                    .setIn(['modal', 'registerVisible'], true)
                    .setIn(['modal', 'mode'], 'register');
    },
    [SET_MODAL_MODE]: (state, action) => {
        return state.setIn(['modal', 'mode'], action.payload)
                    .set('form', initialState.get('form'))
                    .set('error', null);
    },
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['form', name], value);
    },
    [REGIST_CHANGE_INPUT] : (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['regist', name], value);
    },
    [SET_ERROR]: (state, action) => {
        return state.set('error', fromJS(action.payload));
    },
    ...pender({
        type : LOCAL_LOGIN,
        onSuccess : (state, action) => {
            const { data : loginResult } = action.payload;
            return state.set('loginResult', loginResult);
        },
        onFailure: (state, action) => {
            return state.set('error', fromJS({
                localLogin: ['잘못된 계정 정보입니다']
            }));
        }
    }),
    [PAGE_LOGOUT] : (state, action) => {
        return state.set('loginResult', false);
    }
}, initialState)