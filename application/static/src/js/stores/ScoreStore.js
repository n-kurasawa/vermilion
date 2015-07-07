import { Store } from 'flummox';

export default class ScoreStore extends Store {
  constructor(flux) {
    super();

    const scoreActions = flux.getActionIds('score');
    this.register(scoreActions.getScore, this.handlegetScore);
    this.register(scoreActions.createScore, this.handleCreateScore);
    this.register(scoreActions.resetScore, this.handleResetScore);

    this.state = {
      scores: {}
    };
  }

  handlegetScore(score) {
    var newScoreId = +new Date();
    var scores = this.state.scores;
    scores[newScoreId] = score;
    this.setState( {scores} );
  }

  handleCreateScore() {
  }

  handleResetScore() {
    this.setState({});
  }

}
