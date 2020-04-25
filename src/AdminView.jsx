import React from 'react';

const AdminView = ({ userInfo }) => (
        <div className="AdminView">
            <p>Name: {userInfo.given_name}</p>
            <p>Email: {userInfo.email}</p>
            <p>ID: {userInfo.sub}</p>
            <p>Roles: {userInfo.groups}</p>
        </div>
    );

export default AdminView;