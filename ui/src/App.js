import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import history from './util/history';
import routes from './util/routes';

import Root from './containers/Root';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path={routes.root} component={Root} />
                </Router>
            </Provider>
        );
    }
}

export default App;
