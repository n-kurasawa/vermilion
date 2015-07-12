import { Store } from 'flummox';

export default class ScoreStore extends Store {
  constructor(flux) {
    super();

    const scoreActions = flux.getActionIds('score');
    this.register(scoreActions.getScore, this.handlegetScore);
    this.register(scoreActions.resetScore, this.handleResetScore);
    this.register(scoreActions.error, this.handlerror);

    this.state = {
      scores: {},
      error: ""
    };
  }

  handlegetScore(score) {
    this.setState( (state) => {
      var newScoreId = +new Date();
      state.scores[newScoreId] = score;
      return {scores:  state.scores, error: ""};
    });
  }

  handleResetScore() {
    this.setState({scores: {}, error:""});
  }

  handlerror(msg) {
    this.setState({error: msg})
  }

}
