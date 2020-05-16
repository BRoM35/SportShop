import React, { Component } from 'react';
import Slider from '../Slider';
import '../Slider.css';
import './Home.css';
import carouselImg3 from '../../images/carousel-1.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <article className="slider">
          <Slider />
        </article>
        <article className="category">
          <ul className="row col-12 category-list">
            <li className="col-lg-2 col-sm-12">ЖЕНЩИНАМ</li>
            <li className="col-lg-2 col-sm-12">МУЖЧИНАМ</li>
            <li className="col-lg-2 col-sm-12">ДЕТЯМ</li>
          </ul>
        </article>
        <article className="popular">
          <p className="popular-title">ПОПУЛЯРНЫЕ КАТЕГОРИИ</p>
          <ul className="row col-12 popular-list">
            <li className="col-lg-4">Товары для мальчиков</li>
            <li className="col-lg-4">Беговые лыжи</li>
            <li className="col-lg-4">Батуты</li>
            <li className="col-lg-4">Ледовые коньки и хоккей</li>
            <li className="col-lg-4">Тренажеры и фитнес</li>
          </ul>
        </article>
        <article className="news">
          <p className="news-title">НОВОСТИ И АКЦИИ</p>
          <div className="row col-12">
            <div className="col-xl-1 col-lg-12">
              <img className="news-photo" src={carouselImg3} alt="img" />
            </div>
            <div className="col-xl-1 col-lg-12">
              <img className="news-photo" src={carouselImg3} alt="img" />
            </div>
            <div className="col-xl-1 col-lg-12">
              <img className="news-photo" src={carouselImg3} alt="img" />
            </div>
          </div>
        </article>
      </div>
    );
  }
}
