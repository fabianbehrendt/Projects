class Particle {
  constructor (x, y, vel, exploded) {
    this.pos = createVector(x, y)
    this.vel = vel
    this.exploded = exploded
    this.gravity = this.exploded ? -0.3 : -1
    this.alpha = 255
  }

  show () {
  	fill(this.alpha)

  	if (this.exploded) {
  		strokeWeight(2)
  		this.alpha -= 5
  		this.alpha = constrain(this.alpha, bgColor, 255)
  	} else {
  		strokeWeight(4)
  	}

  	point(this.pos.x, this.pos.y)
  }

  update () {
  	this.vel.y += this.gravity
    this.pos.sub(this.vel)
  }
}
