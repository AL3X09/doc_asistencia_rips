import React, { useState, Component } from 'react'
import { render } from 'react-dom'

import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
  render(){
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/asistencia">Nueva Asistencia</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Header



{/*<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/Ingresar"}>Asistencia APP</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Ingresar"}>Ingresar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Registrar"}>Registrar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Ingresar" component={Login} />
            <Route path="/Registrar" component={Register} />
            <Route exact path="/Perfil" component={Profile} />    
          </Switch>
        </div>
      </div>
    </div>
</Router>*/}