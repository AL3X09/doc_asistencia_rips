//https://bezkoder.com/react-jwt-auth/
import React, { Component } from "react";


import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import { isEmail } from "validator";
import './login.css';
import AuthService from "../../services/auth.service";

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.onChangename = this.onChangename.bind(this);
        this.onChangelastname = this.onChangelastname.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangedirec = this.onChangedirec.bind(this);
        this.onChangeoffice = this.onChangeoffice.bind(this);
        this.onChangetelephone = this.onChangetelephone.bind(this);
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeconfirmpassword = this.onChangeconfirmpassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            last_name: '',
            email: '',
            direc: '',
            office: '',
            telephone: '',
            username: '',
            password: '',
            successful: false,
            message: ""
        };

    }

    onChangename(e) {
        //console.log(e.target.value)
        if (e.target.value.length < 3) {
            this.setState({
                message: "Diligencie el campo nombre",
                successful: false,
            });
        } else {
            this.setState({
                message: "",
                successful: true,
                name: e.target.value
            });
        }

    }

    onChangelastname(e) {
        if (e.target.value.length < 3) {
            this.setState({
                message: "Diligencie el campo apellidos",
                successful: false
            });
        } else {

            this.setState({
                message: "",
                successful: true,
                last_name: e.target.value
            });
        }

        /*this.setState({
            last_name: e.target.value
        });*/

    }
    onChangeemail(e) {
        //const regexInsensitive = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //console.log(regexInsensitive.test(e.target.value.toLowerCase()));
        if (e.target.value.length < 3) {
            this.setState({
                message: "Diligencie el campo correo",
                successful: false,
            });
        } else {

            this.setState({
                message: "",
                successful: true,
                email: e.target.value.toLowerCase()
            });
        }

    }
    onChangedirec(e) {
        if (e.target.value.length < 3) {
            this.setState({
                message: "Diligencie la dirección",
                successful: false,
            });
        } else {

            this.setState({
                message: "",
                successful: true,
                direc: e.target.value
            });
        }
    }
    onChangeoffice(e) {
        if (e.target.value.length < 3) {
            this.setState({
                message: "Diligencie la dirección",
                successful: false,
            });
        } else {

            this.setState({
                message: "",
                successful: true,
                office: e.target.value
            });
        }
    }
    onChangetelephone(e) {
        if (e.target.value.length < 3) {
            this.setState({
                message: "Diligencie la extencón o telefono",
                successful: false,
            });
        } else {

            this.setState({
                message: "",
                successful: true,
                telephone: e.target.value
            });
        }
    }

    onChangeusername(e) {
        if (e.target.value.length < 4) {
            this.setState({
                message: "Diligencie el nombre de usuario",
                successful: false,
            });
        } else {

            this.setState({
                message: "",
                successful: true,
                username: e.target.value
            });
        }
    }

    onChangePassword(e) {
        //const valor = '';
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\-\+])(?=.{8,})");
        //console.log(strongRegex.test(e.target.value));
        if (strongRegex.test(e.target.value) == false) {
            this.setState({
                message: "La contraseña debe tener minimo 8 caracteres, una letra mayuscula, una minuscula y un caracter especial.",
                successful: false,
            });
        } else {

            this.setState({
                message: "",
                successful: true,
                password: e.target.value,

            });
        }
    }

    onChangeconfirmpassword(e) {

        if (e.target.value.length < 8) {

            this.setState({
                message: 'Diligencie el campo confirmación de contraseña',
                successful: false
            });

        } else {
            this.setState({
                message: '',
                successful: true,
                passwordConfirm: e.target.value
            });
        }

    }


    handleSubmit(event) {
        event.preventDefault();

        if (this.state.passwordConfirm != this.state.password) {

            this.setState({
                message: 'La contraseña y su confirmación no coinciden',
                successful: false
            });
        } else {

            AuthService.register(
                this.state.name,
                this.state.last_name,
                this.state.email,
                this.state.direc,
                this.state.office,
                this.state.telephone,
                this.state.username,
                this.state.password,
            ).then(response => {
                //console.log(response);
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
        }

    };
    render() {
        return (
            <form style={{ marginTop: '100%' }} onSubmit={this.handleSubmit}>
                <h3>Registro</h3>

                <div className="form-group">
                    <label>Nombres</label>
                    <input type="text" className="form-control" placeholder="Nombres" name="name" required
                        onChange={this.onChangename} />
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="form-control" placeholder="Apeliidos" name="lastname" required
                        onChange={this.onChangelastname} />
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Correo" name="email" required
                        onChange={this.onChangeemail} />
                </div>

                <div className="form-group">
                    <label>Entidad</label>
                    <input type="text" className="form-control" placeholder="Entidad" name="direc" required
                        onChange={this.onChangedirec} />
                </div>

                <div className="form-group">
                    <label>Dependencia</label>
                    <input type="text" className="form-control" placeholder="Dependencia" name="office" required
                        onChange={this.onChangeoffice} />
                </div>

                <div className="form-group">
                    <label>Extención</label>
                    <input type="number" className="form-control" placeholder="Extensión" name="telephone" required
                        onChange={this.onChangetelephone} />
                </div>

                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" className="form-control" placeholder="Usuario de acceso" name="username" required
                        onChange={this.onChangeusername} />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" name="password" required
                        onChange={this.onChangePassword} />
                </div>

                <div className="form-group">
                    <label>Confirme Contraseña</label>
                    <input type="password" className="form-control" placeholder="Confirme contraseña" name="passwordConfirm" required
                        onChange={this.onChangeconfirmpassword} />
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

                <button type="submit" className="btn btn-dark btn-lg btn-block">Registrar</button>
                <p className="forgot-password text-right">
                    Ya estoy resgistrado <a href="/">Ingresar</a>
                </p>
            </form>
        );
    }
}