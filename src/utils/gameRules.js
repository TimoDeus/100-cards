import { UPWARDS_A, UPWARDS_B } from './constants'

export const drawCardError = (cardsPlayedInRound, cardsLeftOnDeck) => {
  const cardsToPlay = cardsLeftOnDeck === 0 ? 1 : 2
  return cardsPlayedInRound < cardsToPlay ? `You need to play at least ${cardsToPlay} cards per round` : null
}
export const playCardError = (selectedCard, selectedStash, stashValue) => {
  if (!selectedCard) {
    return 'Please select a card from your hand'
  }
  const isUpwards = selectedStash === UPWARDS_A || selectedStash === UPWARDS_B
  if (isUpwards && selectedCard < stashValue && selectedCard !== stashValue - 10) {
    return 'You can only play a bigger card on this stash, or reduce amount by exactly 10'
  } else if (!isUpwards && selectedCard > stashValue && selectedCard !== stashValue + 10) {
    return 'You can only play a smaller card on this stash, or increase amount by exactly 10'
  }
}
