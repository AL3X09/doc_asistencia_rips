import React, { Component } from 'react'
import {
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
//import { Form, Button, Container } from 'react-bootstrap'

export default class Login extends Component {constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}onChange = (e) => this.setState({ [e.target.name]: e.target.value });handleSubmit(event) {
    console.log(this.state.username)
    console.log(this.state.password)
    event.preventDefault();
}render() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Form>
        <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>. <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>           
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
        </Form.Group>
        
       <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
        
       <Button variant="primary" type="submit" onClick={this.handleSubmit}>
Submit
        </Button>
      </Form>
    </Container>
   )
 }
}