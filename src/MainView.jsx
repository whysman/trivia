import React, { Component } from 'react';

import UserView from './UserView';
import AdminView from './AdminView';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: []
        };
        this.props.keycloak.loadUserInfo().then(userInfo => {
            this.setState({roles: userInfo.groups})
        });
    }

    render() {
        if(this.state.roles.includes("trivia-admin")) {
            return (
                <div>
                    <p>This is the admin page.</p>
                    <AdminView keycloak={this.props.keycloak} />
                </div>
            )
        }else{
            return (
                <div>
                    <p>This is the user page.</p>
                    <UserView keycloak={this.props.keycloak} />
                </div>
            )           
        }
    }
}
export default MainView;