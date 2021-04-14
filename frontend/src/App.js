import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Login from './Pages/Login'
//import NotFound from './Pages/NotFound'
//import Register from './Pages/Register'
//import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-JWT Login</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
          <Route path="/login" component={Login} />

      </Switch>
  </Router>
    
  );
}

export default App;