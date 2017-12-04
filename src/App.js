import './App.scss'

import React, {Component} from 'react'

import Header from './header/index'
import Main from './main/index'
import Lottery from './lottery'

class App extends Component {
  constructor () {
    super()
    this.state = { openNumber: '' }
  }
  
  componentDidMount () {

    this.setState({openNumber: '456'})
  }
  render() {
    return <div className="App">
      <Header/>
      <Main/>
      <Lottery a={this.state.openNumber} />
        {/* <img className="App-logo" src={require('./react.svg')}/> */}
    </div>
  }
}

export default App
