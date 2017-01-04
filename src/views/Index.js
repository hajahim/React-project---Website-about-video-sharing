import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Header from './template/Header';
import Footer from './template/Footer';
import '../stylesheets/global.scss';
require('../scripts/app');


export default class Index extends React.Component {
  
  constructor() {
    super();
    this.cards = require('../../data/db-card.js');
    this.menu = new Navigation([
      {
        src: '',
        text: 'Accueil'
      },
      {
        src: '',
        text: 'Tendances'
      }
    ]);
    // Layout
    this.Entete = new Header(this.menu, new SearchBar("Rechercher") );

    this.BasPage = new Footer('© Mihaja Rajaonarivelo 2016');
  }

  render() {
    return (
      <div className="wrapper">
        { this.Entete.render() }
        <div className="l-container">
          <div className="box">
            <div className="l-card">
              <div className="grid">
                <div className="card__category grid__cell 1/1">
                <h2 className="card__category__title">
                  <a href="#" className="card__category__title__link">
                    Recommandations
                  </a>
                </h2>
              </div>
              {
                this.cards.map(function(item, i) {
                  var card = new Card(item, '', i);
                  return card.render();
                })
              }
            </div>
          </div>
        </div>
      </div>
      { this.BasPage.render() }
    </div>
    );
  }
}
