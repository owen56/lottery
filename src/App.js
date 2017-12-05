import { Link, Route, Switch } from 'react-router-dom'
import './App.scss'

import React, {Component} from 'react'

import Header from './header/index'
import Main from './main/index'
import Home from './main/home'

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
      <Switch>
        <Route path='/lottery' component={Main} exact={true} />
        <Route path='/' component={Home} exact={true} />
      </Switch>
      {/* <img className="App-logo" src={require('./react.svg')}/> */}
    </div>
  }
}

export default App
