import './index.scss'

import React, {Component} from 'react'
import fetchJsonp from 'fetch-jsonp'

import Timer from './timer'
import Number from './number'
import History from './history'

class Main extends Component {

  constructor() {
    super()
    this.state = {
      data: [
        {
          expect: '2017000000',//期号
          opencode: '00,00,00,00,00',//奖号
          opentime: '2017-12-04 00:00:00',//剩余时间
          opentimestamp: '2017000000'//历史奖期
        }
      ]
    }
  }


  fetchDataXhr = () => {
    return fetchJsonp('http://f.apiplus.cn/bj11x5.json', {
      method: 'GET',
      mode: 'cors',
    })
  }

  componentDidMount() {
    this.fetchDataXhr()
      .then(response => response.json())
      .then((json) => {
        console.log(json.data)
        const firstExpect = json.data[0].expect;
        const secondExpect = json.data[1].expect;
        const firstOpentime = json.data[0].opentime.slice(10);
        const secondOpencode = json.data[1].opencode;
        this.setState({
          firstExpect,
          secondExpect,
          firstOpentime,
          secondOpencode,
          data: json.data
        })
      })
  } 
  
  render() {
    return <div className="main">
      <Timer expect={this.state.firstExpect} opentime={this.state.firstOpentime}/>
      <Number expect={this.state.secondExpect} opencode={this.state.secondOpencode}/>
      <History dataList={this.state.data}/>
    </div>
  }
}

export default Main