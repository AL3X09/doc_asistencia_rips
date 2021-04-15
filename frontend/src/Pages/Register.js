import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    handleSubmit(event) {
        console.log(this.state.first_name)
        console.log(this.state.last_name)
        console.log(this.state.email)
        console.log(this.state.password)
        event.preventDefault();
    }
    render() {
        return (
            <Container style={{ marginTop: '25px' }}>
                <Form>
                    <Form.Group controlId="formBasicFirstName" style={{ width: '300px' }}>
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="first_name" value={this.state.first_name} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName" style={{ width: '300px' }}>
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name="last_name" value={this.state.last_name} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName" style={{ width: '300px' }}>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" name="last_name" value={this.state.last_name} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName" style={{ width: '300px' }}>
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" name="last_name" value={this.state.last_name} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName" style={{ width: '300px' }}>
                        <Form.Label>Oficina</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" name="last_name" value={this.state.last_name} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Registrar
                    </Button>
                </Form>
            </Container>
        )
    }
}