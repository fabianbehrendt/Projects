class Wall {
  constructor (startX, startY, endX, endY) {
    this.startX = startX
    this.startY = startY
    this.endX = endX
    this.endY = endY
  }

  show () {
    noFill()
    stroke(0)

    line(this.startX * cellSize, this.startY * cellSize, this.endX * cellSize, this.endY * cellSize)
  }
}
