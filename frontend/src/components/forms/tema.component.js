import React, { Component } from "react";
import { render } from 'react-dom'
import Temaservice from "../../services/tema.service";
import { Card, Button, Form, div, Row, Col, Table, } from 'react-bootstrap';


var datos;

class Formasistencia extends Component {


    constructor(props) {
        super(props);

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            nombre: '',
        }

    }

    updateInput(e) {

        this.setState({
            nombre: e.target.value
        })
    }

    Cargaselect() {

    }

    Cargatabla() {
        Temaservice.load_datos_t().then(response => {
            
            datos.push(JSON.stringify(response));
            console.log(datos);
        }, error => {
            const resMessage = (error.error + ' Descripción:' + JSON.stringify(error.errores))
            //console.log(resMessage);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        //console.log(this.state.nombre);
        Temaservice.crear_t(
            this.state.nombre,
        ).then(response => {

            this.setState({
                message: response.message,
                successful: true
            });
        }, error => {

            const resMessage = (error.error + ' Descripción:' + JSON.stringify(error.errores))
            //console.log(resMessage);
            this.setState({
                message: resMessage,
                successful: false
            });
            //alert(JSON.stringify(error.errores));

        });
    };


    render() {

        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h1>Temas</h1>
                    </div>
                    <hr />
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Nombre
                    </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="nombre" onChange={this.updateInput} />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                </Button>
                </Form>

                <div>
                {this.Cargatabla()}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        datos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                            </tr>
                        ))
                    }
                        </tbody>
                    </Table>
                </div>
            </>

        );
    }
}

export default Formasistencia