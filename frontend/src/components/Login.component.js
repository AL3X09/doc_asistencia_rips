import React, { Component } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const onChangeUsername = (e) => {
    const username = e.target.value;
    //setUsername(username);

    AuthService.login(username, password).then(() => {
          props.history.push("/profile");
          window.location.reload();
        },(error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );

};

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        ;
        //this.onChange = this.onChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //form.current.validateAll();
      }

    render() {
        return (
            <form>

                <h3>Ingresar</h3>

                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" className="form-control" placeholder="Usuario" name="username" required
                    onChange={onChangeUsername}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" name='password' required
                    onChange={onChangeUsername}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-dark btn-lg btn-block" >Ingresar</button>
                <p className="forgot-password text-right">
                    Olvido su <a href="#">contraseña?</a>
                </p>
            </form>
        );
    }
}