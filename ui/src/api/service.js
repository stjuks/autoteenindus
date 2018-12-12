import axios from 'axios';
import { API_URL } from '../config';
import { authRequest } from '../actions/auth';

const fetchAll = async () => {
    return axios.get(`${API_URL}/service/all`, authRequest({}));
}

const fetchActiveOrNonActive = async () => {
    return axios.get(`${API_URL}/service/activeOrNonActive`, authRequest({}));
}

const fetchHeldOrNonActive = async () => {
    return axios.get(`${API_URL}/service/heldOrNonActive`, authRequest({}));
}

const fetchSummary = async () => {
    return axios.get(`${API_URL}/service/summary`, authRequest({}));
}

const fetchDetails = async serviceId => {
    return axios.get(`${API_URL}/service/details`, authRequest({
        params: {
            serviceId
        }
    }));
}

const end = async (xmin, serviceId) => {
    return axios.post(`${API_URL}/service/end`, { 
        xmin, serviceId 
    }, authRequest({}));
}

export default {
    end,
    fetchAll,
    fetchActiveOrNonActive,
    fetchHeldOrNonActive,
    fetchSummary,
    fetchDetails
}