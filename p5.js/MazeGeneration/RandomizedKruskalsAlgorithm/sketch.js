let walls = []
let fixedWalls = []
let cells = []
let cellSize = 25
let start = false
let numberOfCells, numberOfWalls

function setup () {
  createCanvas(501, 501)
  strokeCap(SQUARE)
  width--
  height--

  numberOfCells = width / cellSize
  numberOfWalls = numberOfCells - 1

  for (let i = 0; i < numberOfCells; i++) {
    cells[i] = new Array(numberOfCells)
  }

  for (let x = 0; x < numberOfCells; x++) {
    for (let y = 0; y < numberOfCells; y++) {
      cells[x][y] = new Cell(x, y)
      MakeSet(cells[x][y])
    }
  }

  for (let x = 0; x < numberOfCells; x++) {
    for (let y = 0; y < numberOfCells; y++) {
      if (y != 0) {
        walls.push(new Wall(x, y, x + 1, y))
      }

      if (x != 0) {
        walls.push(new Wall(x, y, x, y + 1))
      }
    }
  }
}

function keyPressed () {
  let SPACEBAR = '32'
  if (keyCode == SPACEBAR) {
    start = true
  }
}

function draw () {
  background(255)

  if (start && walls.length > 0) {
    // Kruskal's algorithm
    let index = floor(random(walls.length))
    let randomWall = walls[index]

    let cellA, cellB

    if (randomWall.startX == randomWall.endX) {
      // vertical
      let indexA = createVector(randomWall.startX, randomWall.startY)
      let indexB = createVector(randomWall.startX - 1, randomWall.startY)
      cellA = cells[indexA.x][indexA.y]
      cellB = cells[indexB.x][indexB.y]
      cellA.visited = true
      cellB.visited = true
    } else {
      // // horizontal
      let indexA = createVector(randomWall.startX, randomWall.startY)
      let indexB = createVector(randomWall.startX, randomWall.startY - 1)
      cellA = cells[indexA.x][indexA.y]
      cellB = cells[indexB.x][indexB.y]
      cellA.visited = true
      cellB.visited = true
    }

    if (Find(cellA) != Find(cellB)) {
      Union(cellA, cellB)
    } else {
      fixedWalls.push(walls[index])
    }

    walls.splice(index, 1)
  }

  // Displaying the cells and walls
  for (let x = 0; x < numberOfCells; x++) {
    for (let y = 0; y < numberOfCells; y++) {
      cells[x][y].show()
    }
  }

  stroke(0)
  line(0, 0, width, 0)
  line(0, 0, 0, height)
  line(width, 0, width, height)
  line(0, height, width, height)

  walls.forEach((wall) => {
    stroke(255)
    wall.show()
  })

  fixedWalls.forEach((wall) => {
    stroke(0)
    wall.show()
  })
}
