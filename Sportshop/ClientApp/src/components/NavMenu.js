import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import palette from '../images/palette-white-18dp.svg';
import menu from '../images/menu-white-18dp.svg';
import cart from '../images/shopping_cart-white-18dp.svg';
import add from '../images/person_add-white-18dp.svg';
import person from '../images/person-white-18dp.svg';
import './NavMenu.css';

const fakeCategory = [
  {
    name:'Одежда для спорта и активного отдыха'
  },{
    name:'Все для детей'
  },{
    name:'Тренажеры и фитнес'
  },{
    name:'Бег'
  },
]

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      categories: fakeCategory
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  renderCatalogCategories = () => {
    const {
      categories
    } = this.state;
    return (
      <DropdownMenu right>
        {
          categories.map((category, i) => {
            return (
              <DropdownItem key={i} tag={Link} to="/catalog">
                {category.name}
              </DropdownItem>
            )
          })
        }
      </DropdownMenu>
    )
  }

  async getCategories() {
    const response = await fetch('category');
    const data = await response.json();
    this.setState({ categories: data });
  }

  render () {
    return (
      <header className="header">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white" light>
          <NavbarBrand tag={Link} to="/">
            <img className="header-logo" src={logo} alt="logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/info">
                  <img src={palette} alt="logo"/>
                  О НАС
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="text-white">
                  <img src={menu} alt="menu"/>
                  КАТАЛОГ
                </DropdownToggle>
                {this.renderCatalogCategories()}
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/card">
                  <img src={cart} alt="cart"/>
                  КОРЗИНА
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/registration">
                  <img src={add} alt="add"/>
                  РЕГИСТРАЦИЯ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-white" to="/auth">
                  <img src={person} alt="person"/>
                  ВХОД
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
