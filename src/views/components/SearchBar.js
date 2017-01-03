import React from 'react';

export default class SearchBar extends React.Component {

  constructor(placeHolder) {
    super();
    this.placeHolder = placeHolder;
  }

  render() {
    return (
      <form className="search-bar">
        <button className="search-bar__btn btn btn--grey"><i className="icon icon--search"></i></button>
        <div className="search-bar__content">
          <input className="search-bar__content__input" type="text" name="search_query" placeholder={this.placeHolder} />
        </div>
      </form> 
    );
  }
}