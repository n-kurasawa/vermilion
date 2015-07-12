import React from "react";
import FluxComponent from 'flummox/component';
import { Link } from 'react-router';
import ScoreSummary from './ScoreSummary.jsx'
import ScoreInput from './ScoreInput.jsx';
import ScoreList from './ScoreList.jsx';
import { RouteHandler } from 'react-router';

export default class HomeHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FluxComponent>
          <RouteHandler/>
        </FluxComponent>
        <FluxComponent connectToStores={['score']}>
          <ScoreSummary />
        </FluxComponent>
        <FluxComponent connectToStores={['score']}>
          <ScoreInput />
        </FluxComponent>
        <FluxComponent connectToStores={['score']}>
          <ScoreList />
        </FluxComponent>
      </div>
    );
  }
}
