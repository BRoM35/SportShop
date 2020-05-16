import React, { Component } from 'react';
import image from '../../images/ligi.jpg';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, NavLink, PaginationLink } from 'reactstrap';
import './Catalog.css';

//фейковые данные если отст коннект к базе
const fakeCarts = [ 
  {
    name: 'Nordway Combi',
    img: image,
    price: 1199
  }, {
    name: 'Nordway Combi',
    img: image,
    price: 1199
  }, {
    name: 'Nordway Combi',
    img: image,
    price: 1199
  }, {
    name: 'Nordway Combi',
    img: image,
    price: 1199
  }, {
    name: 'Nordway Combi',
    img: image,
    price: 1199
  }, {
    name: 'Nordway Combi',
    img: image,
    price: 1199
  }
];

export class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carts: fakeCarts,
      countView: 5,
      countPagination: 1,
      sortValue: 'down'
    };
  }

  componentDidMount() {
    this.getCarts();
  }
  
  onClickPagination = (str) => {
    const {
      carts,
      countView
    } = this.state;
    
    const maxStep = Math.ceil(carts.length/countView);
    if (str !== 0 && str <= maxStep) {
      this.setState({countPagination: str})
    }
  }
  
  testPagination = (props) => {
    return (
      <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous onClick={() => this.onClickPagination(this.state.countPagination - 1)}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => this.onClickPagination(1)}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  onClick={() => this.onClickPagination(2)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => this.onClickPagination(3)}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => this.onClickPagination(4)}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => this.onClickPagination(5)}>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={() => this.onClickPagination(this.state.countPagination + 1)}/>
        </PaginationItem>
      </Pagination>
    );
  };
  
  renderCarts = () => {
    const {
      carts,
      countView,
      countPagination,
      sortValue
    } = this.state;
    
    const minValue = countView * (countPagination - 1);//с какой карточки начинается стр
    const maxValue = countView * countPagination;
    
    const sortCarts = (arr) => {
      arr.sort((a, b) => {
        if (sortValue === 'up') {
          return a.price > b.price ? 1 : -1
        } else {
          return a.price < b.price ? 1 : -1
        }
      });
    };

    sortCarts(carts)

    return carts.map((cart, i) => {
      if (minValue <= i && i < maxValue) {
        const link = `/catalog/${cart.id}`
        return (
          <div key={i} className="catalog-cart col-2">
            <NavLink className="my_link" tag={Link} to={link}>
              <div className="catalog-cart-image">
                <img src={`${cart.photo}`} alt=""/>
              </div>
              <p className="catalog-cart-title">{cart.name}</p>
              <p className="catalog-cart-amount">{cart.price} ₽</p>
            </NavLink>
          </div>
        )
      }
    })
  };
  
  changeCounterView = (count) => {
    this.setState({countView: count})
  }

  async getCarts() {
    const response = await fetch('catalog');
    const data = await response.json();
    this.setState({ carts: data });
  }
  
  changeSelectSort = (event) => {
    this.setState({sortValue: event.target.value})
  }
  
  render () {
    const {
      countView,
      sortValue
    } = this.state;
    
    return (
      <div className="catalog">
        <p className="catalog-title">Беговые лыжи</p>
        <div className="catalog-menu row">
          <div className="col-4">
            <p>Сортировать по: </p>
            <select
              className="catalog-menu-select"
              onChange={this.changeSelectSort}
              value={sortValue}
            >
              <option value="up">По цене ↑</option>
              <option value="down">По цене ↓</option>
            </select>
          </div>
          <div className="col-4 justify-content-center">
            <p>Показать по: </p>
            <p className={countView === 5 ? "pointer-active" : "pointer" }
              onClick={() => this.changeCounterView(5)}>
              5
            </p>
            <p>|</p>
            <p className={countView === 10 ? "pointer-active" : "pointer" }
              onClick={() => this.changeCounterView(10)}>
              10
            </p>
            <p>|</p>
            <p className={countView === 20 ? "pointer-active" : "pointer" }
               onClick={() => this.changeCounterView(20)}>20</p>
          </div>
          <div className="col-4 justify-content-end">
            {this.testPagination()}
          </div>
        </div>
        <div className="catalog-carts col-12 row">
          {this.renderCarts()}
        </div>
        <div>
        </div>
      </div>
    );
  }
}
