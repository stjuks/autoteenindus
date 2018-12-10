import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../util/routes';

import OverviewScreen from '../OverviewScreen';
import DetailScreen from '../DetailScreen';

class AppScreen extends Component {
    render() {
        return (
            <div>
                APP
                <Switch>
                    <Route exact path={routes.details(':serviceId')} component={DetailScreen} />
                    <Route path={routes.home} component={OverviewScreen} />
                </Switch>
            </div>
        );
    }
}

export default AppScreen;
