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
          <div className="box grid">
            <section className="l-player grid__cell 3/4">
              <article className="video" role="article">
                  <section className="video__object">
                    <video className="video__object__player" width={ this.props.cardInfo.video.width } height={ this.props.cardInfo.video.height } controls="controls" preload="none" onclick="this.play()">
                      <source src={ this.props.cardInfo.video.url } type="video/mp4" />
                      Votre navigateur ne supporte pas la video.
                    </video>
                  </section>
                  <section className="video__body">
                    <h2 className="video__body__title">{ this.props.cardInfo.title }</h2>
                    <p className="video__body__author">{ this.props.cardInfo.author }</p>
                  </section>
              </article>
            </section>
            <section className="l-sidebar grid__cell 1/4">
            </section>
          </div>
        </div>
        { this.BasPage.render() }
      </div>
    );
  }
}