import React, {Component} from 'react'

class History extends Component {
  render() {
    return <div className="main-history pull-right">
      <div className="history-tit">期次<span></span>开奖号码</div>
      <div className="history-list">
          <ul>
            {
              this.props.dataList.map((item, index) => {
                let opencodeList = item.opencode;
                opencodeList = opencodeList.replace(/,/g,' ')
                if (index>2){
                  return false;
                }
                return (
                  <li key={index}><span className="pull-left">{item.opentimestamp}</span> <span className="pull-right">{opencodeList}</span></li>
                )
              })
            }
          </ul>
      </div>
    </div>
  }
}

export default History