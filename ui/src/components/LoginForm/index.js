import React, { Component } from 'react';
import { connect } from 'react-router-dom';

import {
    LabelStyled, ButtonStyled, InputStyled
} from '../../styled/form';

import {
    LoginFormStyled,
    FormTitleStyled,
    ErrorStyled
} from './styles';

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.onSubmit(username, password);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { error } = this.props;

        return (
            <LoginFormStyled onSubmit={e => this.onSubmit(e)}>
                <FormTitleStyled>
                    Autoteenindus
                </FormTitleStyled>
                <LabelStyled>Kasutajanimi:</LabelStyled>
                <InputStyled 
                    autoComplete="off"
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
                <ErrorStyled>
                    {error || ''}
                </ErrorStyled>
            </LoginFormStyled>
        );
    }
}

export default LoginForm;
