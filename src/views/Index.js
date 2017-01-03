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
    this.cards = [
      { 
        id: 1,
        img: {
          src: require('../images/calibrage.jpg'),
          alt: 'alternative text',
          height: '150px',
          width: '220px'
        },
        video: {
          url: require('../video/video1.mp4'),
          height: '350px',
          width: '600px'
        },
        title: 'Card 1',
        author: 'Content of card 1',
        country: 'Madagascar',
        video_duration: '3:59'
      },
      {
        id: 2,
        img: {
          src: require('../images/iphone5.jpg'),
          alt: 'alternative text',
          height: '150px',
          width: '220px'
        },
        video: {
          url: require('../video/video1.mp4'),
          height: '350px',
          width: '600px'
        },
        title: 'Card 2',
        author: 'Content of card 2',
        country: 'England',
        video_duration: '2:10'
      },
      {
        id: 3,
        img: {
          src: require('../images/immobilier-web.jpg'),
          alt: 'alternative text',
          height: '150px',
          width: '220px'
        },
        video: {
          url: require('../video/video1.mp4'),
          height: '350px',
          width: '600px'
        },
        title: 'Card 3',
        author: 'Content of card 3',
        country: 'USA',
        video_duration: '4:25'
      },
      {
        id: 4,
        img: {
          src: require('../images/nikkon-350D.jpg'),
          alt: 'alternative text',
          height: '150px',
          width: '220px'
        },
        video: {
          url: require('../video/video1.mp4'),
          height: '350px',
          width: '600px'
        },
        title: 'Card 4',
        author: 'Content of card 4',
        country: 'Japan',
        video_duration: '1:25'
      },
      {
        id: 5,
        img: {
          src: require('../images/apple-watch.jpg'),
          alt: 'alternative text',
          height: '150px',
          width: '220px'
        },
        video: {
          url: require('../video/video1.mp4'),
          height: '350px',
          width: '600px'
        },
        title: 'Card 5',
        author: 'Content of card 5',
        country: 'Italy',
        video_duration: '3:10'
      }
    ];
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
