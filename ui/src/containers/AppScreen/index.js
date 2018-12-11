import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../util/routes';

import {
    AppScreenStyled, ContentStyled
} from './styles';

import Navbar from '../Navbar';
import OverviewScreen from '../OverviewScreen';
import DetailScreen from '../DetailScreen';

class AppScreen extends Component {
    render() {
        return (
            <AppScreenStyled>
                <Navbar />
                <ContentStyled>
                    <Switch>
                        <Route exact path={routes.details(':serviceId')} component={DetailScreen} />
                        <Route path={routes.home} component={OverviewScreen} />
                    </Switch>
                </ContentStyled>
            </AppScreenStyled>
        );
    }
}

export default AppScreen;
