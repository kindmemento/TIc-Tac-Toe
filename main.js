const board = []

const players = () => {
  const one = 'X'
  const two = 'O'

  return {one, two}
}

const gameBoard = (() => {

  let player = players().one;

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
      cell.innerText = 'X'
      board[i] = cell.innerText
      player = players().two
      console.log(board[i])
    } else {
      cell.innerText = 'O'
      board[i] = cell.innerText
      player = players().one
      console.log(board[i])
    }

    checkWinner()

  }, {once: true})
  }
})()

const checkWinner = () => {

// Check if X's win.

  if (board[0] === 'X' && board[0] === board[1] && board[1] === board[2]) {
    console.log(`It's a win!`)
  }

  if (board[3] === 'X' && board[3] === board[4] && board[4] === board[5]) {
    console.log(`It's a win!`)
  }

  if (board[6] === 'X' && board[6] === board[7] && board[7] === board[8]) {
    console.log(`It's a win!`)
  }

  if (board[0] === 'X' && board[0] === board[3] && board[3] === board[6]) {
    console.log(`It's a win!`)
  }

  if (board[1] === 'X' && board[1] === board[4] && board[4] === board[7]) {
    console.log(`It's a win!`)
  }

  if (board[2] === 'X' && board[2] === board[5] && board[5] === board[8]) {
    console.log(`It's a win!`)
  }

  if (board[0] === 'X' && board[0] === board[4] && board[4] === board[8]) {
    console.log(`It's a win!`)
  }

  if (board[2] === 'X' && board[2] === board[4] && board[4] === board[6]) {
    console.log(`It's a win!`)
  }

//Check if O's win.
  
  if (board[0] === 'O' && board[0] === board[1] && board[1] === board[2]) {
    console.log(`It's a win!`)
  }

  if (board[3] === 'O' && board[3] === board[4] && board[4] === board[5]) {
    console.log(`It's a win!`)
  }

  if (board[6] === 'O' && board[6] === board[7] && board[7] === board[8]) {
    console.log(`It's a win!`)
  }

  if (board[0] === 'O' && board[0] === board[3] && board[3] === board[6]) {
    console.log(`It's a win!`)
  }

  if (board[1] === 'O' && board[1] === board[4] && board[4] === board[7]) {
    console.log(`It's a win!`)
  }

  if (board[2] === 'O' && board[2] === board[5] && board[5] === board[8]) {
    console.log(`It's a win!`)
  }

  if (board[0] === 'O' && board[0] === board[4] && board[4] === board[8]) {
    console.log(`It's a win!`)
  }

  if (board[2] === 'O' && board[2] === board[4] && board[4] === board[6]) {
    console.log(`It's a win!`)
  }
}