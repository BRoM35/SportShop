import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Registration.css'

export class Registration extends Component {
  static displayName = 'Регистрация';

  render () {
    return (
      <div>
        <p className="title">РЕГИСТРАЦИЯ</p>
        <hr/>
        <form action="registration" className="form">
          <div className="form-field">
            <p>Введите Ваш e-mail:</p>
            <input type="text"/>
          </div>
          <div className="form-field">
            <p>Придумайте пароль:</p>
            <input type="password"/>
          </div>
          <div className="form-field">
            <p>Повторите пароль:</p>
            <input type="password"/>
          </div>
          <div className="form-field">
            <p>Ваше имя:</p>
            <input type="text"/>
          </div>
          <div className="form-field">
            <p>Ваш номер телефона:</p>
            <input type="text"/>
          </div>
          <Button color="primary">Зарегистрироваться</Button>
        </form>
      </div>
    );
  }
}
