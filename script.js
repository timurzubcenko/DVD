const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const playGroundWidth = canvas.width
const playGroundHeight = canvas.height

const background = 'rgb(46, 49, 58)'
const ballSpeed = 1
let ballYDirection = 1
let ballXDirection = 1

canvas.background = background

let img = new Image()
img.src = './img/file-dvd-video-logo-svg-wikipedia-0.png'

let imgRed = new Image()
imgRed.src = './img/IMG_1245.png'

let imgGreen = new Image()
imgGreen.src = './img/IMG_1246.png'

let imgOrange = new Image()
imgOrange.src = './img/IMG_1248.png'

let imgBlue = new Image()
imgBlue.src = './img/IMG_1247.png'

let imgPurple = new Image()
imgPurple.src = './img/IMG_1244.png'

const ballY = Math.floor(Math.random() * 2)
console.log(ballY)

const ball = {
    x: playGroundWidth / 2,
    y: playGroundHeight / 2,
    radius: 15,
    color: 'blue',
}

const dvd = {
    x: playGroundWidth / 2,
    y: playGroundHeight / 2,
    width: 150,
    height: 70,
    color: 'red',
    img: img,
}

gameStart()
function gameStart() {
    createBall()
}

function drawInterface() {
    clearPlayGround()
    // drawBall()
    drawDvd()
    moveBall()
    checkPosBall()
}

function clearPlayGround() {
    ctx.fillStyle = background
    ctx.fillRect(0, 0, playGroundWidth, playGroundHeight)
}

// function drawBall() {
//     ctx.fillStyle = ball.color
//     ctx.beginPath()
//     ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI)
//     ctx.fill()
// }

function drawDvd() {
    // ctx.beginPath();
    // ctx.rect(dvd.x, dvd.y, dvd.width, dvd.height);
    // ctx.closePath();
    ctx.fillStyle = dvd.color;
    ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.width, dvd.height)
    // ctx.fill();; 
    // ctx.stroke()
}

function createBall() {
    if (ballY == 1) {
        ballYDirection = 1
    }
    else {
        ballYDirection = -1
    }

    if (ballY == 1) {
        ballXDirection = 1
    }
    else {
        ballXDirection = -1
    }
}

function moveBall() {
    dvd.y += ballYDirection
    dvd.x += ballXDirection
}

function checkPosBall() {
    if (dvd.y >= playGroundHeight - dvd.height) {
        ballYDirection = -1
        dvd.img = imgRed
    }
    if (dvd.y <= 0) {
        ballYDirection = 1
        dvd.img = imgGreen
    }
    if (dvd.x <= 0) {
        ballXDirection = 1
        dvd.img = imgBlue
    }
    if (dvd.x >= playGroundWidth - dvd.width) {
        ballXDirection = -1
        dvd.img = imgOrange
    }
}

setInterval(() => {
    drawInterface()
}, 0)