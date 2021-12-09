class Game {
  // properties
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.bird = new Bird();
    this.pipeArr = [new Pipe("./images/obstacle_top.png", 0)];
    this.gapBetweenPipes = 150;
    this.pipeAppearingDistance = 350;
    this.isGameOver = false;
  }

  // methods

  gameOver = () => {
    // stop the game
    this.isGameOver = true;

    // hide canvas
    canvas.style.display = "none";

    // show restart page
    gameoverScreen.style.display = "flex";
  };

  spawnPipes = () => {
    let lastIndex = this.pipeArr.length - 1;
    let lastPipe = this.pipeArr[lastIndex];
    // when do we add a new pipe
    // how do we add a new pipe

    if (lastPipe.x === this.pipeAppearingDistance) {
      // * get a random number and assign it to yPos
      let randomPosYTop = (Math.random() * -canvas.height) / 3; // 0 - 1
      let pipeTop = new Pipe("./images/obstacle_top.png", randomPosYTop);
      this.pipeArr.push(pipeTop);

      // * add the bottom pipe
      let randomPosYBottom =
        randomPosYTop + pipeTop.height + this.gapBetweenPipes;
      let pipeBottom = new Pipe(
        "./images/obstacle_bottom.png",
        randomPosYBottom
      );
      this.pipeArr.push(pipeBottom);
    }
    // set intervals will work, but it won't be the most efficient way
  };

  gameLoop = () => {
    // * 1. clear the canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // * 2. movement and changes on elements

    this.bird.birdGravity();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMove();
    });
    this.spawnPipes();
    // we are looping through each pipe and checking for a collision
    this.pipeArr.forEach((eachPipe) => {
      if (this.bird.birdPipeCollision(eachPipe)) {
        this.gameOver();
      } // returns either true or false
    });

    // this.pipe.pipeMove(); -> this won't work after we set the pipe to an array

    // * 3. drawing the elements

    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.bird.drawBird();
    // this.pipe.drawPipe();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });
    // * 4. animation frame and game logic changes

    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
