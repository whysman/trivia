import React from 'react';

import UserView from './UserView';
import AdminView from './AdminView';

export default function MainView({ userInfo }) {

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