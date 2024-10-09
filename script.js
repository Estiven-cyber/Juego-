const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;

// Detectar toque en la pantalla (evento touchstart)
document.addEventListener("touchstart", function() {
    if (!isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    dino.classList.add("jumping");
    setTimeout(() => {
        dino.classList.remove("jumping");
        isJumping = false;
    }, 500);
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    // Detectar colisión
    if (cactusLeft > 50 && cactusLeft < 75 && dinoTop <= 50) {
        alert("¡Game Over!");
        cactus.style.animation = "none";
    }
}, 10);
