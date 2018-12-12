import axios from 'axios';
import { API_URL } from '../config';
import { authRequest } from '../actions/auth';

const login = async (email, password) => {
    return axios.post(`${API_URL}/auth/login`, { email, password })
}

const verify = async () => {
    return axios.get(`${API_URL}/auth/verify`, authRequest({}));
}

export default {
    login,
    verify
}