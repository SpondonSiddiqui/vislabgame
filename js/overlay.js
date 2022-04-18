
// Constants
const wallYellow = document.getElementsByClassName('wall-yellow');
const wallBlack = document.getElementsByClassName('wall-black');
const wallRed = document.getElementsByClassName('wall-red');
const wallBlue = document.getElementsByClassName('wall-blue');
const wallGreen = document.getElementsByClassName('wall-green');

const greenBeamB = document.getElementById('green-beam-b');

const yellowOverlay = document.getElementById('wall-yellow-overlay');
const blackOverlay = document.getElementById('wall-black-overlay');
const redOverlay = document.getElementById('wall-red-overlay');
const blueOverlay = document.getElementById('wall-blue-overlay');
const greenOverlay = document.getElementById('wall-green-overlay');

// Functions
function showYellowOverlay() {
    yellowOverlay.style.display = 'flex';
}

function showBlackOverlay() {
    blackOverlay.style.display = 'flex';
}

function showRedOverlay() {
    redOverlay.style.display = 'flex';
}

function showBlueOverlay() {
    blueOverlay.style.display = 'flex';
}

function showGreenOverlay() {
    greenOverlay.style.display = 'flex';
    greenBeamB.style.zIndex = 11;
}

function hideOverlays() {
    yellowOverlay.style.display = 'none';
    redOverlay.style.display = 'none';
    blackOverlay.style.display = 'none';
    blueOverlay.style.display = 'none';
    greenOverlay.style.display = 'none';
}