import React from "react";
import FluxComponent from 'flummox/component';

import ScoreSummary from './ScoreSummary.jsx'
import ScoreInput from './ScoreInput.jsx';
import ScoreList from './ScoreList.jsx';
import Flux from '../Flux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="score">
        <h1>採点くん</h1>
        <FluxComponent connectToStores={['score']}>
          <ScoreSummary />
        </FluxComponent>
        <FluxComponent>
          <ScoreInput />
        </FluxComponent>
        <FluxComponent connectToStores={['score']}>
          <ScoreList />
        </FluxComponent>
      </div>
    );
  }
}

const flux = new Flux();

React.render(
  <FluxComponent flux={flux}>
    <App />
  </FluxComponent>,
  document.getElementById('app')
);
