export const shuffle = array => {
  let counter = array.length
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter)
    counter--
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

export const range = (start, end) => [...Array(1 + end - start).keys()].map(v => start + v)

export const getInitialDeck = () => shuffle(range(2, 99))

export const drawFromDeck = (deck, amount) => {
  const result = []
  for (let i = 0; i < amount; i++) {
    result.push(deck.pop())
  }
  return result
}
