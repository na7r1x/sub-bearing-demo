
let hud
let submarineX, submarineY

function setup() {
  createCanvas(800, 400);
  background(230)
  submarineX = width * 0.3
  submarineY = height / 2

  hud = new HUD(300, 200)
  sub = new Submarine(submarineX, submarineY, 200, hud)
}

class HUD {
  constructor(w, h) {
    this.w = w
    this.h = h
    this.inRange = []
  }

  register(contact) {
    this.inRange.push(contact)
  }
  
  draw() {
    rect(width - this.w - 10, 10, this.w, this.h)
    fill(200)

  }

}

class Submarine {
  constructor(x, y, r, hud) {
    this.x = x
    this.y = y
    this.r = r
    this.hud = hud
  }
  
  sonarPing() {
    let distance = dist(mouseX, mouseY,this.x,this.y)
    if (
      distance < this.r
    ) {
      this.hud.register({x:mouseX, y:mouseY})
    } else {
    }
    
  }

  draw() {
    fill(230)
    circle(this.x, this.y, this.r)
    fill(200)
    ellipse(this.x, this.y, 20, 50)
    this.sonarPing()
  }
  
  
}



function draw() {
  clear();
  background(200)
  stroke(50)

  hud.draw()
  sub.draw()
  
  fill(230)
  ellipse(mouseX, mouseY, 20, 20)



}