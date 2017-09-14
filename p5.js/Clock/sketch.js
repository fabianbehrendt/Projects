let digitHourLeft, digitHourRight, digitMinuteLeft, digitMinuteRight
let currentTime = new Array(4)

function setup () {
  createCanvas(650, 300)
  stroke(255)
  fill(255)

  calculateTime()

  digitHourLeft = new Digit(currentTime[0], 50, 50)
  digitHourRight = new Digit(currentTime[1], 175, 50)
  digitMinuteLeft = new Digit(currentTime[2], 375, 50)
  digitMinuteRight = new Digit(currentTime[3], 500, 50)
}

function draw () {
  background(51)

  calculateTime()

  digitHourLeft.number = currentTime[0]
  digitHourRight.number = currentTime[1]
  digitMinuteLeft.number = currentTime[2]
  digitMinuteRight.number = currentTime[3]

  strokeWeight(5)
  digitHourLeft.show()
  digitHourRight.show()
  digitMinuteLeft.show()
  digitMinuteRight.show()

  if (second() % 2 == 0) {
    strokeWeight(10)
    point(width / 2, height / 2 - 40)
    point(width / 2, height / 2 + 40)
  }
}

function calculateTime () {
  currentTime[0] = hour() < 10 ? 0 : int(hour() / 10)
  currentTime[1] = hour() < 10 ? hour() : int(hour() % 10)
  currentTime[2] = minute() < 10 ? 0 : int(minute() / 10)
  currentTime[3] = minute() < 10 ? minute() : int(minute() % 10)
}
