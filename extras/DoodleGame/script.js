document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let isGameOver = false;
  let speed = 3;
  let platformCount = 5;
  let platforms = [];
  let score = 0;
  let doodlerLeftSpace = 50;
  let startPoint = 150;
  let doodlerBottomSpace = startPoint;
  const gravity = 0.9;
  let upTimerId;
  let downTimerId;
  let isJumping = true;
  let isGoingLeft = false;
  let isGoingRight = false;
  let leftTimerId;
  let rightTimerId;

  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315; //returns number b/w 0 to 315
      this.bottom = newPlatBottom;
      this.visual = document.createElement("div");

      const visual = this.visual; //this.visual is a div element
      visual.classList.add("platform");
      visual.style.left = this.left + "px"; //adding left pos to visual - random 0 to 315
      visual.style.bottom = this.bottom + "px"; //adding bottom pos to visual - reveived from constructor
      grid.appendChild(visual); //adding the platform to grid
    }
  }

  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      let platGap = 600 / platformCount; //600 is total grid height
      let newPlatBottom = 100 + i * platGap; //bottom pos of each platform
      let newPlatform = new Platform(newPlatBottom); //platform will be created by class
      platforms.push(newPlatform);
      console.log(platforms);
    }
  }

  function movePlatforms() {
    //move only if doodler is above 200
    //doodlerBottomSpace = startPoint
    if (doodlerBottomSpace > 200) {
      platforms.forEach((platform) => {
        // console.log(platform);
        platform.bottom -= 4;
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";
        //for each platform, modify the bottom so that it appears falls down

        if (platform.bottom < 10) {
          //once platform goes offgrid, remove its class and remove from array
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove("platform");
          platforms.shift();
          //   console.log(platforms);
          score++;
          //create new platform at top, add it to array
          var newPlatform = new Platform(600);
          platforms.push(newPlatform);
        }
      });
    }
  }

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doodlerLeftSpace = platforms[0].left; //doodler should start from 1st platform
    doodler.style.left = doodlerLeftSpace + "px";
    doodler.style.bottom = doodlerBottomSpace + "px"; //doodlerBottomSpace = startPoint
  }

  function fall() {
    isJumping = false; //to fall jumping should be false
    clearInterval(upTimerId);
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 5;
      doodler.style.bottom = doodlerBottomSpace + "px";
      if (doodlerBottomSpace <= 0) {
        //when doodler goes off grid
        gameOver();
      }
      platforms.forEach((platform) => {
        if (
          //conditions to check if doodler is on platform
          doodlerBottomSpace >= platform.bottom &&
          doodlerBottomSpace <= platform.bottom + 15 &&
          doodlerLeftSpace + 60 >= platform.left &&
          doodlerLeftSpace <= platform.left + 85 &&
          !isJumping
        ) {
          console.log("tick");
          startPoint = doodlerBottomSpace;
          jump();
          console.log("start", startPoint);
          isJumping = true;
        }
      });
    }, 20);
  }

  function jump() {
    clearInterval(downTimerId);
    isJumping = true;
    upTimerId = setInterval(function () {
      console.log(startPoint);
      console.log("1", doodlerBottomSpace);
      doodlerBottomSpace += 20; //add 20px to bottom of doodler from startpoint
      doodler.style.bottom = doodlerBottomSpace + "px";
      console.log("2", doodlerBottomSpace);
      console.log("s", startPoint);
      if (doodlerBottomSpace > startPoint + 200) {
        fall();
        isJumping = false;
      }
    }, 30);
  }

  function moveLeft() {
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      if (doodlerLeftSpace >= 0) {
        //if to avaoid going off grid
        //let doodlerLeftSpace = 50; initially
        console.log("going left");
        doodlerLeftSpace -= 5;
        doodler.style.left = doodlerLeftSpace + "px";
      } else moveRight();
    }, 20);
  }

  function moveRight() {
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function () {
      //changed to 313 to fit doodle image
      if (doodlerLeftSpace <= 313) {
        //if to avaoid going off grid
        console.log("going right");
        doodlerLeftSpace += 5; //adding 5px to left , to move right
        doodler.style.left = doodlerLeftSpace + "px";
      } else moveLeft();
    }, 20);
  }

  function moveStraight() {
    isGoingLeft = false;
    isGoingRight = false;
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  //assign functions to keyCodes
  function control(e) {
    doodler.style.bottom = doodlerBottomSpace + "px";
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      moveStraight();
    }
  }

  function gameOver() {
    isGameOver = true;
    //removing all child if game is over
    while (grid.firstChild) {
      console.log("remove");
      grid.removeChild(grid.firstChild);
    }
    grid.innerHTML = score;
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function start() {
    if (!isGameOver) {
      //create platform, doodler, move platform, jump from startpoint
      createPlatforms();
      createDoodler();
      setInterval(movePlatforms, 30);
      jump(startPoint);
      document.addEventListener("keyup", control);
    }
  }
  start();
});
