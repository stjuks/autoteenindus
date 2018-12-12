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
        const {
            name
        } = this.props;

        return (
            <NavbarStyled>
                <LeftStyled>
                    <Link to={routes.login} onClick={() => this.logout()}>Logi välja</Link>
                </LeftStyled>
                <MidStyled>
                    <Link to={routes.home}>Autoteenindus</Link>
                </MidStyled>
                <RightStyled>
                    Tere, {name}
                </RightStyled>
            </NavbarStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        name: store.auth.name
    }
}

export default connect(mapStateToProps)(Navbar);
