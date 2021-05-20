import React, { Component } from "react";
import AuthService from "../../services/auth.service";

import Header from '../header/Header.component';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
        };
    }

    render() {
        //console.log('currentUser');

        const { currentUser } = this.state;
        //const { header } = <Header />;
        return (
            <React.Fragment>
                <Header />
                
            </React.Fragment>
        );
    }
}

export default Dashboard