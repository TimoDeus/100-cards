import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExample } from '../actions/basic'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(fetchExample())
  }

  render () {
    return (
      <div>My React + express boilerplate</div>
    )
  }
}

export default connect()(App)
