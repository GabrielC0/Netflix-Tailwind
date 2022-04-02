// Ramdom list
let myListImgArray = [
    "./assets/img/img-main/my-list/breaking-bad.jpg",
    "./assets/img/img-main/my-list/hunter-x-hunter.jpg",
    "./assets/img/img-main/my-list/my-hero-academia.jpg",
    "./assets/img/img-main/my-list/narco.jpg",
    "./assets/img/img-main/my-list/oats.jpg",
    "./assets/img/img-main/my-list/south-spark.jpg",
    "./assets/img/img-main/my-list/paradise-police.jpg",
    "./assets/img/img-main/my-list/final-space.jpg",
    "./assets/img/img-main/my-list/enough.jpg",
    "./assets/img/img-main/my-list/ciel-sassombrit.jpg"
];

// Scroll
window.addEventListener('scroll', (e) => {
    let navbar = document.getElementById('navbar')
    if (window.scrollY > 100) {
        navbar.classList.add('bg-[#141414]')
    } else {
        navbar.classList.remove('bg-[#141414]')
    }
})

// fleches
function goRight(container) {
    document.getElementById(container).scrollLeft += document.getElementById(container).offsetWidth;
};
function goLeft(container) {
    document.getElementById(container).scrollLeft -= document.getElementById(container).offsetWidth;
};

// BA 
function mouseEnter(btnLeft, btnRight){
    document.getElementById(btnLeft).style.display = "flex";
    document.getElementById(btnRight).style.display = "flex";
}

function mouseLeave(btnLeft, btnRight){
    document.getElementById(btnLeft).style.display = "none";
    document.getElementById(btnRight).style.display = "none";
}

// Ramdom
window.onload = randomImage();

function randomImage() {

    let myListImg = myListImgArray.slice()
    for(let i = 0; i < 10; i++){

        let randomNum = Math.floor(Math.random() * (myListImg.length));
        document.getElementById(`img-slide-my-list${i}`).src = myListImg[randomNum];



    }

}

// Plau pause
function play(video) {

    document.querySelector(video).classList.add("z-[2]")

    document.querySelector(video).play()

}

function pause(video) {

    document.querySelector(video).pause()

    document.querySelector(video).classList.remove("z-[2]")

}

// mute
function toggleMuted(elm) {

    let video = document.querySelector(elm)

    video.muted = !video.muted;
}

// ---------------BA section : 1-----------------

const BaS = document.getElementById("BaS")
const BaSImg = document.getElementById('img-slide-my-list0')

function activeBaS(){

    BaSImg.style.display = "none"
    BaS.style.display = "block";
    BaS.play()

}

function desactiveBaS(){
    BaSImg.style.display = "block"
    BaS.style.display = "none"
    BaS.pause()
}

// ---------------BA section : 2-----------------
const BaS2 = document.getElementById("BaS2")
const BaS2Img = document.getElementById('img-slide-my-list1')

function activeBaS2(){

    BaS2Img.style.display = "none"
    BaS2.style.display = "block";
    BaS2.play()

}

function desactiveBaS2(){
    BaS2Img.style.display = "block"
    BaS2.style.display = "none"
    BaS2.pause()
}

// ---------------BA section : 3-----------------
const BaS3 = document.getElementById("BaS3")
const BaS3Img = document.getElementById('img-slide-my-list2')

function activeBaS3(){

    BaS3Img.style.display = "none"
    BaS3.style.display = "block";
    BaS3.play()

}

function desactiveBaS3(){
    BaS3Img.style.display = "block"
    BaS3.style.display = "none"
    BaS3.pause()
}

const account = document.getElementById("btn-account");
const divAccount = document.getElementById("div-account");


account.addEventListener("mouseover", () => {
    divAccount.style.display = "block"
})

divAccount.addEventListener("mouseover", () => {
    divAccount.style.display = "block"
})

divAccount.addEventListener("mouseout", () => {
    divAccount.style.display = "none"
})

