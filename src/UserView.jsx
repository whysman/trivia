import React from 'react';
import Round from './Round';

const UserView = ({ userInfo }) => {

    const categories = ["1", "2", "3", "bonus", "4", "5", "6", "final"];
    console.log("User info", userInfo);
    return (
        <div className="UserView">
            <p>Name: {userInfo.given_name}</p>
            <p>Email: {userInfo.email}</p>
            <p>ID: {userInfo.sub}</p>
            {categories.map((value, index) => {
                return <Round key={index} type={value} />
            })}
        </div>
    )
};

export default UserView;