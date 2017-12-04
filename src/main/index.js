import './index.scss'

import React, {Component} from 'react'

import Timer from './timer'
import Number from './number'
import History from './history'

class Main extends Component {
  render() {
    return <div className="main">
      <div className="pull-left">
        <div>第150227479期 离截止时间</div>
        <div>00:18:58</div>
      </div>
      <div className="pull-left">
        <div>11选5 第150227478期号码</div>
        <div>
            <div className="lottery-num pull-left">07</div>
            <div className="lottery-num pull-left">03</div>
            <div className="lottery-num pull-left">04</div>
            <div className="lottery-num pull-left">05</div>
            <div className="lottery-num pull-left">01</div>
        </div>
      </div>
      <div className="pull-right">
        <div>期次 开奖号码</div>
        <div>
            <ul>
                <li>120844 09 01 10 05 02</li>
                <li>120844 09 01 10 05 02</li>
                <li>120844 09 01 10 05 02</li>
            </ul>
        </div>
      </div>
    </div>
  }
}

export default Main