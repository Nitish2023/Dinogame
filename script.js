let dino = document.getElementById("dino")
let cactus = document.getElementById("cactus")
let fly = document.getElementById("fly")
let road = document.getElementById("road")
let body = document.getElementById("body")
let score = document.getElementById("score")
let gameover = document.getElementById("gameover")
let highscore = document.getElementById("highscore")


let interval = null;
let playerScore = 0;


let scoreCounter = () => {
  playerScore++;
  score.innerHTML = `score <b>${playerScore}</b>`;
};

window.addEventListener("keydown", (start) => {
  //  console.log(start);
  if (start.code == "Enter") {
    gameover.style.display = "none";
    cactus.classList.add("cactusActive");
    fly.classList.add("flyActive");
    body.classList.add("back");
    road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
    document.getElementById("dimg").src = "dino.gif";
    document.getElementById("fimg").src = "fly.gif";
    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);


  }
});

window.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key == " ")
    if (dino.classList != "dinoActive") {

      dino.classList.add("dinoActive");
      setTimeout(() => {
        dino.classList.remove("dinoActive");
      }, 500);
    }

});
window.addEventListener("keydown", (play) => {
  // console.log(play);
  if (play.code == "Enter") {
    document.getElementById("song").play();
  }
});


let isAlive = setInterval(function () {

  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));


  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  let flyLeft = parseInt(
    window.getComputedStyle(fly).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 240 || flyLeft < 60 && flyLeft > 0 && dinoTop >= 240) {
    // collision
    //  alert("Game Over!");
    // let highestScore = 0;

    gameover.style.display = "block";
    cactus.classList.remove("cactusActive");
    fly.classList.remove("flyActive");
    road.firstElementChild.style.animation = "none";
    document.getElementById("song").pause();
    clearInterval(interval);
    playerScore = 0;
//     cactus.style.animationDuration = "4s";
    document.getElementById("dimg").src = "loser.png";
    document.getElementById("fimg").src = "fly.png";

  }
}, 10);




setInterval(() => {
  var cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // var flyLeft = parseInt(
  //   window.getComputedStyle(fly).getPropertyValue("left")
  // );


  if (cactusLeft < 10) {

    aniDur = parseFloat(window.getComputedStyle(cactus).getPropertyValue('animation-duration'));

    // bDur = bDur + 0.1;
    newDur = aniDur - .05;
    cactus.style.animationDuration = newDur + 's';

    console.log(newDur);
  }

}, 2000);





