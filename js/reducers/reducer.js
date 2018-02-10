import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    CHANGE_LOGIN,
    DO_LOGOUT,
    ERROR_FETCH_SOLICITACAO,
    GOT_FETCH_SOLICITACAO,
    PREPARE_FETCH_SOLICITACAO,
    SHOW_MENU,
    HIDE_MENU,
    CHANGE_TEXT_VALUE
} from '../constants/constant';


const menuIsVisible = (state = false, action) => {
    switch (action.type) {
    case SHOW_MENU:
        return true;
    case HIDE_MENU:
        return false;
    default:
        return state;
    }
};


const loginUserName = (state = '', action) => {
    switch (action.type) {
    case CHANGE_LOGIN:
        return action.loginUserName;
    case DO_LOGOUT:
        return '';
    default:
        return state;
    }
};


const solicitacaoList = (state = '', action) => {
    switch (action.type) {
    case ERROR_FETCH_SOLICITACAO:
        return 'error';
    case GOT_FETCH_SOLICITACAO:
        return 'got';
    case PREPARE_FETCH_SOLICITACAO:
        return 'prepare';
    default:
        return state;
    }
};

const isLoading = (state = false, action) => {
    switch (action.type) {
    case ERROR_FETCH_SOLICITACAO:
        return false;
    case GOT_FETCH_SOLICITACAO:
        return false;
    case PREPARE_FETCH_SOLICITACAO:
        return true;
    default:
        return state;
    }
};


const loggedUser = (state = '', action) => {
    switch (action.type) {
    /* case GOT_FETCH_LOGIN:
        return action.loginUserName;
    case ERROR_FETCH_LOGIN:
        return ''; */
    default:
        return state;
    }
};

const loggedUserPass = (state = '', action) => {
    switch (action.type) {
    /* case GOT_FETCH_LOGIN:
        return action.loginPassword;
    case ERROR_FETCH_LOGIN:
        return '';
    case DO_LOGOUT:
        return ''; */
    default:
        return state;
    }
};


const textValue = (state = '', action) => {
    switch (action.type) {
         case CHANGE_TEXT_VALUE:
            return action.newText;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    loginUserName,
    solicitacaoList,
    isLoading,
    loggedUser,
    loggedUserPass,
    menuIsVisible,
    textValue,
    router: routerReducer
});

export default rootReducer;
