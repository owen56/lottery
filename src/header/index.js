import { Link, Route, Switch } from 'react-router-dom'
import './index.scss'

import React, {Component} from 'react'
import Notice from './notice'

class Header extends Component {
  render() {
    return <div className="header">
      <div className="header-title">
        <div className="header-title-content">
          <div className="pull-left">
            <Notice/>
          </div>
          <div className="pull-right">
            <span>客户端下载</span>
            <span>在线帮助</span>
            <span>在线客服</span>
          </div>
        </div>
      </div>
      <div className="header-menu">
        <div className="header-menu-content">
          <div className="header-menu-logo pull-left"></div>
          <div className="header-menu-list pull-right">
            <div className="header-menu-list-btn pull-left">
              <Link className="" to="/">我的账户</Link>
            </div>
            <div className="header-menu-list-btn pull-left">
              <Link className="" to="/home">投注记录</Link>
            </div>
            <div className="header-menu-list-btn pull-left">银行充提</div>
            <div className="header-menu-list-btn pull-left">账户报表</div>
            <div className="header-menu-list-btn pull-left">代理管理</div>
            <div className="header-menu-list-btn pull-left">优惠活动</div>
            <div className="header-menu-list-btn pull-left">企业文化</div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Header