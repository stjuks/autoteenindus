import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { tableRows } from '../../util/constants';
import history from '../../util/history';
import routes from '../../util/routes';
import theme from '../../util/theme';

import { 
    endService as endServiceAction,
    fetchActiveOrNonActiveServices,
    fetchAllServices,
    fetchHeldOrNonActiveServices,
    fetchServiceSummary,
    fetchServiceDetails
} from '../../actions/service';

import {
    OverviewScreenStyled
} from './styles';

import Section from '../../components/Section';
import Table from '../../components/Table';

class OverviewScreen extends Component {

    viewDetails = row => {
        history.push(routes.details(row.teenus_kood));
    }

    endService = row => {
        this.props.dispatch(endServiceAction(row.xmin, row.teenus_kood));
    }

    componentDidMount() {
        this.props.dispatch(fetchActiveOrNonActiveServices());
        this.props.dispatch(fetchAllServices());
        this.props.dispatch(fetchHeldOrNonActiveServices());
        this.props.dispatch(fetchServiceSummary());
    }

    render() {
        const {
            summary,
            allServices,
            heldOrNonActiveServices,
            activeOrNonActiveServices
        } = this.props;

        return (
            <OverviewScreenStyled>
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
                <Section title="OOTEL JA MITTEAKTIIVSED TEENUSED">
                    <Table
                        data={heldOrNonActiveServices}
                        headings={tableRows.heldOrNonActiveServices.headings}
                        sizes={tableRows.heldOrNonActiveServices.sizes}
                        ignoreValues={tableRows.heldOrNonActiveServices.ignoreValues}
                    />
                </Section>
                <Section color={theme.COLOR_2()} title="LÕPETA TEENUS">
                    <Table
                        data={activeOrNonActiveServices}
                        headings={tableRows.activeOrNonActiveServices.headings}
                        sizes={tableRows.activeOrNonActiveServices.sizes}
                        ignoreValues={tableRows.activeOrNonActiveServices.ignoreValues}
                        addCol={<Link to="">Lõpeta</Link>}
                        addColClick={this.endService}
                    />
                </Section>
            </OverviewScreenStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        summary: store.service.summary,
        allServices : store.service.allServices,
        heldOrNonActiveServices: store.service.heldOrNonActiveServices,
        activeOrNonActiveServices: store.service.activeOrNonActiveServices
    }
}

export default connect(mapStateToProps)(OverviewScreen);
