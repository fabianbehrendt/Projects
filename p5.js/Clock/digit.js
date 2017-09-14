class Digit {
  constructor (number, x, y) {
    this.number = number
    this.x = x
    this.y = y
    this.lineLength = 100
    this.offset = 10
  }

  show () {
  	switch (this.number) {
  		case 0:
  			this.drawUpper()
  			this.drawUpperLeft()
  			this.drawUpperRight()
  			this.drawLowerLeft()
  			this.drawLowerRight()
  			this.drawLower()
  			break

  		case 1:
  			this.drawUpperRight()
  			this.drawLowerRight()
  			break

  		case 2:
  			this.drawUpper()
  			this.drawUpperRight()
  			this.drawMiddle()
  			this.drawLowerLeft()
  			this.drawLower()
  			break

  		case 3:
	  		this.drawUpper()
	  		this.drawUpperRight()
	  		this.drawMiddle()
	  		this.drawLowerRight()
	  		this.drawLower()
  			break

  		case 4:
  			this.drawUpperLeft()
  			this.drawMiddle()
  			this.drawUpperRight()
  			this.drawLowerRight()
  			break

  		case 5:
  			this.drawUpper()
  			this.drawUpperLeft()
  			this.drawMiddle()
  			this.drawLowerRight()
  			this.drawLower()
  			break

  		case 6:
  			this.drawUpper()
  			this.drawUpperLeft()
  			this.drawLowerLeft()
  			this.drawLower()
  			this.drawLowerRight()
  			this.drawMiddle()
  			break

  		case 7:
  			this.drawUpper()
  			this.drawUpperRight()
  			this.drawLowerRight()
  			break

  		case 8:
  			this.drawUpper()
  			this.drawUpperLeft()
  			this.drawUpperRight()
  			this.drawMiddle()
  			this.drawLowerLeft()
  			this.drawLowerRight()
  			this.drawLower()
  			break

  		case 9:
  		this.drawUpper()
  		this.drawUpperLeft()
  		this.drawUpperRight()
  		this.drawMiddle()
  		this.drawLowerRight()
  		this.drawLower()
  			break
  	}
  }

  drawUpper () {
  	line(this.x + this.offset, this.y, this.x + this.lineLength - this.offset, this.y)
  }

  drawUpperLeft () {
  	line(this.x, this.y + this.offset, this.x, this.y + this.lineLength - this.offset)
  }

  drawUpperRight () {
  	line(this.x + this.lineLength, this.y + this.offset, this.x + this.lineLength, this.y + this.lineLength - this.offset)
  }

  drawMiddle () {
  	line(this.x + this.offset, this.y + this.lineLength, this.x + this.lineLength - this.offset, this.y + this.lineLength)
  }

  drawLowerLeft () {
  	line(this.x, this.y + this.lineLength + this.offset, this.x, this.y + this.lineLength * 2 - this.offset)
  }

  drawLowerRight () {
  	line(this.x + this.lineLength, this.y + this.lineLength + this.offset, this.x + this.lineLength, this.y + this.lineLength * 2 - this.offset)
  }

  drawLower () {
  	line(this.x + this.offset, this.y + this.lineLength * 2, this.x + this.lineLength - this.offset, this.y + this.lineLength * 2)
  }
}
