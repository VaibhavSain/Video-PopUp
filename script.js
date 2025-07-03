const btn = document.querySelector(".btn");
const video = document.querySelector(".video");
const main = document.querySelector('#main');
const body = document.querySelector("body");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
    show();
})
closeBtn.addEventListener("click",() => {
    hide();
})

function hide() {
    main.style.display = "block";
    body.style.height = "";
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;
    closeBtn.style.display = "none";
}

function show() {
    main.style.display = "none";
    body.style.height = "100vh";
    video.style.display = "block";
    video.play();
    closeBtn.style.display = "block";
}


