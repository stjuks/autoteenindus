import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import history from './util/history';
import routes from './util/routes';
import theme from './util/theme';

import Root from './containers/Root';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <ThemeProvider theme={theme}>
                        <Route path={routes.root} component={Root} />
                    </ThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
