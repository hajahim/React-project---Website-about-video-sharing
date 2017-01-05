import React from 'react';

export default class SearchBar extends React.Component {

  constructor(placeHolder) {
    super();
    this.placeHolder = placeHolder;
  }

  render() {
    return (
      <form className="search-bar">
        <button className="search-bar__btn btn btn--grey">
          <i className="icon icon--search"></i>
          <span className="search-bar__btn__text">search</span>
        </button>
        <div className="search-bar__content">
          <label className="search-bar__content__label" htmlFor="search_query">enter key : </label>
          <input className="search-bar__content__input" type="text" name="search_query" id="search_query" placeholder={this.placeHolder} />
        </div>
      </form> 
    );
  }
}