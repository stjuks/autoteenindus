import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import routes from '../../util/routes';

import LoginScreen from '../LoginScreen';
import AppScreen from '../AppScreen';

import { RootStyled } from './styles';

class Root extends Component {
    componentDidMount() {
        /*let path = this.props.location.pathname;
        path = [routes.login].indexOf(path) === -1 ? path : routes.home;
        this.props.dispatch(verifyToken(path));*/
    }

    render() {
        return (
            <RootStyled>
                <Switch>
                    <Route exact path={routes.login} component={LoginScreen} />
                    <Route path={routes.home} component={AppScreen} />
                </Switch>
            </RootStyled>
        );
    }
}

export default withRouter(connect()(Root));
