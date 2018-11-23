import React, {Component} from 'react'
import {connect} from 'react-redux'
import {storeUsername} from "../actions/user";
import {createRoom} from "../actions/room";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  onTextChange = event => {
    const {value} = event.target
    this.setState({hasError: !value})
    this.props.storeUsername(value)
  }

  onSubmit = () => {
    if (!this.props.username) {
      this.setState({hasError: true})
      return
    }
    this.props.createRoom()
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.username} onChange={this.onTextChange}/>
        {this.state.hasError && <span>Please provide username</span>}
        <button type="submit" onClick={this.onSubmit}>Start new game</button>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  username: user.name || ''
})

const mapDispatchToProps = {
  storeUsername,
  createRoom
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
