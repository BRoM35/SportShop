import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Card.css';
import image from '../../images/ligi.jpg';

const fakeCarts = 
  {
    name: 'Nordway Combi',
    description: 'TESTT#ESTawtohauihjyaighklaksga teqwtrqfasd asdfqwerfasd',
    photo: image,
    price: 1199
  }
  ;

export class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: fakeCarts,
      amount: 1
    };
  }

  componentDidMount() {
    this.getCart();
  }

  async getCart() {
    const url = window.location.pathname;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ cart: data });
  }
  
  createCard = (id) => {
    const item = {
      ProductId: id,
      UserId: 1,
      Amount: this.state.amount
    };
    fetch('card', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
      dataType: 'json'
    })
      .then(response => console.log(response))
  }

  changeCounter = (operation) => {
    const {
      amount
    } = this.state;
    if (operation === 'up') {
      this.setState({amount: amount + 1})
    } else {
      if (amount !== 1) {
        this.setState({amount: amount - 1});
      }
    }
  }
  
  
  render () {
    const {
      cart,
      amount
    } = this.state;
    return (
      <div className="catalog">
        <p className="card-title">{cart.name}</p>
        <div className="card-cart row">
          <div className="card-cart-image col-4">
            <img src={cart.photo} alt=""/>
          </div>
          <div className="card-cart-info col-8">
            <div className="card-cart-info-vendor">
              <p className="card-cart-category">Категория:</p><p>{cart.category}</p>
            </div>
            <div className="card-cart-info-vendor">
              <p className="card-cart-category">Пол:</p><p>{cart.gender}</p>
            </div>
            <div className="card-cart-info-vendor">
              <p className="card-cart-category">Артикул:</p><p>1031312321</p>
            </div>
            <div className="card-cart-info-color">
              <p className="card-cart-category">Цвет:</p><p>Белый, красный, фиолетовый</p>
            </div>
            <div className="card-cart-info-size">
              <p className="card-cart-category">Размер:</p><p>25-52</p>
            </div>
            <div className="card-cart-info-counts">
              <p className="card-cart-category">Кол-во:</p>
              <button
                onClick={() => this.changeCounter('down')}
                className="button-amount">
                -
              </button>
              <p>{amount}</p>
              <button
                onClick={() => this.changeCounter('up')}
                className="button-amount">
                +
              </button>
            </div>
            <div className="card-cart-info-counts">
              <p className="card-cart-category">Цена:</p><p>{cart.price} Р</p>
            </div>
            <div className="button-sell">
              <Button color="primary" onClick={() => this.createCard(cart.id)}>Добавить в корзину</Button>
            </div>
          </div>
          <div className="card-cart-info-description col-12">
            <p>{cart.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
