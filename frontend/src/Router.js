import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Profile from "./components/profile/Profile.component";
import Login from "./components/login/Login.component";
import Register from "./components/login/Register.component";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Ingresar" component={Login} />
            <Route path="/Registrar" component={Register} />
            <Route path="/Perfil" component={Profile} />
        </Switch>
    </BrowserRouter>
)

export default Router;