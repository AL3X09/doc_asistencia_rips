import React, { Component } from "react";
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

export default class Login extends Component {

    constructor(props) {
        super(props);
        

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
          };

      } onChange = (e) => this.setState({ [e.target.name]: e.target.value });

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
        //form.current.validateAll();
        //username: this.state.username;
        //password: this.state.password;
        AuthService.login(this.state.username, this.state.password).then(() => {
            //console.log(this.state.username, this.state.password);
            //props.history.push("/profile"); //si todo es correcto llama a la pagina
            //window.location.reload();
        }, (error) => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message || error.toString();

            //setLoading(false);
            //setMessage(resMessage);
        });

    };


    render() {
        return (
            <form>

                <h3>Ingresar</h3>

                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" className="form-control" placeholder="Usuario" name="username" required
                       onChange={this.onChangeUsername}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" name='password' required
                        onChange={this.onChangePassword}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"  onClick={this.handleSubmit}>Ingresar</button>
                <p className="forgot-password text-right">
                    Olvido su <a href="#">contraseña?</a>
                </p>
            </form>
        );
    }
}