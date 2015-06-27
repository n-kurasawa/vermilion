import React from 'react';
import FluxComponent from 'flummox/component';

import ScoreItem from './ScoreItem.jsx'

export default class ScoreList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var scores = this.props.scores;

    var items = [];
    Object.keys(scores).forEach( (id)=> {
      items.push(
        <ScoreItem key={id} id={id} score={scores[id]} />
      );
    });

    return (
      <div className="score-list">
        {items}
      </div>
    );
  }
}
