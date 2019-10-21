class Block {
  constructor(controller) {
    this.size = 40;
    this.offset = rnd(0, controller.canvas.width - this.size);
    this.color = "hsl(" + rnd(0, 360) + ", 60%, 50%";
    this.speed = rnd(5, 30);
    this.altitude = controller.canvas.height;
    this.controller = controller;
    setTimeout(this.fall.bind(this), this.speed);
  }
  fall() {
    this.altitude--;
    if (this.altitude > 0 && !this.dead) setTimeout(this.fall.bind(this), this.speed)
    else {
      const i = this.controller.blocks.indexOf(this)
      this.controller.blocks.splice(i, 1) 
    }
  } 
  delete() {
    this.dead = true;
  }
}

