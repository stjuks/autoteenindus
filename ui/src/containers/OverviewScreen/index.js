import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tableRows } from '../../util/constants';
import history from '../../util/history';
import routes from '../../util/routes';

import {
    OverviewScreenStyled
} from './styles';

import Section from '../../components/Section';
import Table from '../../components/Table';

class OverviewScreen extends Component {
    viewDetails = row => {
        history.push(routes.details(row.teenus_kood));
    }

    render() {
        const {
            summary,
            allServices
        } = this.props;

        return (
            <OverviewScreenStyled>
                <Section title="OOTEL JA MITTEAKTIIVSED TEENUSED">
                </Section>
                <Section title="KÕIK TEENUSED">
                    <Table 
                        data={allServices} 
                        headings={tableRows.allServices.headings}
                        sizes={tableRows.allServices.sizes}
                        onRowClick={this.viewDetails}
                        clickable
                    />
                </Section>
                <Section title="TEENUSTE KOONDARUANNE">
                    <Table 
                        data={summary} 
                        headings={tableRows.summary.headings}
                        sizes={tableRows.summary.sizes}
                    />
                </Section>
                <Section title="LÕPETA TEENUS">
                </Section>
            </OverviewScreenStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        summary: store.service.summary,
        allServices : store.service.allServices
    }
}

export default connect(mapStateToProps)(OverviewScreen);
