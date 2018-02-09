import {
    PREPARE_FETCH_SOLICITACAO,
    GOT_FETCH_SOLICITACAO,
    ERROR_FETCH_SOLICITACAO
} from '../constants/constant';


export const callFetchSolicitacaoList = (user, pass) => ({
    type: PREPARE_FETCH_SOLICITACAO,
    loginUserName: user,
    loginPassword: pass
});

export const gotFetchSolicitacaoList = (user, pass, json) => ({
    type: GOT_FETCH_SOLICITACAO,
    loginUserName: user,
    loginPassword: pass,
    solicitacaoList: json
});


export const errorFetchSolicitacaoList = (user, pass, error) => ({
    type: ERROR_FETCH_SOLICITACAO,
    loginUserName: user,
    loginPassword: pass,
    error
});
