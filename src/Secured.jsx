import React, { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

import MainView from './MainView';
import Logout from './Logout';

const {init, loadUserInfo, logout } = Keycloak('/keycloak.json');

const Secured = props => {

    const [authenticated, setAuthenticated] = useState();
    const [userInfo, setUserInfo] = useState({});
    const [keycloakError, setKeycloakError] = useState();

    useEffect(() => {
        init({ onLoad: 'login-required' })
            .then(setAuthenticated)
            .catch(err => {
                console.err("Login Error", err);
                setKeycloakError(err);
            })

    }, []);

    const fetchUser = async () => {
        const info = await loadUserInfo()
        setUserInfo(info);
    }

    useEffect(() => {
        if (authenticated) {
            fetchUser();
        } else {
            setUserInfo({});
            setAuthenticated(false);
        }

    }, [authenticated])


    if (authenticated) {
        return (
            <div>
                <MainView userInfo={userInfo} />
                <Logout logout={logout} />
            </div>
        )
    } else if (keycloakError) {
        return (<div>Unable to authenticate!</div>)
    } else {
        return (<div>Loading...</div>)
    }

}
export default Secured;