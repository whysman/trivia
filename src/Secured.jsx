import React, { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

import MainView from './MainView';
import Logout from './Logout';

const keycloak = Keycloak('/keycloak.json');

const Secured = props => {

    const [authenticated, setAuthenticated] = useState();
    const [userInfo, setUserInfo] = useState({});
    const [keycloakError, setKeycloakError] = useState();

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' })
            .then(setAuthenticated)
            .catch(err => {
                console.err("Login Error", err);
                setKeycloakError(err);
            })

    }, []);

    useEffect(() => {
        if (authenticated) {
            setUserInfo(keycloak.loadUserInfo());
        } else {
            setUserInfo({})
        }

    }, [authenticated])


    if (authenticated) {
        return (
            <div>
                <MainView userInfo={userInfo} />
                <Logout keycloak={keycloak} />
            </div>
        )
    } else if (keycloakError){
        return (<div>Unable to authenticate!</div>)
    } else {
        return (<div>Loading...</div>)
    }
    
}
export default Secured;