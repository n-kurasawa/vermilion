import Flummox from 'flummox';
import ScoreActions from './actions/ScoreActions';
import ScoreStore from './stores/ScoreStore';

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('score', ScoreActions);
    this.createStore('score', ScoreStore, this);
  }
}
