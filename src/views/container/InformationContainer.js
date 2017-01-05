import React from 'react';
import Information from '../Information';

export default class InformationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardInfo: {} }
  }
  componentWillMount() {
    var listeCard = require('../../../data/db-card.js');
    var cardVisulaize = {};
    for(var i = 0 ; i < listeCard.length ; i++) {
      if(listeCard[i].id == this.props.params.videoID) {
        cardVisulaize = listeCard[i];
        break;
      }
    }
    this.setState({ cardInfo: cardVisulaize, cardList: listeCard });
  }
  render() {
    return <Information cardInfo={this.state.cardInfo} cardList={this.state.cardList} />;
  }
}