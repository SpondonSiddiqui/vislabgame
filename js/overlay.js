
// Constants

// Walls
const wallYellow = document.getElementById('wall-yellow');
const wallBlack = document.getElementById('wall-black');
const wallRed = document.getElementById('wall-red');
const wallBlue = document.getElementById('wall-blue');
const wallGreen = document.getElementById('wall-green');

// Yellow beams
const yellowBeamA = document.getElementById('yellow-beam-a');
const yellowBeamAPartial1 = document.getElementById('yellow-beam-a-partial-1');
const yellowBeamAPartial2 = document.getElementById('yellow-beam-a-partial-2');
const yellowBeamB = document.getElementById('yellow-beam-b');
const yellowBeamBPartial = document.getElementById('yellow-beam-b-partial');

// Yellow circles
const yellowCircle1 = document.getElementById('yellow-circle-1');
const yellowCircle2 = document.getElementById('yellow-circle-2');
const yellowCircle3 = document.getElementById('yellow-circle-3');
const yellowCircle4 = document.getElementById('yellow-circle-4');
const yellowCircle5 = document.getElementById('yellow-circle-5');

// Black beams
const blackBeamA = document.getElementById('black-beam-a');
const blackBeamB = document.getElementById('black-beam-b');

// Black circles
const blackCircle1 = document.getElementById('black-circle-1');
const blackCircle2 = document.getElementById('black-circle-2');
const blackCircle3 = document.getElementById('black-circle-3');

// Red beams
const redBeamA = document.getElementById('red-beam-a');
const redBeamAPartial = document.getElementById('red-beam-a-partial');
const redBeamB = document.getElementById('red-beam-b');
const redBeamBPartial = document.getElementById('red-beam-b-partial');

// Red circles
const redCircle1 = document.getElementById('red-circle-1');
const redCircle2 = document.getElementById('red-circle-2');
const redCircle3 = document.getElementById('red-circle-3');
const redCircle4 = document.getElementById('red-circle-4');

// Blue beams
const blueBeamA = document.getElementById('blue-beam-a');
const blueBeamAPartial = document.getElementById('blue-beam-a-partial');
const blueBeamB = document.getElementById('blue-beam-b');

// Blue circles

// Green beams
const greenBeamA = document.getElementById('green-beam-a');
const greenBeamAPartial = document.getElementById('green-beam-a-partial');
const greenBeamB = document.getElementById('green-beam-b');

// Green circles

// Overlays
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

    yellowCircle1.style.zIndex = 12;
    yellowCircle2.style.zIndex = 12;
    yellowCircle3.style.zIndex = 12;
    yellowCircle4.style.zIndex = 12;
    yellowCircle5.style.zIndex = 12;
}

function showBlackOverlay() {
    blackOverlay.style.display = 'flex';

    blackBeamA.style.zIndex = 11;
    blackBeamB.style.zIndex = 11;

    blackCircle1.style.zIndex = 12;
    blackCircle2.style.zIndex = 12;
    blackCircle3.style.zIndex = 12;
}

function showRedOverlay() {
    redOverlay.style.display = 'flex';

    redBeamA.style.zIndex = 11;
    redBeamAPartial.style.zIndex = 11;
    redBeamB.style.zIndex = 11;
    redBeamBPartial.style.zIndex = 11;

    redCircle1.style.zIndex = 12;
    redCircle2.style.zIndex = 12;
    redCircle3.style.zIndex = 12;
    redCircle4.style.zIndex = 12;
}

function showBlueOverlay() {
    blueOverlay.style.display = 'flex';

    blueBeamA.style.zIndex = 11;
    blueBeamAPartial.style.zIndex = 11;
    blueBeamB.style.zIndex = 11;
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

    redBeamA.style.zIndex = 0;
    redBeamAPartial.style.zIndex = 0;
    redBeamB.style.zIndex = 0;
    redBeamBPartial.style.zIndex = 0;

    blueBeamA.style.zIndex = 0;
    blueBeamAPartial.style.zIndex = 0;
    blueBeamB.style.zIndex = 0;

    greenBeamA.style.zIndex = 0;
    greenBeamAPartial.style.zIndex = 0;
    greenBeamB.style.zIndex = 0;

    yellowCircle1.style.zIndex = 5;
    yellowCircle2.style.zIndex = 5;
    yellowCircle3.style.zIndex = 5;
    yellowCircle4.style.zIndex = 5;
    yellowCircle5.style.zIndex = 5;

    blackCircle1.style.zIndex = 5;
    blackCircle2.style.zIndex = 5;
    blackCircle3.style.zIndex = 5;

    redCircle1.style.zIndex = 5;
    redCircle2.style.zIndex = 5;
    redCircle3.style.zIndex = 5;
    redCircle4.style.zIndex = 5;
}