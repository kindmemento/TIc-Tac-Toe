const players = () => {
  const one = 'X'
  const two = 'O'

  return {one, two}
}

let player = players().one;

const gameBoard = (() => {

  const board = [
    '', '', '', '', '', '', '', '', ''
  ]

  const boardContainer = document.createElement('div')
  boardContainer.classList.add('board')
  document.body.appendChild(boardContainer)

  for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cell.id = i
  boardContainer.appendChild(cell)

  cell.addEventListener ('click', (e) => {
    if (player === players().one) {
      board[i] = 'X'
      cell.innerText = board[i]
      player = players().two
    } else {
      board[i] = 'O'
      cell.innerText = board[i]
      player = players().one
    }
  }, {once: true})
  }

  return {board}

})()