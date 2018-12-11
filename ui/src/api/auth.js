import axios from 'axios';
import { API_URL } from '../config';

const login = async (username, password) => {
    return axios.post(`${API_URL}/auth/login`, { username, password })
}

export default {
    login
}