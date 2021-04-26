import React from "react";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//import NotFound from './Pages/NotFound'

//import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Asistencia APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
      </Switch>
  </Router>
  );
}

export default App;