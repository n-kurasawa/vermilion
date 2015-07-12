import React from 'react';

export default class ScoreInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newScore: props.newScore
    };
  }

  render() {
    return (
      <form>
        <input className="new-score" type="text" value={this.state.newScore} onChange={this.handleChange.bind(this)} placeholder="点数" autofocus />
        <input className="score-submit button" type="submit" value="採点する" onClick={this.handleSubmit.bind(this)} />
        <div className="err">{this.props.error}</div>
      </form>
    );
  }

  handleChange(e) {
    this.setState({
      newScore: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newScore.length === 0) return;

    if (this.state.newScore.match(/^[0-9]+$/)) {
      this.props.flux.getActions('score').createScore(this.state.newScore);
    }

    this.setState({
      newScore: ''
    });
  }
}

ScoreInput.defaultProps = { newScore: ''};
