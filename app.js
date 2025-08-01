let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "red", "blue"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);   
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);   
}

function levelUp() {
    userSeq = [];
    level ++;
    h2.innerText = `Level ${level}`;


    let randmIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randmIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randBtn);
    console.log(randColor);
    console.log(randmIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length){
        setTimeout(levelUp, 1000);
    }
  } else {  
    h2.innerHTML = `Game Over! your score is <br> ${level} <br> press any key to restart`;
    document.querySelector("body").classList.add("gameOver");
    setTimeout(function() {
        document.querySelector("body").classList.remove("gameOver");
    }, 1000);
    rest();
  }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    btnFlash(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function rest() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;  
}