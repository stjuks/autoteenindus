import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchServiceDetails } from '../../actions/service';

import {
    DetailScreenStyled,
    DetailTableStyled,
    TitleStyled
} from './styles';

class DetailScreen extends Component {
    componentDidMount() {
        const { serviceId } = this.props.match.params;
        this.props.dispatch(fetchServiceDetails(serviceId));
    }

    render() {
        const {
            serviceDetails
        } = this.props;

        const {
            teenus_kood,
            teenus_nimetus,
            teenus_kirjeldus,
            hind,
            reg_aeg,
            seisund,
            registreerija,
            kategooriad,
            raskusaste_nimetus
        } = serviceDetails;

        return (
            <DetailScreenStyled>
                <TitleStyled>
                    DETAILVAADE
                </TitleStyled>
                <DetailTableStyled>
                    <tr>  
                        <td width="200px"><strong>Teenuse nimetus:</strong></td> 
                        <td>{teenus_nimetus}</td>
                    </tr>
                    <tr>
                        <td><strong>Teenuse kood:</strong></td> 
                        <td>{teenus_kood}</td>
                    </tr>
                    <tr>
                        <td><strong>Teenuse kirjeldus:</strong></td> 
                        <td>{teenus_kirjeldus}</td>
                    </tr>
                    <tr>
                        <td><strong>Hind (EUR):</strong></td> 
                        <td>{hind}</td>
                    </tr>
                    <tr>
                        <td><strong>Registreerimise aeg:</strong></td> 
                        <td>{reg_aeg}</td>
                    </tr>
                    <tr>
                        <td><strong>Seisund:</strong></td> 
                        <td>{seisund}</td>
                    </tr>
                    <tr>
                        <td><strong>Registreerija:</strong></td> 
                        <td>{registreerija}</td>
                    </tr>
                    <tr>
                        <td><strong>Raskusaste:</strong></td> 
                        <td>{raskusaste_nimetus}</td>
                    </tr>
                    {kategooriad.map(kategooria => 
                        <tr>
                            <td><strong>{kategooria.kategooria_tyyp}:</strong></td> 
                            <td>{kategooria.kategooria_nimetus}</td>
                        </tr>
                    )}
                </DetailTableStyled>
            </DetailScreenStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        serviceDetails: store.service.serviceDetails
    }
}

export default withRouter(connect(mapStateToProps)(DetailScreen));
