import React, {Component} from 'react'

class Timer extends Component {
  render() {
    return <div className="main-timer pull-left">
        <div className="current-issue">第<span className="c-red">{this.props.expect}</span>期 离截止时间</div>
        <div className="count-down">{this.props.opentime}</div>
    </div>
  }
}

export default Timer