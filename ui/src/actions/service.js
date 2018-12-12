import API from '../api';

import {
    FETCH_ACTIVE_OR_NON_ACTIVE_SERVICES,
    FETCH_ALL_SERVICES,
    FETCH_SERVICE_SUMMARY,
    FETCH_HELD_OR_NON_ACTIVE_SERVICES,
    FETCH_SERVICE_DETAILS
} from './types/service';

export const fetchAllServices = () => {
    return async dispatch => {
        try {
            const { data } = await API.service.fetchAll();

            dispatch(FETCH_ALL_SERVICES(data));
        } catch (err) {
            throw err;
        }
    }
}

export const fetchActiveOrNonActiveServices = () => {
    return async dispatch => {
        try {
            const { data } = await API.service.fetchActiveOrNonActive();

            dispatch(FETCH_ACTIVE_OR_NON_ACTIVE_SERVICES(data));
        } catch (err) {
            throw err;
        }
    }
}

export const fetchHeldOrNonActiveServices = () => {
    return async dispatch => {
        try {
            const { data } = await API.service.fetchHeldOrNonActive();

            dispatch(FETCH_HELD_OR_NON_ACTIVE_SERVICES(data));
        } catch (err) {
            throw err;
        }
    }
}

export const fetchServiceSummary = () => {
    return async dispatch => {
        try {
            const { data } = await API.service.fetchSummary();

            dispatch(FETCH_SERVICE_SUMMARY(data));
        } catch (err) {
            throw err;
        }
    }
}

export const fetchServiceDetails = serviceId => {
    return async dispatch => {
        try {
            const { data } = await API.service.fetchDetails(serviceId);

            dispatch(FETCH_SERVICE_DETAILS(data));
        } catch (err) {
            throw err;
        }
    }
}

export const endService = (xmin, serviceId) => {
    return async dispatch => {
        try {
            await API.service.end(xmin, serviceId);
            dispatch(fetchAllServices());
            dispatch(fetchActiveOrNonActiveServices());
            dispatch(fetchServiceSummary());
            dispatch(fetchHeldOrNonActiveServices());
        } catch (err) {
            throw err;
        }
    }
}