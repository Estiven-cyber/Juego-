const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;

let playerX = (gameWidth / 2) - 25;
let lasers = [];
let invaders = [];
let enemyLasers = [];  // Nuevo array para disparos enemigos
let invaderSpeed = 1;
let invaderDirection = 1;
let invaderTimer = 0;

document.addEventListener('keydown', movePlayer);
document.addEventListener('keydown', shootLaser);

function movePlayer(e) {
    if (e.key === 'ArrowLeft' && playerX > 0) {
        playerX -= 20;
    } else if (e.key === 'ArrowRight' && playerX < gameWidth - 50) {
        playerX += 20;
    }
    player.style.left = `${playerX}px`;
}

function shootLaser(e) {
    if (e.key === ' ') {
        const laser = document.createElement('div');
        laser.classList.add('laser');
        laser.style.left = `${playerX + 22.5}px`;
        laser.style.bottom = '60px';
        gameArea.appendChild(laser);
        lasers.push(laser);
    }
}

function createInvaders() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            const invader = document.createElement('div');
            invader.classList.add('invader');
            invader.style.left = `${i * 100 + 50}px`;
            invader.style.top = `${j * 60 + 10}px`;
            gameArea.appendChild(invader);
            invaders.push(invader);
        }
    }
}

function updateLasers() {
    lasers.forEach((laser, index) => {
        let laserBottom = parseInt(laser.style.bottom);
        laser.style.bottom = `${laserBottom + 10}px`;

        if (laserBottom > gameHeight) {
            laser.remove();
            lasers.splice(index, 1);
        }

        // Colisión con los invasores
        invaders.forEach((invader, invaderIndex) => {
            let laserRect = laser.getBoundingClientRect();
            let invaderRect = invader.getBoundingClientRect();

            if (
                laserRect.left < invaderRect.right &&
                laserRect.right > invaderRect.left &&
                laserRect.top < invaderRect.bottom &&
                laserRect.bottom > invaderRect.top
            ) {
                invader.remove();
                invaders.splice(invaderIndex, 1);
                laser.remove();
                lasers.splice(index, 1);
            }
        });
    });
}

// Nuevo: disparos enemigos
function shootEnemyLaser() {
    if (invaders.length > 0) {
        const randomInvaderIndex = Math.floor(Math.random() * invaders.length);
        const invader = invaders[randomInvaderIndex];

        const laser = document.createElement('div');
        laser.classList.add('laser');
        laser.style.backgroundColor = 'yellow';
        laser.style.left = `${parseInt(invader.style.left) + 20}px`;
        laser.style.top = `${parseInt(invader.style.top) + 40}px`;
        gameArea.appendChild(laser);
        enemyLasers.push(laser);
    }
}

// Nuevo: actualizar los disparos enemigos
function updateEnemyLasers() {
    enemyLasers.forEach((laser, index) => {
        let laserTop = parseInt(laser.style.top);
        laser.style.top = `${laserTop + 5}px`;

        if (laserTop > gameHeight) {
            laser.remove();
            enemyLasers.splice(index, 1);
        }

        let laserRect = laser.getBoundingClientRect();
        let playerRect = player.getBoundingClientRect();

        if (
            laserRect.left < playerRect.right &&
            laserRect.right > playerRect.left &&
            laserRect.top < playerRect.bottom &&
            laserRect.bottom > playerRect.top
        ) {
            alert("¡Has sido impactado! Fin del juego.");
            document.location.reload();
        }
    });
}

function updateInvaders() {
    invaders.forEach((invader, index) => {
        let invaderX = parseInt(invader.style.left);
        invader.style.left = `${invaderX + invaderSpeed * invaderDirection}px`;

        if (invaderX > gameWidth - 50 || invaderX < 0) {
            invaderDirection *= -1;
            invader.style.top = `${parseInt(invader.style.top) + 20}px`;
        }
    });
}

let enemyShootInterval = 0;  // Contador para la frecuencia de disparo

function gameLoop() {
    updateLasers();
    updateInvaders();
    updateEnemyLasers();  // Actualizar disparos enemigos

    invaderTimer++;
    if (invaderTimer > 100) {
        createInvaders();
        invaderTimer = 0;
    }

    enemyShootInterval++;
    if (enemyShootInterval > 50) {  // Frecuencia de disparos enemigos
        shootEnemyLaser();
        enemyShootInterval = 0;
    }

    requestAnimationFrame(gameLoop);
}

createInvaders();
gameLoop();
