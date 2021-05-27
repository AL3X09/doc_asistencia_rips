import React, { Component } from "react";
import { render } from 'react-dom'

import { Card, Button,Form, div } from 'react-bootstrap';


class Formasistencia extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
               <h1>Formulario de Asistencias</h1> 
            </div>
            <div>
            {
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" id="fecha" name="fecha" />
                    
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            }
         </div>
        );
    }
}

export default Formasistencia