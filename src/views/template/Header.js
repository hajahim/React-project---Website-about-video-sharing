import React from 'react';

export default class Header extends React.Component {

  constructor(navBar, searchBar) {
    super();
    this.navBar = navBar;
    this.searchBar = searchBar;
  }

  render() {
    return (
      <header className="l-header">
        <section className="header__container">
          <div className="box">
            <section className="header__brand">
              <a href="header__brand__link">
                <span className="header__brand__image" title="Accueil Media Player" />
              </a>
            </section>
            <section className="header__searchbar">
              { this.searchBar.render() } 
            </section>
            <section className="header__option">
              <a className="header__option__button btn btn--blue btn--rounded" href="#">
                <i className="header__option__button__icon icon icon--user"></i>
                <span className="header__option__button__text">Connexion</span>
              </a>
            </section>
          </div>
        </section>
        <section className="header__navbar">
          <div className="box">
            { this.navBar.render() }
          </div>
        </section>
      </header>
    );
  }
}