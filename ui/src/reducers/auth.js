import {
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../actions/types/auth';

import { RESET_STATE } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    name: '',
    loginError: '',
    isLoggedIn: false
};

export default function reducer(state=INITIAL_STATE, action) {
    
    switch (action.type) {
        case LOGIN_SUCCESS().type: {
            return {
                ...state,
                name: action.payload.nimi,
                email: action.payload.e_meil,
                isLoggedIn: true,
                loginError: ''
            }
        }
        case LOGIN_ERROR().type: {
            return {
                ...state,
                loginError: action.payload
            }
        }
        case RESET_STATE: {
            return INITIAL_STATE
        }
        default: {
            break;
        }
    }

    return state;
}
