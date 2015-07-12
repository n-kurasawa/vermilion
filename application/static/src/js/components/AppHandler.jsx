import React from "react";
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';
import ScoreSummary from './ScoreSummary.jsx'
import ScoreInput from './ScoreInput.jsx';
import ScoreList from './ScoreList.jsx';

export default class AppHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="score">
        <h1>採点くん</h1>
        <RouteHandler/>
      </div>
    );
  }
}
