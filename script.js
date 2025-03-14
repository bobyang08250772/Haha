const imgs = ["autumn", "autum again", "spring comes", "beach", "bird", "book", "parrot", "cat", "twilight", "house", "island", "spring"];

function init() {
    showedImg.style.animation = "ani 1s 1";
    let imgListUl = document.getElementById("img-list");
    imgs.forEach((ele, idx) => {
        imgListUl.innerHTML += `<li><img onclick="showOverlay(event)" src="./img/${ele}.jpg" alt="" idx="${idx}"/></li>`;

    })
}

let currentImg = document.getElementById("current-img"); // 1
let totalImg = document.getElementById("total-img"); // 12
let showedImg = document.getElementById("showed-img");

let imgTitle = document.getElementById("img-title"); // title


totalImg.innerText = imgs.length;

function showOverlay(event) {
    
    let idx = event.target.getAttribute("idx");
    if (idx) {
       
        currentImg.innerText = parseInt(idx) + 1;
        imgTitle.innerText  = imgs[parseInt(idx)];
        showedImg.src = `./img/${imgs[idx]}.jpg`;
    }
    
    let overlay = document.getElementById("overlay");
    overlay.classList.remove("d-none");

    event.stopPropagation();
}

function closeOverlay(event) {
    if (event.target !== event.currentTarget) return;

    let overlay = document.getElementById("overlay");
    overlay.classList.add("d-none");

    event.stopPropagation();
}

function goBack() {
    
    let idx = parseInt(currentImg.innerText) - 1;
    if (idx === 0) idx = 12; 

    currentImg.innerText = idx;
    imgTitle.innerText  = imgs[idx - 1];
    
    showedImg.style.animation = "";
    showedImg.src = `./img/${imgs[idx - 1]}.jpg`;
    void showedImg.offsetWidth;
    showedImg.style.animation = "ani 1s 1";
}

function goForward() {
    let idx = parseInt(currentImg.innerText) + 1;
    
    if (idx === 13) idx = 1; 
    
    currentImg.innerText = idx;
    imgTitle.innerText  = imgs[idx - 1];
    
    showedImg.style.animation = "";
    void showedImg.offsetWidth;
    showedImg.src = `./img/${imgs[idx - 1]}.jpg`;
    showedImg.style.animation = "ani 1s 1";
}