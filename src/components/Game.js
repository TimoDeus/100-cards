import React, {Component} from 'react'
import {DOWNWARDS_A, DOWNWARDS_B, UPWARDS_A, UPWARDS_B} from '../utils/constants'
import Card from './Card'
import {connect} from 'react-redux'
import {drawCards, playCard} from '../actions/game'
import {drawCardError, playCardError} from '../utils/gameRules'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardsPlayed: 0,
      selected: undefined
    }
  }

  setSelected(card) {
    this.setState({selected: card})
  }

  playCard(stash) {
    const error = playCardError(this.state.selected, stash, this.props[stash])
    if (error) {
      this.setState({error})
    } else {
      this.props.doPlayCard(this.state.selected, stash)
      this.setState(prevState => ({
        cardsPlayed: prevState.cardsPlayed + 1,
        error
      }))
    }
  }

  drawCardHandler() {
    const error = drawCardError(this.state.cardsPlayed, this.props.deckSize)
    if (error) {
      this.setState({error})
    } else {
      this.props.doDrawCards(this.state.cardsPlayed)
      this.setState({cardsPlayed: 0, error})
    }
  }

  isGameOver() {
    return this.state.selected &&
      drawCardError(this.state.cardsPlayed, this.props.cardsLeft) &&
      playCardError(this.state.selected, UPWARDS_A, this.props[UPWARDS_A]) &&
      playCardError(this.state.selected, UPWARDS_B, this.props[UPWARDS_B]) &&
      playCardError(this.state.selected, DOWNWARDS_A, this.props[DOWNWARDS_A]) &&
      playCardError(this.state.selected, DOWNWARDS_B, this.props[DOWNWARDS_B])
  }

  componentDidMount() {
  }

  render() {
    const {game} = this.props
    return game.hand ? (
      this.isGameOver() ? <div>Game over, {game.cardsLeft} cards left.</div> : (
        <div>
          <div>
            {game.stashes.map(stash => <Card onClick={() => this.playCard(stash.name)}>{stash.isUpwards ? '^' : 'v'} {stash.value}</Card>)}
          </div>
          < div>My Hand:</div>
          <div>
            {game.hand.map(card => <Card onClick={() => this.setSelected(card)}>{card}</Card>)}
          </div>
          <div>Played {this.state.cardsPlayed || 'no'} cards this round</div>
          <div>{game.cardsLeft} cards left, {game.deckSize} left on deck</div>
          <button onClick={() => this.drawCardHandler()}>End round</button>
          <div>{this.state.error}</div>
        </div>
      )) : null
  }
}

const mapDispatchToProps = dispatch => ({
  // doPrepareGame: () => dispatch(prepareGame()),
  doPlayCard: (card, stash) => dispatch(playCard(card, stash)),
  doDrawCards: amount => dispatch(drawCards(amount))
})

const mapStateToProps = ({game}) => ({game})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
