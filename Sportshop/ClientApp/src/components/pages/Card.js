import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Card.css';
import image from '../../images/ligi.jpg';

const fakeCards = [
  {
    name: 'Nordway Combi',
    photo: image,
    price: 1199,
    amount: 1
  },
  {
    name: 'Nordway Combi',
    photo: image,
    price: 1199,
    amount: 1
  },
  {
    name: 'Nordway Combi',
    photo: image,
    price: 1199,
    amount: 1
  }
];

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cards: fakeCards,
      total: 0,
      countCart: 0
    };
  }

  componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const url = window.location.pathname;
    const response = await fetch(`${url}/1`);
    const data = await response.json();
    this.countTotalSumm(data);
  }

  deleteCart = async (id) => {
    const url = window.location.pathname;
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    this.countTotalSumm(data);
  }
  
  renderCardCart = () => {
    const {
      cards
    } = this.state;
    
    return cards.map(cart => {
      return [
        <div className="card-cart row">
          <div className="card-cart-image col-4">
            <img src={cart.photo} alt=""/>
          </div>
          <div className="card-cart-info col-8">
            <div className="card-cart-info-title">
              <p className="card-cart-info-name">{cart.name}</p>
              <p className="card-cart-info-amount">{cart.price} Р</p>

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
              <p className="card-cart-category">Кол-во:</p><p>{cart.amount}</p>
            </div>
            <div className="card-cart-info-counts">
              <Button color="danger" onClick={() => this.deleteCart(cart.id)}>Удалить</Button>
            </div>
          </div>
        </div>,
        <hr/>
      ];
    })
  }
  
  countTotalSumm = (data) => {    
    let total = 0;
    let countCart = 0;

    data.map(cart => {
      countCart++;
      total += cart.price * cart.amount
    });
    
    this.setState({
      total,
      countCart,
      cards: data
    });
    
  }
  
  render () {
    const {
      total,
      countCart
    } = this.state;

    return (
      <div className="cards">
        <p className="card-title">Корзина</p>
        <div className="card-content row">
          <div className="col-8">
            {this.renderCardCart()}
          </div>
          <div className="card-total col-4 row">
            <div className="col-12 row">
              <div className="card-total-price col-6">
                <p className="card-total-price-total">Итого:</p>
              </div>
              <div className="card-total-price col-6">
                <p>{total} руб.</p>
                <p>{countCart} товара</p>
              </div>
              <div className="col-12 button-sell">
                <div className="button-sell">
                  <Button color="primary">Оформить покупку</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
