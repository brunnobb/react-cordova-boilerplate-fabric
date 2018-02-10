import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Provider } from 'react-redux';
import store from 'store2';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';

import Template from './components/TemplateComponent.jsx';
import ManterPista from './components/ManterPista.jsx';

import configureStore from './store/configureStore';


let preloadedState = {};
let loggedUser;
let loggedUserPass;

if (typeof (Storage) !== 'undefined') {
    // Code for localStorage/sessionStorage.
    loggedUser = store('loggedUser') || '';
    loggedUserPass = store('loggedUserPass') || '';

    preloadedState = {
        loggedUser,
        loggedUserPass
    };
}


initializeIcons(/* optional base url */);

loadTheme({
    palette: {
        themePrimary: 'red'
    }
});

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history);


const storeInstance = configureStore(preloadedState, rMiddleware);


ReactDOM.render(
    (
        <Provider store={storeInstance}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={Template} />
                    <Route
                        path="/sc"
                        render={() => (
                            <Template>
                                <Switch>
                                    <Route exact path="/sc/consulta" component={ManterPista} />
                                    <Route path="/sc/consulta/:filter" component={ManterPista} />
                                    <Route path="/sc/aprovar/:filter" component={ManterPista} />
                                    <Route path="/sc/teste/" component={ManterPista} />
                                </Switch>
                            </Template>)}
                    />
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
    , document.getElementById('app')
);
