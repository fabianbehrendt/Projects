class Cell {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.walls = {n: true, e: true, s: true, w: true}
    this.start = false
    this.visited = false
    this.current = false
  }

  show () {
    let cellColor = {r: NaN, g: NaN, b: NaN}

    if (this.visited) {
      if (this.current) {
        cellColor = {r: 100, g: 155, b: 155}
      } else {
        cellColor = {r: 155, g: 155, b: 100}
      }

      fill(cellColor.r, cellColor.g, cellColor.b)

      noStroke()
      rect(
        this.x * cellSize,
        this.y * cellSize,
        cellSize,
        cellSize
        )
    }

    stroke(0)
    strokeWeight(3)

    if (this.walls.n) {
      line(
        this.x * cellSize,
        this.y * cellSize,
        this.x * cellSize + cellSize,
        this.y * cellSize
        )
    }

    if (this.walls.e) {
      line(
        this.x * cellSize + cellSize,
        this.y * cellSize,
        this.x * cellSize + cellSize,
        this.y * cellSize + cellSize
        )
    }

    if (this.walls.s) {
      line(
        this.x * cellSize,
        this.y * cellSize + cellSize,
        this.x * cellSize + cellSize,
        this.y * cellSize + cellSize
        )
    }

    if (this.walls.w) {
      line(
        this.x * cellSize,
        this.y * cellSize,
        this.x * cellSize,
        this.y * cellSize + cellSize
        )
    }
  }
}
