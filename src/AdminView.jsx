import React, { Component } from 'react';

class AdminView extends Component {

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
        return (
            <div className="AdminView">
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>ID: {this.state.id}</p>
                <p>Roles: {this.state.roles}</p>
            </div>
        );
    }
}
export default AdminView;