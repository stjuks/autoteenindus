import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { 
     NavbarStyled, LeftStyled, MidStyled, RightStyled
} from './styles';

import routes from '../../util/routes';

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
                    Autoteenindus
                </MidStyled>
                <RightStyled>
                    Steven Juks (Juhataja)
                </RightStyled>
            </NavbarStyled>
        );
    }
}

export default Navbar;
