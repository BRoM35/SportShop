import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render () {
    return (
      <footer>
        <p className="text-white text-center">«Speedo» - <b>интернет-магазин спортивных товаров и инвентаря для активного отхыда и спорта</b></p>
        <p className="text-white text-center"><b>Контактный телефон:</b> +79827819375</p>
        <p className="text-white text-center">r.bolvin@mail.ru</p>
      </footer>
    );
  }
}
