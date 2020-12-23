let font
let points

function preload() {
  font = loadFont('Souvenirstd.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  points = font.textToPoints('Open Studio', 130, 330, 130, {
    sampleFactor: 5,
    simplifyThreshold: 0
  })
}

function draw() {
  background('#FEFBEC')
  fill('#E23B02')
  noStroke()

  points.forEach(point => {
    const distance = createVector(point.x - mouseX, point.y - mouseY)
    const distortion = distance.mult(60 / distance.mag())

    circle(point.x + distortion.x, point.y + distortion.y, 2)
  })
}
