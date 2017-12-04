import './index.scss'

import React, {Component} from 'react'

class Notice extends Component {
  render() {
    return <div className="notice">
    <marquee direction="up" scrollamount="1" scrolldelay="0" loop="-1" width="300" height="20" hspace="5" vspace="5">
    <ul>
      <li>公告：欢迎来到xx娱乐，祝您游戏越快！赚大钱～</li>
      <li>公告：欢迎来到xx娱乐，祝您游戏越快！赚大钱～</li>
      <li>公告：欢迎来到xx娱乐，祝您游戏越快！赚大钱～</li>
      <li>公告：欢迎来到xx娱乐，祝您游戏越快！赚大钱～</li>
      <li>公告：欢迎来到xx娱乐，祝您游戏越快！赚大钱～</li>
    </ul>
    </marquee>
    </div>
  }
}

export default Notice