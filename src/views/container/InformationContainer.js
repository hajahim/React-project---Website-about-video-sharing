import React from 'react';
import Information from '../Information';

export default class InformationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardInfo: {} }
  }
  componentWillMount() {
    var listeCard = require('../../../data/db-card.js');
    // for(var i = 0 ; i < listeCard.length ; i++) {
    //   if(listeCard[i].id === this.props.params.videoID) {
        
    //     return;
    //   }
    // }
    this.setState({ cardInfo: listeCard[0] });
  }
  render() {
    return <Information cardInfo={this.state.cardInfo} />;
  }
}