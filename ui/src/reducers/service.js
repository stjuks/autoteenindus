import {
    FETCH_ACTIVE_OR_NON_ACTIVE_SERVICES,
    FETCH_HELD_OR_NON_ACTIVE_SERVICES,
    FETCH_SERVICE_SUMMARY,
    FETCH_ALL_SERVICES,
    FETCH_SERVICE_DETAILS
} from '../actions/types/service';

const INITIAL_STATE = {
    summary: [],
    allServices: [],
    heldOrNonActiveServices: [],
    activeOrNonActiveServices: [],
    serviceDetails: {
        kategooriad: []
    }
};

export default function reducer(state=INITIAL_STATE, action) {
    
    switch (action.type) {
        case FETCH_ACTIVE_OR_NON_ACTIVE_SERVICES().type: {
            return {
                ...state,
                activeOrNonActiveServices: action.payload
            }
        }
        case FETCH_HELD_OR_NON_ACTIVE_SERVICES().type: {
            return {
                ...state,
                heldOrNonActiveServices: action.payload
            }
        }
        case FETCH_ALL_SERVICES().type: {
            return {
                ...state,
                allServices: action.payload
            }
        }
        case FETCH_SERVICE_SUMMARY().type: {
            return {
                ...state,
                summary: action.payload
            }
        }
        case FETCH_SERVICE_DETAILS().type: {
            return {
                ...state,
                serviceDetails: action.payload
            }
        }
        default: {
            break;
        }
    }

    return state;
}
