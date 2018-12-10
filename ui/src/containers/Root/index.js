import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import routes from '../../util/routes';

import AuthScreen from '../AuthScreen';
import AppScreen from '../AppScreen';

class Root extends Component {
    componentDidMount() {
        /*let path = this.props.location.pathname;
        path = [routes.login].indexOf(path) === -1 ? path : routes.home;
        this.props.dispatch(verifyToken(path));*/
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={routes.login} component={AuthScreen} />
                    <Route path={routes.home} component={AppScreen} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect()(Root));
