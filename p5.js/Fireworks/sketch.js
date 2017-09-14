let particles = []
let bgColor = 100

function setup () {
  createCanvas(512, 512)
}

function draw () {
  background(bgColor)

  if (random() < 0.05) {
  	let vel = createVector(0, random(20, 30))
    let particle = new Particle(random(width), height, vel, false)
    particles.push(particle)
  }

  for (i = particles.length - 1; i >= 0; i--) {
  	if (particles[i].vel.y <= 0 && !particles[i].exploded) {
  		for (j = 0; j < 100; j++) {
  			let vel = createVector(random(-1, 1), random(-1, 1)).mult(random(4, 7))
  			particles.push(new Particle(particles[i].pos.x, particles[i].pos.y, vel, true))
  		}

  		particles.splice(i, 1)
  	}

  	particles[i].update()
  	particles[i].show()

  	if (particles[i].exploded && particles[i].alpha <= bgColor) {
  		particles.splice(i, 1)
  	}
  }
}
