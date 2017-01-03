import React from 'react';

class Button extends React.Component {

  constructor(text, modificator) {
    this.text = text;
    this.modificator = modificator;
  }

  render() {
    return (
      <span className={`btn ${this.type}`}>{this.text}</span>
    );
  }
}