var body=document.querySelector("body")

var Ntriangles = document.getElementsByClassName("Ntriangle");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");

var navText=document.getElementsByClassName("navText");
    
var navLogo = document.getElementById("navLogo");

var navWord=document.getElementById("navWord");

var navMode="closed"



Array.from(Ntriangles).forEach(function (element) {
    element.addEventListener("mouseover", function () {
        nav1.style.animation = "nav1a 0.7s forwards 1";
        nav2.style.animation = "nav2a 0.7s forwards 1";
        nav3.style.animation = "nav3a 0.7s forwards 1";
        nav4.style.animation = "nav4a 0.7s forwards 1";
        playHoverSound()
        Array.from(navText).forEach(function (element) {
            element.style.animation = "title 0.5s forwards 1";
        });
        navWord.style.animation = "unTitle 0.7s forwards 1";
        nav2.addEventListener("click", () => {
            playClickSound();
            var delay = setTimeout(() => {
                window.location.href = "projects.html";
            }, 200);
        });
        nav3.addEventListener("click", () => {
            playClickSound();
            var delay = setTimeout(() => {
              window.location.href = "services.html";
            }, 200);
        });
        nav4.addEventListener("click", () => {
            playClickSound();
            var delay = setTimeout(() => {
            window.location.href = "contact.html";
            }, 200);
        });
    });
});


nav1.addEventListener("click",()=>{
    nav1.style.animation = "nav1arev 0.7s forwards 1";
    nav2.style.animation = "nav2arev 0.7s forwards 1";
    nav3.style.animation = "nav3arev 0.7s forwards 1";
    nav4.style.animation = "nav4arev 0.7s forwards 1";
    Array.from(navText).forEach(function (element) {
        element.style.animation = "unTitle 0.7s forwards 1";
    });
    console.log("hi")



    
    navWord.style.animation = "title 1s forwards 1";
    nav2.addEventListener("click", () => {
        playClickSound();
        var delay = setTimeout(() => {
        window.location.href = "home.html";
        }, 200);
    });
    nav3.addEventListener("click", () => {
        playClickSound();
        var delay = setTimeout(() => {
            window.location.href = "home.html";
        }, 200);
    });
    nav4.addEventListener("click", () => {
        playClickSound();
        var delay = setTimeout(() => {
            window.location.href = [];
        }, 200);
    });
})





navLogo.addEventListener("click",()=>{
    playClickSound();
    var delay = setTimeout(() => {
        window.location.href = "index.html";
    }, 200);
});

  

function playHoverSound() {
    hoverSound.currentTime = 0;
    hoverSound.play();
}

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}
// if (navMode=="opened"){
//     body.addEventListener("click", () => {
//         nav1.style.animation = "nav1arev 0.7s forwards 1";
//         nav2.style.animation = "nav2arev 0.7s forwards 1";
//         nav3.style.animation = "nav3arev 0.7s forwards 1";
//         nav4.style.animation = "nav4arev 0.7s forwards 1";
//     });
// } 

