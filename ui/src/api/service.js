import axios from 'axios';
import { API_URL } from '../config';

const fetchAll = async () => {
    return axios.get(`${API_URL}/service/all`);
}

const fetchActiveOrNonActive = async () => {
    return axios.get(`${API_URL}/service/activeOrNonActive`);
}

const fetchHeldOrNonActive = async () => {
    return axios.get(`${API_URL}/service/heldOrNonActive`);
}

const fetchSummary = async () => {
    return axios.get(`${API_URL}/service/summary`);
}

const fetchDetails = async serviceId => {
    return axios.get(`${API_URL}/service/details`, {
        params: {
            serviceId
        }
    });
}

const end = async (xmin, serviceId) => {
    return axios.post(`${API_URL}/service/end`, { xmin, serviceId })
}

export default {
    end,
    fetchAll,
    fetchActiveOrNonActive,
    fetchHeldOrNonActive,
    fetchSummary,
    fetchDetails
}