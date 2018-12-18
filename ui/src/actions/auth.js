import history from '../util/history';
import routes from '../util/routes';

import API from '../api';

import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './types/auth';

import { RESET_STATE } from './types';

export const login = (email, password) => {
    return async dispatch => {
        try {
            const { data } = await API.auth.login(email, password);

            dispatch(LOGIN_SUCCESS(data));

            localStorage.setItem('token', data.token);

            history.push(routes.home);
        } catch (err) {
            dispatch(LOGIN_ERROR(err.response.data.msg))
        }
    }
}

export const verify = redirectPath => {
    return async dispatch => {
        try {
            const { data } = await API.auth.verify();
            dispatch(LOGIN_SUCCESS(data));
            redirectPath = redirectPath === routes.login ? routes.home : redirectPath;
            history.push(redirectPath);
        } catch(err) {
            history.push(routes.login);
        }
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token');
        history.push(routes.login);
    }
}

export const authRequest = data => {
    const token = localStorage.getItem('token');
    return {
        ...data,
        headers: data == null ? {
            Authorization: `Bearer ${token}`
        } : {
            ...data.headers,
            Authorization: `Bearer ${token}`
        }
    }
}