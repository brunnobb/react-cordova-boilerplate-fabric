import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    CHANGE_LOGIN,
    DO_LOGOUT,
    ERROR_FETCH_SOLICITACAO,
    GOT_FETCH_SOLICITACAO,
    PREPARE_FETCH_SOLICITACAO
} from '../constants/constant';


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


const rootReducer = combineReducers({
    loginUserName,
    solicitacaoList,
    isLoading,
    router: routerReducer
});

export default rootReducer;
