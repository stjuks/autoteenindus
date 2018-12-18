import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
     NavbarStyled, LeftStyled, MidStyled, RightStyled
} from './styles';

import { logout as logoutAction } from '../../actions/auth';

import routes from '../../util/routes';

class Navbar extends Component {
    logout = () => {
        this.props.dispatch(logoutAction());
    }

    render() {
        return (
            <NavbarStyled>
                <LeftStyled>
                    
                </LeftStyled>
                <MidStyled>
                    <Link to={routes.home}>Autoteenindus</Link>
                </MidStyled>
                <RightStyled>
                    <Link to={routes.login} onClick={() => this.logout()}>Logi välja</Link>
                </RightStyled>
            </NavbarStyled>
        );
    }
}

export default connect()(Navbar);
