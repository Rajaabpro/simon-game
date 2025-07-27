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
    }, 1000);   
}

function levelUp() {
    level ++;
    h2.innerText = `Level ${level}`;


    let randmIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randmIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randBtn);
    console.log(randColor);
    console.log(randmIdx);
    btnFlash(randBtn);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}



