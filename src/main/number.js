import React, {Component} from 'react'

class Number extends Component {
  render() {
    const opencode = this.props.opencode.split(',')
    return <div className="main-num pull-left">
    <div className="before-issue">11选5&nbsp;&nbsp;第<span className="c-red">{this.props.expect}</span>期号码</div>
    <div className="num-ball">
    
    {
      opencode.map((code, index) => {
        return (
          <div className="lottery-num pull-left" key={index}>{code}</div>
        )
      })
    }
    </div>
  </div>
  }
}

Number.defaultProps = {
  opencode: '00,00,00,00,00',
}

export default Number