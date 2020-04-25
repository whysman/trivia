import React, { Component } from 'react';
import Round from './Round';

class UserView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            id: "",
            roles: []
        };
        this.props.keycloak.loadUserInfo().then(userInfo => {
            this.setState({ name: userInfo.given_name, email: userInfo.email, id: userInfo.sub, roles: userInfo.groups })
        });
    }

    render() {
        const categories = ["1", "2", "3", "bonus", "4", "5", "6", "final"];

        return (
            <div className="UserView">
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>ID: {this.state.id}</p>
                {categories.map((value, index) => {
                    return <Round type={value} />
                })}
            </div>
        );
    }
}
export default UserView;