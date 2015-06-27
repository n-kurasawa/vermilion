import React from 'react';

export default class ScoreItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="socre-item">{this.props.score} 点</div>
    );
  }
}

ScoreItem.propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string,
}
