import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Header from './template/Header';
import Footer from './template/Footer';
import '../stylesheets/global.scss';
require('../scripts/app');

export default class NotFound extends React.Component {

  constructor() {
    super();
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
            <div className="error">
              <span className="error__icon">
              </span>
              <div className="error__text">
                La page que vous avez demander n'est pas disponible
              </div>
            </div>
          </div>
        </div>
        { this.BasPage.render() }
      </div>
    );
  }
}