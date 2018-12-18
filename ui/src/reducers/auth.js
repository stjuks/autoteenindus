import {
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../actions/types/auth';

import { RESET_STATE } from '../actions/types';

const INITIAL_STATE = {
    loginError: null,
    isLoggedIn: false
};

export default function reducer(state=INITIAL_STATE, action) {
    
    switch (action.type) {
        case LOGIN_SUCCESS().type: {
            return {
                ...state,
                isLoggedIn: true,
                loginError: null
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
