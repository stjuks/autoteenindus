import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { 
     NavbarStyled, LeftStyled, MidStyled, RightStyled
} from './styles';

import routes from '../../util/routes';
import history from '../../util/history';

class Navbar extends Component {
    logout = () => {

    }

    render() {
        return (
            <NavbarStyled>
                <LeftStyled>
                    <Link to={routes.login}>Logi välja</Link>
                </LeftStyled>
                <MidStyled>
                    <Link to={routes.home}>Autoteenindus</Link>
                </MidStyled>
                <RightStyled>
                    Tere, Nimi (Juhataja)
                </RightStyled>
            </NavbarStyled>
        );
    }
}

export default Navbar;
