import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
    OverviewScreenStyled
} from './styles';

import Section from '../../components/Section';

class OverviewScreen extends Component {
    render() {
        return (
            <OverviewScreenStyled>
                <Section title="Ootel ja mitteaktiivsed teenused">
                    asd
                </Section>
                <Section title="Kõik teenused">
                    teenus1
                </Section>
                <Section title="Teenuste koondaruanne">
                </Section>
                <Section title="Lõpeta teenus">
                </Section>
            </OverviewScreenStyled>
        );
    }
}

export default OverviewScreen;
