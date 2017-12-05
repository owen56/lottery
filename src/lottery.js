import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import moment from 'moment'

import './index.scss'

import Timer from './Timer'
import OpenNumber from './OpenNumber'
import OpenRecord from './OpenRecord'

class Lottery extends Component {
  constructor() {
    super()
    this.state = {
      openNumber: '',
      lastLottery: {},
      lotteryList: []
    }
  }

  fetchDataXhr = () => {
    return fetchJsonp('http://f.apiplus.cn/bj11x5.json', {
      method: 'GET',
      headers: {
      },
      mode: 'cors',
    })
  }

  componentDidMount() {
    this.fetchDataXhr()
      .then(response => response.json())
      .then((json) => { 
        // expect: "2017120484" // 期號
        // opencode:"11,04,05,08,01" // 開獎號碼
        // opentime:"2017-12-04 22:51:00" // 
        // opentimestamp: 1512399060 // 歷史獎期
        console.log(json.data)
        const dataList = json.data
        const expect = dataList[0].expect
        const opencode = dataList[0].opencode.split(",")
        const opentime = dataList[0].opentime
        const opentimestamp = dataList[0].opentimestamp
        this.setState({
          lastLottery: {
            expect,
            opencode,
            opentime,
            opentimestamp,
          },
          lotteryList: dataList
        })
      })
  }

  render() {
    return (
      <div>
        <div className='lottery-container'>
          <div className='lottery-opentime-container'>
            <Timer 
              opentime={moment(this.state.lastLottery.opentime).format('HH:mm:ss')} 
              expect={this.state.lastLottery.expect}
            />
          </div>
          <div className="lottery-opennumber-container">
            <OpenNumber
              opencode={this.state.lastLottery.opencode}
            />
          </div>
          <div className="lottery-openrecord-container">
            <OpenRecord
              lotteryList={this.state.lotteryList}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Lottery