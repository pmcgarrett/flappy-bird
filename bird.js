class Bird {
  // properties
  constructor() {
    this.birdImage = new Image();
    this.birdImage.src = "./images/flappy.png";
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 6;
    this.y = canvas.height / 2;
    this.birdSpeed = 20;
  }

  // methods

  drawBird = () => {
    ctx.drawImage(this.birdImage, this.x, this.y, this.width, this.height);
  };

  birdGravity = () => {
    this.y++;
  };

  birdJump = () => {
    this.y -= this.birdSpeed;
  };

  birdPipeCollision = (singlePipe) => {
    // check if bird collides with one pipe

    if (
      this.x < singlePipe.x + singlePipe.width &&
      this.x + this.width > singlePipe.x &&
      this.y < singlePipe.y + singlePipe.height &&
      this.height + this.y > singlePipe.y
    ) {
      return true;
      // cause the game to end
      // create boolean for the game end and trigger
    } else {
      return false;
    }

    // also check on requestAnimationFrame
  };
}
