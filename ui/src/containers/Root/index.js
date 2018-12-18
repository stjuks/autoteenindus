import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { verify } from '../../actions/auth';
import routes from '../../util/routes';

import LoginScreen from '../LoginScreen';
import AppScreen from '../AppScreen';

import { RootStyled } from './styles';

class Root extends Component {
    componentDidMount() {
        this.props.dispatch(verify(this.props.location.pathname));
    }

    render() {
        const {
            isLoggedIn
        } = this.props;

        return (
            <RootStyled>
                <Switch>
                    <Route exact path={routes.login} component={LoginScreen} />
                    {isLoggedIn &&
                        <Route path={routes.home} component={AppScreen} />
                    }
                </Switch>
            </RootStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        isLoggedIn: store.auth.isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps)(Root));
