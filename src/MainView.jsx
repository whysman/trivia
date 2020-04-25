import React, { useState, useEffect } from 'react';

import UserView from './UserView';
import AdminView from './AdminView';

export default function MainView({ keycloak }) {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        setUserInfo(keycloak.loadUserInfo());
    }, [keycloak])

    if (userInfo.roles && userInfo.roles.includes("trivia-admin")) {
        return (
            <div>
                <p>This is the admin page.</p>
                <AdminView userInfo={userInfo} />
            </div>
        )
    } else {
        return (
            <div>
                <p>This is the user page.</p>
                <UserView userInfo={userInfo} />
            </div>
        )
    }
}