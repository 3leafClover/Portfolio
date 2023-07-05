var body = document.getElementById("body");
var logo = document.getElementById("mainLogo");
var tri1 = document.getElementById("tri1");
var tri2 = document.getElementById("tri2");
var tri3 = document.getElementById("tri3");
var tri4 = document.getElementById("tri4");
var title = document.querySelector(".title");
var triTitles = document.querySelectorAll(".triTitles, p");
var triangles = document.querySelectorAll(".triangle");
var hoverSound = document.getElementById("hoverSound");

var Ntriangles =  document.getElementsByClassName("Ntriangle")
var nav1 = document.getElementById("nav1")
var nav2 = document.getElementById("nav2")
var nav3 = document.getElementById("nav3")
var nav4 = document.getElementById("nav4")


function loaded() {
  logo.style.animation = "mainLogoAnimation 2s forwards 1";
  tri1.style.animation = "tri1a 5s forwards 1";
  tri2.style.animation = "tri2a 5s forwards 1";
  tri3.style.animation = "tri3a 5s forwards 1";
  tri4.style.animation = "tri4a 5s forwards 1";
  title.style.animation = "title 6s forwards 1";
  triTitles.forEach(function (element) {
    element.style.animation = "title 7s forwards 1";
  });
}

triangles.forEach(function (element) {
  element.addEventListener("mouseover", () => {
    element.style.animation = "triHover 0.5s forwards 1";
    playHoverSound();
  });
});

triangles.forEach(function (element) {
  element.addEventListener("mouseleave", () => {
    element.style.animation = "triUnHover 0.5s forwards 1";
  });
});

function playHoverSound() {
  hoverSound.currentTime = 0;
  hoverSound.play();
}

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}


tri1.addEventListener("click", () => {
  playClickSound();
  var delay = setTimeout(() => {
    window.location.href = "home.html";
  }, 200);
});
tri2.addEventListener("click", () => {
  playClickSound();
  var delay = setTimeout(() => {
    window.location.href = "projects.html";
  }, 200);
});
tri3.addEventListener("click", () => {
  playClickSound();
  var delay = setTimeout(() => {
    window.location.href = "services.html";
  }, 200);
});
tri4.addEventListener("click", () => {
  playClickSound();
  var delay = setTimeout(() => {
    window.location.href = "contact.html";
  }, 200);
});


logo.addEventListener("click",()=>{
  location.reload()
})



nav1.addEventListener("click",()=> {
  console.log("hi")
  nav1.style.animation = "nav1a 0.5s forwards 1";
  nav2.style.animation = "nav2a 0.5s";
  nav3.style.animation = "nav3a 0.5s";
  nav4.style.animation = "nav4a 0.5s";
});