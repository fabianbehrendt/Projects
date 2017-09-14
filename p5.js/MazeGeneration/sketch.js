let grid = []
let stack = []
let numberOfCells = 32
let cellSize, currentCell
let startIndex = {x: NaN, y: NaN}
let inputField
let numberOfCellsChanged = false

function setup () {
  createCanvas(1025, 1025)
  width -= 1
  height -= 1

  createP('Enter the number of cells per row/column:')
  inputField = createInput(numberOfCells, 'number')
  inputField.input(() => {
    numberOfCells = inputField.elt.value
    currentCell = null
    stack = []
    startIndex = {x: NaN, y: NaN}
    numberOfCellsChanged = true
  })

  cellSize = width / numberOfCells

  for (let i = 0; i < numberOfCells; i++) {
    grid[i] = new Array(numberOfCells)
  }

  for (let x = 0; x < numberOfCells; x++) {
    for (let y = 0; y < numberOfCells; y++) {
      grid[x][y] = new Cell(x, y, cellSize)
    }
  }
}

function mouseClicked () {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && !startIndex.x && !startIndex.y) {
    startIndex.x = int(mouseX / cellSize)
    startIndex.y = int(mouseY / cellSize)

    grid[startIndex.x][startIndex.y].current = true
    grid[startIndex.x][startIndex.y].visited = true
  }
}

function draw () {
  background(255)

  if (numberOfCellsChanged) {
    cellSize = width / numberOfCells

    for (let i = 0; i < numberOfCells; i++) {
      grid[i] = new Array(numberOfCells)
    }

    for (let x = 0; x < numberOfCells; x++) {
      for (let y = 0; y < numberOfCells; y++) {
        grid[x][y] = new Cell(x, y, cellSize)
      }
    }

    numberOfCellsChanged = false
  }

  let unvisitedCellsLeft = false

  for (let x = 0; x < numberOfCells; x++) {
    for (let y = 0; y < numberOfCells; y++) {
      let current = grid[x][y]
      current.show()

      if (!current.visited) {
        unvisitedCellsLeft = true
      }

      if (current.current) {
        currentCell = current
      }
    }
  }

  if (unvisitedCellsLeft && currentCell) {
    let unvisitedNeighbours = getUnvisitedNeighbours(currentCell)

    if (unvisitedNeighbours.length > 0) {
      let neighbour = random(unvisitedNeighbours)

      stack.push(neighbour)
      removeWalls(currentCell, neighbour)

      currentCell.current = false
      currentCell = neighbour
      currentCell.current = true
      currentCell.visited = true
    } else if (stack.length > 0) {
      let current = stack.pop()
      currentCell.current = false
      current.current = true
    }
  } else if (currentCell) {
    currentCell.current = false
    currentCell = null
    stack = []
  }
}

function removeWalls (cell1, cell2) {
  if (cell1.x < cell2.x) {
    cell1.walls.e = false
    cell2.walls.w = false
  } else if (cell1.x > cell2.x) {
    cell1.walls.w = false
    cell2.walls.e = false
  }

  if (cell1.y < cell2.y) {
    cell1.walls.s = false
    cell2.walls.n = false
  } else if (cell1.y > cell2.y) {
    cell1.walls.n = false
    cell2.walls.s = false
  }
}

function getUnvisitedNeighbours (cell) {
  let neighbours = []

  if (cell.x > 0) {
    if (!grid[cell.x - 1][cell.y].visited) {
      neighbours.push(grid[cell.x - 1][cell.y])
    }
  }

  if (cell.x < numberOfCells - 1) {
    if (!grid[cell.x + 1][cell.y].visited) {
      neighbours.push(grid[cell.x + 1][cell.y])
    }
  }

  if (cell.y > 0) {
    if (!grid[cell.x][cell.y - 1].visited) {
      neighbours.push(grid[cell.x][cell.y - 1])
    }
  }

  if (cell.y < numberOfCells - 1) {
    if (!grid[cell.x][cell.y + 1].visited) {
      neighbours.push(grid[cell.x][cell.y + 1])
    }
  }

  return neighbours
}
