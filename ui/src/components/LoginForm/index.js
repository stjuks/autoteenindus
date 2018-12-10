import React, { Component } from 'react';

import {
    LabelStyled, ButtonStyled, InputStyled
} from '../../styled/form';

import {
    LoginFormStyled
} from './styles';

class LoginForm extends Component {

    render() {
        return (
            <LoginFormStyled>
                <LabelStyled>Kasutajanimi:</LabelStyled>
                <InputStyled type="text" />
                <LabelStyled>Parool:</LabelStyled>
                <InputStyled type="password" />
                <ButtonStyled>
                    Logi sisse
                </ButtonStyled>
            </LoginFormStyled>
        );
    }
}

export default LoginForm;
