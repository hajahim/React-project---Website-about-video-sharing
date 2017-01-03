import React from 'react';

export default class Footer extends React.Component {

  constructor(text) {
    super();
    this.text = text;
  }

  render() {
    return (
      <footer className="l-footer">
        <div className="box">
          <p className="footer__copyright">{this.text}</p>
        </div>
      </footer>
    );
  }

}