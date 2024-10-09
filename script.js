const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;

let playerX = (gameWidth / 2) - 25;
let lasers = [];
let invaders = [];
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

        // Remove lasers that leave the game area
        if (laserBottom > gameHeight) {
            laser.remove();
            lasers.splice(index, 1);
        }
    });
}

function updateInvaders() {
    invaders.forEach((invader, index) => {
        let invaderX = parseInt(invader.style.left);
        invader.style.left = `${invaderX + invaderSpeed * invaderDirection}px`;

        // Change direction if invaders hit the edge
        if (invaderX > gameWidth - 50 || invaderX < 0) {
            invaderDirection *= -1;
            invader.style.top = `${parseInt(invader.style.top) + 20}px`;
        }

        // Check for collision with lasers
        lasers.forEach((laser, laserIndex) => {
            let laserRect = laser.getBoundingClientRect();
            let invaderRect = invader.getBoundingClientRect();
            if (
                laserRect.left < invaderRect.right &&
                laserRect.right > invaderRect.left &&
                laserRect.top < invaderRect.bottom &&
                laserRect.bottom > invaderRect.top
            ) {
                invader.remove();
                invaders.splice(index, 1);
                laser.remove();
                lasers.splice(laserIndex, 1);
            }
        });
    });
}

function gameLoop() {
    updateLasers();
    updateInvaders();

    invaderTimer++;
    if (invaderTimer > 100) {
        createInvaders();
        invaderTimer = 0;
    }

    requestAnimationFrame(gameLoop);
}

createInvaders();
gameLoop();
