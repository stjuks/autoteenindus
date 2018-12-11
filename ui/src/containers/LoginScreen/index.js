import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/LoginForm';

import { LoginScreenStyled } from './styles';

import { login as loginAction } from '../../actions/auth';

class LoginScreen extends Component {
    login = (username, password) => {
        this.props.dispatch(loginAction(username, password));
    }

    render() {
        return (
            <LoginScreenStyled>
                <LoginForm 
                    onSubmit={this.login}
                />
            </LoginScreenStyled>
        );
    }
}

export default connect()(LoginScreen);
