class Cell {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.visited = false
  }

  show () {
    noStroke()
    if (this.visited) {
      fill(200)
    } else {
      fill(51)
    }

    rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize)
  }
}
