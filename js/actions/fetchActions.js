import Axios from 'axios';

import {
    callFetchSolicitacaoList,
    gotFetchSolicitacaoList,
    errorFetchSolicitacaoList
} from './manterPistaActions';

const webServer = 'https://ws/invalido/';
const mockUrl = 'http://www.mocky.io/v2/59c3d8801100007f0399cccb';


export const fetchSolicitacaoList = (user, pass) => (
    function localreturnFetchSolicitacaoList(dispatch) {
        dispatch(callFetchSolicitacaoList(user, pass));

        const postObj =
            {
                name: user.toUpperCase(),
                pass: pass.toUpperCase()
            };

        const token = `${postObj.name}-${postObj.pass}`;
        const postBody = JSON.stringify(postObj);

        const header = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            token,
            Accept: 'application/json',
            'Content-Length': postBody.length.toString()
        });

        const axiosOptions = {
            method: 'POST',
            url: mockUrl,
            data: postBody,
            headers: header,
            json: true
        };

        return Axios(axiosOptions)
            .then((response) => {
                console.log(response);
                // const obj = JSON.parse(json);
                dispatch(gotFetchSolicitacaoList(user, pass, response.data));
                return response;
            })
            .catch((error) => {
                console.log(error);
                dispatch(errorFetchSolicitacaoList(user, pass, error.message));
            });
    });
