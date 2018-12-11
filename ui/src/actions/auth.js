import history from '../util/history';
import routes from '../util/routes';

import API from '../api';

export const login = (username, password) => {
    return async dispatch => {
        try {
            // const { data } = await API.auth.login(username, password);
            history.push(routes.home);
        } catch (err) {

        }
    }
}