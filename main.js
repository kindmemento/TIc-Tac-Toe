const board = []

const winningBoard = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [1, 4, 8],
  [2, 4, 6],
]

const players = () => {
  const one = 'X'
  const two = 'O'

  return {one, two}
}

let player = players().one;

const gameBoard = (() => {

  const container = document.createElement('div')
  container.classList.add('container')
  document.body.appendChild(container)

  const boardContainer = document.createElement('div')
  boardContainer.classList.add('board')
  container.appendChild(boardContainer)

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

function checkWinner() {
  if (winningBoard.some(array => {
    return array.every(index => {
      return (board[index] === 'O')
    })
  }) || winningBoard.some(array => {
    return array.every(index => {
      return (board[index] === 'X')
    })
  })) {
    const winningMsg = document.createElement('div')
    const winner = document.createElement('h2')
    const container = document.querySelector('.container')
    const body = document.body
    if (player === 'X') {
      winner.innerText = `O's Win!`
    } else {
      winner.innerText = `X's win!`
    
    }
    winningMsg.classList.add('winner-msg')
    container.classList.add('win')
    body.insertBefore(winningMsg, container)
    winningMsg.appendChild(winner)

    const reload = document.createElement('button')
    reload.classList.add('restart')
    reload.innerText = 'Restart'
    winningMsg.appendChild(reload)

    reload.addEventListener ('click', (e) => {
        const container = document.querySelector('.container')
        container.classList.remove('win')
        winningMsg.remove()
        location.reload()
      })
  }
}