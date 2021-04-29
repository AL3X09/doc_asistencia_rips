import React, { Component } from "react";
import AuthService from "../services/auth.service";


export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser(),

        };
    }

    render() {
        //console.log('currentUser');
        //console.log(currentUser);
        const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                <h3><strong>{currentUser.username}</strong> Perfil</h3>
                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.token.substring(0, 20)} ...{" "}
                    {currentUser.token.substr(currentUser.token.length - 20)}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.user.email}
                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {currentUser.id}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        );
    }
}