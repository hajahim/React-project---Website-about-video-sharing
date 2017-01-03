import React from 'react';

export default class Navigation extends React.Component {

  constructor(navigationList = []) {
    super();
    this.navigationList = navigationList;
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navigation">
        { 
          this.navigationList.map(function(item, i) { 
            return (
              <li className="navigation__item" key={i}>
                <a className="navigation__item__link" href={item.src}>{item.text}</a>
              </li>
            );
          }) 
        }
        </ul>
      </nav>
    );
  }
}