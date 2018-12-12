export const FETCH_ALL_SERVICES = payload => ({ 
    type: 'FETCH_ALL_SERVICES', payload 
});

export const FETCH_HELD_OR_NON_ACTIVE_SERVICES = payload => ({ 
    type: 'FETCH_ALL_OR_NON_ACTIVE_SERVICES', payload
});

export const FETCH_ACTIVE_OR_NON_ACTIVE_SERVICES = payload => ({ 
    type: 'FETCH_ACTIVE_OR_NON_ACTIVE_SERVICES', payload
});

export const FETCH_SERVICE_SUMMARY = payload => ({
    type: 'FETCH_SERVICE_SUMMARY', payload
})

export const FETCH_SERVICE_DETAILS = payload => ({
    type: 'FETCH_SERVICE_DETAILS', payload
})