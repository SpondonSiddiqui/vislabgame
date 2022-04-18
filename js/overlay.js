
// Constants
const wallYellow = document.getElementById('wall-yellow');
const wallBlack = document.getElementById('wall-black');
const wallRed = document.getElementById('wall-red');
const wallBlue = document.getElementById('wall-blue');
const wallGreen = document.getElementById('wall-green');

const yellowBeamA = document.getElementById('yellow-beam-a');
const yellowBeamAPartial1 = document.getElementById('yellow-beam-a-partial-1');
const yellowBeamAPartial2 = document.getElementById('yellow-beam-a-partial-2');
const yellowBeamB = document.getElementById('yellow-beam-b');
const yellowBeamBPartial = document.getElementById('yellow-beam-b-partial');

const blackBeamA = document.getElementById('black-beam-a');
const blackBeamB = document.getElementById('black-beam-b');

const greenBeamA = document.getElementById('green-beam-a');
const greenBeamAPartial = document.getElementById('green-beam-a-partial');
const greenBeamB = document.getElementById('green-beam-b');

const yellowOverlay = document.getElementById('wall-yellow-overlay');
const blackOverlay = document.getElementById('wall-black-overlay');
const redOverlay = document.getElementById('wall-red-overlay');
const blueOverlay = document.getElementById('wall-blue-overlay');
const greenOverlay = document.getElementById('wall-green-overlay');

// Functions
function showYellowOverlay() {
    yellowOverlay.style.display = 'flex';

    yellowBeamA.style.zIndex = 11;
    yellowBeamAPartial1.style.zIndex = 11;
    yellowBeamAPartial2.style.zIndex = 11;
    yellowBeamB.style.zIndex = 11;
    yellowBeamBPartial.style.zIndex = 11;
}

function showBlackOverlay() {
    blackOverlay.style.display = 'flex';

    blackBeamA.style.zIndex = 11;
    blackBeamB.style.zIndex = 11;
}

function showRedOverlay() {
    redOverlay.style.display = 'flex';
}

function showBlueOverlay() {
    blueOverlay.style.display = 'flex';
}

function showGreenOverlay() {
    greenOverlay.style.display = 'flex';

    greenBeamA.style.zIndex = 11;
    greenBeamAPartial.style.zIndex = 11;
    greenBeamB.style.zIndex = 11;
}

function hideOverlays() {
    yellowOverlay.style.display = 'none';
    redOverlay.style.display = 'none';
    blackOverlay.style.display = 'none';
    blueOverlay.style.display = 'none';
    greenOverlay.style.display = 'none';

    yellowBeamA.style.zIndex = 0;
    yellowBeamAPartial1.style.zIndex = 0;
    yellowBeamAPartial2.style.zIndex = 0;
    yellowBeamB.style.zIndex = 0;
    yellowBeamBPartial.style.zIndex = 0;

    blackBeamA.style.zIndex = 0;
    blackBeamB.style.zIndex = 0;

    greenBeamA.style.zIndex = 0;
    greenBeamAPartial.style.zIndex = 0;
    greenBeamB.style.zIndex = 0;
}