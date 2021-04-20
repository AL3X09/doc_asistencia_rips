import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } onChange = (e) => this.setState({ [e.target.name]: e.target.value }); 
  handleSubmit(event) {
    axios.post('http://localhost:8000/account/api/register',{
        username: this.state.email,
        password: this.state.password,
        
    }).then(function (res){
        console.log(res)
        //localStorage.setItem('token', res.data.access);
        //localStorage.setItem('user', res.config.data);
    }).catch(function (err){
        console.log(err)
    })
    //console.log(this.state.username)
    //console.log(this.state.password)
    event.preventDefault();
  } render() {
    return (
      <Container style={{ marginTop: '100px' }}>
        <Form>
          <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
          <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="usuario" name="username" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="contraseña" name="password" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
        </Button>
        </Form>
      </Container>
    )
  }
}