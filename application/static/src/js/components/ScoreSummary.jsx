import React from 'react';

export default class ScoreSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var sum = this.getSum();
    var average = this.getAverage(sum);

    return (
      <div className="score-summary">
        <div className="average">
          平均点：<span className="color-string">{average}</span> 点　/
        </div>
        <div className="sum">
          合計点：<span className="color-string">{sum}</span> 点
        </div>
      </div>
    );

  }

  getSum() {
    var scores = this.props.scores;
    if (Object.keys(scores).length === 0) {
      return 0;
    }

    var sum = 0;
    for (var key in scores) {
      sum += +scores[key];
    }
    return sum;
  }

  getAverage(sum) {
    if(sum === 0) return 0;

    var avg = sum / Object.keys(this.props.scores).length * 100
    avg = Math.round(avg) / 100;

    return avg;

  }
}
