import React from "react";
import FluxComponent from 'flummox/component';

import ScoreSummary from './ScoreSummary.jsx'
import ScoreInput from './ScoreInput.jsx';
import ScoreList from './ScoreList.jsx';

export default class AdminAppHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin">
        <button className="rest_btn" onClick={this.handleReset.bind(this)}>リセット</button>
      </div>
    );
  }

  handleReset() {
    this.props.flux.getActions('score').resetAction();
  }
}
