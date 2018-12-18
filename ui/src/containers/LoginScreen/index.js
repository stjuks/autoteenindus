import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/LoginForm';

import { LoginScreenStyled } from './styles';

import { RESET_STATE } from '../../actions/types'
import { login as loginAction } from '../../actions/auth';

class LoginScreen extends Component {
    componentDidMount() {
        this.props.dispatch(RESET_STATE);
    }

    login = (username, password) => {
        this.props.dispatch(loginAction(username, password));
    }

    render() {
        const {
            loginError
        } = this.props;

        return (
            <LoginScreenStyled>
                <LoginForm 
                    error={loginError}
                    onSubmit={this.login}
                />
            </LoginScreenStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        loginError: store.auth.loginError
    }
}

export default connect(mapStateToProps)(LoginScreen);
