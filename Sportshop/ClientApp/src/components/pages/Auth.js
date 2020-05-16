import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Registration.css'

export class Auth extends Component {
  render () {
    return (
      <div>
        <p className="title">ВХОД</p>
        <hr/>
        <form action="login" className="form">
          <div className="form-field">
            <p>Введите Ваш e-mail:</p>
            <input type="text"/>
          </div>
          <div className="form-field">
            <p>Введите пароль:</p>
            <input type="password"/>
          </div>
          <Button color="primary">Войти</Button>
        </form>
      </div>
    );
  }
}
