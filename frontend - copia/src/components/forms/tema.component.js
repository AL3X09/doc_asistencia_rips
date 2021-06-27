import React, { Component } from "react";
import { render } from 'react-dom'
import Temaservice from "../../services/tema.service";
import { Card, Button, Form, div, Row, Col, Table, } from 'react-bootstrap';


const datos = [];

const data = [
    { name: "Video1", text: "video 1 text" },
    { name: "Video2", text: "video 2 text" },
    { name: "Video3", text: "video 3 text" },
];

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

            //return (
            response.map((k) => {

                datos.push(k);
                //return <tr key={k.id}><td>{k.nombre}</td></tr>;
            })
            //)
            //console.log(data);
            //console.log(datos);
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
                {this.Cargatabla()}
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
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(el => (
                                <tr>
                                    <td>{console.log(el)}</td>
                                    <td>{el.nombre}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </div>
            </>

        );
    }
}

export default Formasistencia