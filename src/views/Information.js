import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Header from './template/Header';
import Footer from './template/Footer';
import '../stylesheets/global.scss';
require('../scripts/app');

export default class Information extends React.Component {
  constructor(props) {
    super(props);

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
            <div className="card-info">
                <div className="card-info__video">
                <h1>{ this.props.videoID }</h1>
                </div>
            </div>
          </div>
        </div>
        { this.BasPage.render() }
      </div>
    );
  }
}