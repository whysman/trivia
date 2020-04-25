import React from 'react';
import { withRouter } from 'react-router-dom'

const Logout = ({history, keycloak}) => {

    const logout = () => {
        history.push('/');
        keycloak.logout();
    };

    return (
        <button onClick={logout}>
            Logout
        </button>
    );
}
export default withRouter(Logout);