import React, { Component } from 'react';
import { connect } from 'react-router-dom';

import {
    LabelStyled, ButtonStyled, InputStyled
} from '../../styled/form';

import {
    LoginFormStyled
} from './styles';

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('lol');
        const { username, password } = this.state;
        this.props.onSubmit(username, password);
    }

    handleChange = e => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <LoginFormStyled onSubmit={e => this.onSubmit(e)}>
                <LabelStyled>Kasutajanimi:</LabelStyled>
                <InputStyled 
                    onChange={e => this.handleChange(e)} 
                    name="username" 
                    type="text"
                />
                <LabelStyled>Parool:</LabelStyled>
                <InputStyled 
                    onChange={e => this.handleChange(e)}
                    name="password" 
                    type="password" 
                />
                <ButtonStyled>
                    Logi sisse
                </ButtonStyled>
            </LoginFormStyled>
        );
    }
}

export default LoginForm;
