import React from 'react';
import { withRouter } from 'react-router-dom'

const Logout = ({history, logout}) => {

    const handleLogout = () => {
        history.push('/');
        logout();
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}
export default withRouter(Logout);