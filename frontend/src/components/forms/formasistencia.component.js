import React, { Component } from "react";
import { render } from 'react-dom'

import { Card, Button, Form, div, Row, Col } from 'react-bootstrap';


class Formasistencia extends Component {

    constructor(props) {
        super(props);

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

        this.state = {
            currentDate: date
        }
    }

    Cargaselect(){
        
    }

    render() {

        return (

            <Form>
                <div>
                    <h1>Formulario de Asistencias</h1>
                </div>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Usuario
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                    <Form.Label column sm="2">
                        Oficina
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                    <Form.Label column sm="2">
                        Extención
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                </Form.Group>
                <hr/>
                <Form.Group controlId="Fecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" id="fecha" name="fecha" defaultValue={this.state.currentDate} readOnly />
                </Form.Group>
                <Form.Group controlId="RecibeAsistencia">
                    <Form.Label>NOMBRE DE LA PERSONA, DEPENDENCIA O ENTIDAD QUE RECIBE ASISTENCIA </Form.Label>
                    <Form.Control type="text" id="recibeasistencia" name="recibeasistencia" />
                </Form.Group>
                <Form.Group controlId="DatContacto">
                    <Form.Label>DATOS DE CONTACTO </Form.Label>
                    <Form.Control type="text" id="datcontacto" name="datcontacto" />
                </Form.Group>
                <Form.Group controlId="Tema">
                    <Form.Label>TEMA </Form.Label>
                    <Form.Control as="select" id="tema" name="tema" />
                </Form.Group>
                <Form.Group controlId="TipoAsistencia">
                    <Form.Label>TIPO DE ASISTENCIA </Form.Label>
                    <Form.Control type="tipoasistencia" placeholder="tipoasistencia" />
                    <Form.Text className="text-muted">
                        Seleccione un valor del listado.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="Acciones">
                    <Form.Label>ACCIONES </Form.Label>
                    <Form.Control type="text" id="acciones" name="acciones" />
                </Form.Group>
                <Form.Group controlId="CompromAdquiere">
                    <Form.Label>COMPROMISOS  ADQUIRIDOS </Form.Label>
                    <Form.Control as="textarea" id="compromadquiere" name="compromadquiere" />
                </Form.Group>
                <Form.Group controlId="Firma">
                    <Form.Label>FIRMA </Form.Label>
                    <Form.Control type="text" id="firma" name="firma" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>

            </Form>

        );
    }
}

export default Formasistencia