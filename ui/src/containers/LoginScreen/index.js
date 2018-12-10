import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm';

import { LoginScreenStyled } from './styles';

class LoginScreen extends Component {
    render() {
        return (
            <LoginScreenStyled>
                <LoginForm />
            </LoginScreenStyled>
        );
    }
}

export default LoginScreen;
