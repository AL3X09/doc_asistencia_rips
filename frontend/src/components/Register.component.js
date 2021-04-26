//https://bezkoder.com/react-jwt-auth/
import React, { Component } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const resMessage ='';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 ) {
      return (
        
        resMessage='The username must be between 3 and 20 characters.'
        
      );
    }
  };



export default class Register extends Component {

    constructor(props) {
        super(props);


        this.onChangename = this.onChangeUsername.bind(this);
        this.onChangelastname = this.onChangePassword.bind(this);
        this.onChangeemail = this.onChangePassword.bind(this);
        this.onChangedirec = this.onChangePassword.bind(this);
        this.onChangeoffice = this.onChangePassword.bind(this);
        this.onChangetelephone = this.onChangePassword.bind(this);
        this.onChangeusername = this.onChangePassword.bind(this);
        this.onChangepassword = this.onChangePassword.bind(this);
        this.onChangeconfirmpassword = this.onChangePassword.bind(this);

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name:'',
            last_name:'',
            email:'',
            direc:'',
            office:'',
            telephone:'',
            username: '',
            password: '',
            successful: false,
            message: ""
        };

    } onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onChangename(e) {
        console.log(e.target.value);
        this.setState({
          username: e.target.value
        });
      }

    onChangelastname(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            successful: false,
            message: resMessage
          });

    };
    render() {
        return (
            <form style={{ marginTop: '100%' }}>
                <h3>Registro</h3>

                <div className="form-group">
                    <label>Nombres</label>
                    <input type="text" className="form-control" placeholder="Nombres" name="name" required
                            onChange={this.onChangename}/>
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="form-control" placeholder="Apeliidos" name="lastname" required
                       onChange={this.onChangelastname}/>
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Correo" name="email" required
                       onChange={this.onChangename}/>
                </div>

                <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" className="form-control" placeholder="Dirección de trabajo" name="direc" required
                       onChange={this.onChangename}/>
                </div>

                <div className="form-group">
                    <label>Dependencia</label>
                    <input type="text" className="form-control" placeholder="Dependencia" name="office" required
                       onChange={this.onChangename}/>
                </div>

                <div className="form-group">
                    <label>Extención</label>
                    <input type="number" className="form-control" placeholder="Extensión" name="telephone" required
                       onChange={this.onChangename}/>
                </div>

                <div className="form-group">
                    <label>Usuario</label>
                    <input type="password" className="form-control" placeholder="Usuario de acceso" name="username" required
                       onChange={this.onChangename}/>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" name="password" required
                       onChange={this.onChangename}/>
                </div>

                <div className="form-group">
                    <label>Confirme Contraseña</label>
                    <input type="password" className="form-control" placeholder="Confirme contraseña" name="passwordConfirm" required
                       onChange={this.onChangename}/>
                </div>

                {this.state.message && (
                    <div className="form-group">
                        <div
                            className={
                                this.state.successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                            }
                            role="alert"
                        >
                            {this.state.message}
                        </div>
                    </div>
                )}

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>Registrar</button>
                <p className="forgot-password text-right">
                    Ya estoy resgistrado <a href="/">Ingresar</a>
                </p>
            </form>
        );
    }
}