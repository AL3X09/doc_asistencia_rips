import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from './shared/Spinner';

const Login = lazy(() => import ("./components/login/Login.component"));
const Register = lazy(() => import ("./components/login/Register.component"));
const Profile = lazy(() => import ("./components/profile/Profile.component"));
const Home = lazy(() => import ("./components/dashboard/Dashboard.component"));
const Asistencia = lazy(() => import ("./components/forms/formasistencia.component"));
const Tema = lazy(() => import ("./components/forms/tema.component"));

//const Dashboard = lazy(() => import('./dashboard/Dashboard'));

/*const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));*/


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/Ingresar" component={Login} />
          <Route path="/Registrar" component={Register} />
          <Route path="/Perfil" component={Profile} />
          <Route path="/Home" component={Home} />
          <Route path="/Asistencia" component={Asistencia} />
          <Route path="/Tema" component={Tema} />

          <Redirect to="/Home" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;