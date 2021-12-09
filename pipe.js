class Pipe {
  // properties
  constructor(srcImage, yPos) {
    this.image = new Image();
    this.image.src = srcImage;
    this.width = 100;
    this.height = canvas.height * 0.6;
    this.x = canvas.width;
    this.y = yPos;
  }

  // methods

  drawPipe = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  pipeMove = () => {
    this.x -= 2;
  };
}

// to explain parameters in classes
// new Pipe("./images/obstacle_top.png");
// new Pipe("./images/obstacle_bottom.png");
