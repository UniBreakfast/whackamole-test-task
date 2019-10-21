class Controller {
  constructor(canvas) {
    this.canvas = canvas.link;
    this.context = this.canvas.getContext('2d');
    this.blocks = [];
    this.timer = 0;
    this.interval = 0;
  }

  createBlock() {
    this.blocks.push(new Block(this));
    this.timer = setTimeout(this.createBlock.bind(this), rnd(300,700));
  }

  start() {
    this.interval = setInterval(this.animate.bind(this), 40);
    this.createBlock();
  }

  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  }

  animate() {
    this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientWidth);
    this.blocks.forEach(block => {
      this.context.fillStyle = block.color;
      this.context.fillRect(block.offset, this.canvas.height - block.altitude, block.size, block.size);
    });
  

    requestAnimationFrame(this.animate.bind(this));
  }
}

let controller = new Controller(_canvas);

controller.start();