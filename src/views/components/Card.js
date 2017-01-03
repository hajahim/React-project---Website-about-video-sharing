import React from 'react';

export default class Card extends React.Component {

  constructor(cardItem, type, key) {
    super();
    this.card = cardItem;
    this.type = type;
    this.key = key;
  }

  render() {
    return (
      <section className="card grid__cell 1/4--desk 1/3--lap 1/2--handheld 1/1--thumb" key={this.key}>
          <div className="grid">
            <div className="card__image grid__cell 1/1 1/2--thumb">
              <a href={`/watch/${this.card.id}`}>
                <img src={this.card.img.src} alt={this.card.img.alt} height={this.card.img.height} width={this.card.img.width} />
              </a>
              <span className="card__video-time">{this.card.video_duration}</span>
              <a className="card__btn-visualize btn btn--grey btn--small btn--rounded" href={`/watch/${this.card.id}`}><i className="icon icon--video"></i></a>
            </div>
            <article className="card__body grid__cell 1/1 1/2--thumb">
              <h3 className="card__body__title">
                <a href={`/watch/${this.card.id}`} className="card__body__title__link">{this.card.title}</a>
              </h3>
              <p className="card__body__author">{this.card.author}</p>
            </article>
        </div>
      </section>
    );
  }

}