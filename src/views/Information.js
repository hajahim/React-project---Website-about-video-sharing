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
            <section className="l-player grid__cell 3/4--desk 1/1--thumb">
              <article className="video" role="article">
                  <section className="video__object">
                    <video className="video__object__player" width={ this.props.cardInfo.video.width } height={ this.props.cardInfo.video.height } controls="controls" preload="none" onclick="this.play()">
                      <source src={ this.props.cardInfo.video.url } type="video/mp4" />
                      <span className="video__object__error">Votre navigateur ne supporte pas la video.</span>
                    </video>
                  </section>
                  <section className="video__body">
                    <h1 className="video__body__title">{ this.props.cardInfo.title }</h1>
                    <p className="video__body__author">{ this.props.cardInfo.author }</p>
                  </section>
              </article>
            </section>
            <section className="l-sidebar grid__cell 1/4--desk 1/1--thumb">
              <nav className="navbar">
                <ul className="suggest-video l-card grid">
                { 
                  this.props.cardList.map(function(item) {
                    var card = new Card(item);
                    return (
                      <li className="suggest-video__item grid__cell 1/3--lap 1/2--handheld 1/1--thumb">
                        <div className="grid">
                          { card.render() };
                        </div>
                      </li>
                    );
                  }) 
                }
                </ul>
              </nav>
            </section>
          </div>
        </div>
        { this.BasPage.render() }
      </div>
    );
  }
}