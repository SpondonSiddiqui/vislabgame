
// Constants
const infoBoxes = document.getElementsByClassName('info-box');
const quests = document.getElementsByClassName('quests');
const scoreBoardOverlay = document.getElementById('scoreboard-overlay');

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

// Yellow info box
const yellowInfoBox = document.getElementById('info-box-yellow');

// Yellow quests
const yellowQuest1 = document.getElementById('quest-yellow-1');

const yellowQuest1Tips = document.getElementById('quest-tips-yellow-1');

// Black beams
const blackBeamA = document.getElementById('black-beam-a');
const blackBeamB = document.getElementById('black-beam-b');

// Black circles
const blackCircle1 = document.getElementById('black-circle-1');
const blackCircle2 = document.getElementById('black-circle-2');
const blackCircle3 = document.getElementById('black-circle-3');

// Black info box
const blackInfoBox = document.getElementById('info-box-black');

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

// Red info box
const redInfoBox = document.getElementById('info-box-red');

// Blue beams
const blueBeamA = document.getElementById('blue-beam-a');
const blueBeamAPartial = document.getElementById('blue-beam-a-partial');
const blueBeamB = document.getElementById('blue-beam-b');

// Blue circles
const blueCircle1 = document.getElementById('blue-circle-1');
const blueCircle2 = document.getElementById('blue-circle-2');
const blueCircle3 = document.getElementById('blue-circle-3');

// Blue info box
const blueInfoBox = document.getElementById('info-box-blue');

// Blue quests
const blueQuest1 = document.getElementById('quest-blue-1');
const blueQuest2 = document.getElementById('quest-blue-2');
const blueQuest3 = document.getElementById('quest-blue-3');

const blueQuest1Tips = document.getElementById('quest-tips-blue-1');
const blueQuest2Tips = document.getElementById('quest-tips-blue-2');
const blueQuest3Tips = document.getElementById('quest-tips-blue-3');

// Green beams
const greenBeamA = document.getElementById('green-beam-a');
const greenBeamAPartial = document.getElementById('green-beam-a-partial');
const greenBeamB = document.getElementById('green-beam-b');

// Green circles
const greenCircle1 = document.getElementById('green-circle-1');
const greenCircle2 = document.getElementById('green-circle-2');
const greenCircle3 = document.getElementById('green-circle-3');

// Green info box
const greenInfoBox = document.getElementById('info-box-green');

// Green quests
const greenQuest1 = document.getElementById('quest-green-1');
const greenQuest2 = document.getElementById('quest-green-2');
const greenQuest3 = document.getElementById('quest-green-3');

const greenQuest1Tips = document.getElementById('quest-tips-green-1');
const greenQuest2Tips = document.getElementById('quest-tips-green-2');
const greenQuest3Tips = document.getElementById('quest-tips-green-3');

// Overlays
const yellowOverlay = document.getElementById('wall-yellow-overlay');
const blackOverlay = document.getElementById('wall-black-overlay');
const redOverlay = document.getElementById('wall-red-overlay');
const blueOverlay = document.getElementById('wall-blue-overlay');
const greenOverlay = document.getElementById('wall-green-overlay');

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

// Functions
function showScoreBoard() {
    scoreBoardOverlay.style.display = 'grid';
}


function showYellowOverlay() {
    yellowOverlay.style.display = 'flex';

    // The wall
    wallYellow.style.zIndex = 12;


    // Beams
    yellowBeamA.style.zIndex = 11;
    yellowBeamA.style.filter = "opacity(0.5)";

    //    yellowBeamAPartial1.style.zIndex = 11;
    //    yellowBeamAPartial1.style.filter = "opacity(0.5)";

    //    yellowBeamAPartial2.style.zIndex = 11;
    //    yellowBeamAPartial2.style.filter = "opacity(0.5)";

    yellowBeamB.style.zIndex = 11;
    yellowBeamB.style.filter = "opacity(0.5)";

    //    yellowBeamBPartial.style.zIndex = 11;
    //    yellowBeamBPartial.style.filter = "opacity(0.5)";

    // Circles
    yellowCircle1.style.zIndex = 12;
    yellowCircle2.style.zIndex = 12;
    yellowCircle3.style.zIndex = 12;
    yellowCircle4.style.zIndex = 12;
    yellowCircle5.style.zIndex = 12;

    // Display info box
    yellowInfoBox.style.display = 'inline';
}

function showBlackOverlay() {
    blackOverlay.style.display = 'flex';

    // The wall
    wallBlack.style.zIndex = 12;

    // Beams
    blackBeamA.style.zIndex = 11;
    blackBeamA.style.filter = "opacity(0.5)";

    blackBeamB.style.zIndex = 11;
    blackBeamB.style.filter = "opacity(0.5)";

    // Circles
    blackCircle1.style.zIndex = 12;
    blackCircle2.style.zIndex = 12;
    blackCircle3.style.zIndex = 12;

    // Display info box
    blackInfoBox.style.display = 'inline';
}

function showRedOverlay() {
    redOverlay.style.display = 'flex';

    // The wall
    wallRed.style.zIndex = 12;

    // Beams
    redBeamA.style.zIndex = 11;
    redBeamA.style.filter = "opacity(0.5)";

    //    redBeamAPartial.style.zIndex = 11;
    //    redBeamAPartial.style.filter = "opacity(0.5)";

    redBeamB.style.zIndex = 11;
    redBeamB.style.filter = "opacity(0.5)";

    //    redBeamBPartial.style.zIndex = 11;
    //    redBeamBPartial.style.filter = "opacity(0.5)";

    // Circles
    redCircle1.style.zIndex = 12;
    redCircle2.style.zIndex = 12;
    redCircle3.style.zIndex = 12;
    redCircle4.style.zIndex = 12;

    // Display info box
    redInfoBox.style.display = 'inline';
}

function showBlueOverlay() {
    blueOverlay.style.display = 'flex';

    // The wall
    wallBlue.style.zIndex = 12;

    // Beams
    blueBeamA.style.zIndex = 11;
    blueBeamA.style.filter = "opacity(0.5)";

    //    blueBeamAPartial.style.zIndex = 11;
    //    blueBeamAPartial.style.filter = "opacity(0.5)";

    blueBeamB.style.zIndex = 11;
    blueBeamB.style.filter = "opacity(0.5)";

    // Circles
    blueCircle1.style.zIndex = 12;
    blueCircle2.style.zIndex = 12;
    blueCircle3.style.zIndex = 12;

    // Display info box
    blueInfoBox.style.display = 'inline';
}

function showGreenOverlay() {
    greenOverlay.style.display = 'flex';

    // The wall
    wallGreen.style.zIndex = 12;

    // Beams
    greenBeamA.style.zIndex = 11;
    greenBeamA.style.filter = "opacity(0.5)";

    //    greenBeamAPartial.style.zIndex = 11;
    //    greenBeamAPartial.style.filter = "opacity(0.5)";

    greenBeamB.style.zIndex = 11;
    greenBeamB.style.filter = "opacity(0.5)";

    // Circles
    greenCircle1.style.zIndex = 12;
    greenCircle2.style.zIndex = 12;
    greenCircle3.style.zIndex = 12;

    // Display info box
    greenInfoBox.style.display = 'inline';
}

function hideOverlays() {
    yellowOverlay.style.display = 'none';
    redOverlay.style.display = 'none';
    blackOverlay.style.display = 'none';
    blueOverlay.style.display = 'none';
    greenOverlay.style.display = 'none';

    // The walls
    wallYellow.style.zIndex = 1;
    wallBlack.style.zIndex = 1;
    wallRed.style.zIndex = 1;
    wallBlue.style.zIndex = 1;
    wallGreen.style.zIndex = 1;

    // Yellow beams
    yellowBeamA.style.zIndex = 0;
    yellowBeamA.style.filter = "opacity(1)";

    //    yellowBeamAPartial1.style.zIndex = 0;
    //    yellowBeamAPartial1.style.filter = "opacity(1)";

    //    yellowBeamAPartial2.style.zIndex = 0;
    //    yellowBeamAPartial2.style.filter = "opacity(1)";

    yellowBeamB.style.zIndex = 0;
    yellowBeamB.style.filter = "opacity(1)";

    //    yellowBeamBPartial.style.zIndex = 0;
    //    yellowBeamBPartial.style.filter = "opacity(1)";

    // Black beams
    blackBeamA.style.zIndex = 0;
    blackBeamA.style.filter = "opacity(1)";

    blackBeamB.style.zIndex = 0;
    blackBeamB.style.filter = "opacity(1)";

    // Red beams
    redBeamA.style.zIndex = 0;
    redBeamA.style.filter = "opacity(1)";

    //    redBeamAPartial.style.zIndex = 0;
    //    redBeamAPartial.style.filter = "opacity(1)";

    redBeamB.style.zIndex = 0;
    redBeamB.style.filter = "opacity(1)";

    //    redBeamBPartial.style.zIndex = 0;
    //    redBeamBPartial.style.filter = "opacity(1)";

    // Blue beams
    blueBeamA.style.zIndex = 0;
    blueBeamA.style.filter = "opacity(1)";

    //    blueBeamAPartial.style.zIndex = 0;
    //    blueBeamAPartial.style.filter = "opacity(1)";

    blueBeamB.style.zIndex = 0;
    blueBeamB.style.filter = "opacity(1)";

    // Green beams
    greenBeamA.style.zIndex = 0;
    greenBeamA.style.filter = "opacity(1)";

    //   greenBeamAPartial.style.zIndex = 0;
    //    greenBeamAPartial.style.filter = "opacity(1)";

    greenBeamB.style.zIndex = 0;
    greenBeamB.style.filter = "opacity(1)";

    // The circles
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

    blueCircle1.style.zIndex = 5;
    blueCircle2.style.zIndex = 5;
    blueCircle3.style.zIndex = 5;

    greenCircle1.style.zIndex = 5;
    greenCircle2.style.zIndex = 5;
    greenCircle3.style.zIndex = 5;

    hideAllInfoBoxes();
    hideQuests();
}

// Yellow quest functions
function showYellowQuest1() {
    showYellowOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    yellowQuest1.style.display = 'flex';
}

function showYellowQuest1Tips() {
    yellowQuest1Tips.style.display = 'inline';
}

// Blue quest functions
function showBlueQuest1() {
    showBlueOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    blueQuest1.style.display = 'flex';
}

function showBlueQuest1Tips() {
    blueQuest1Tips.style.display = 'inline';
}

// Green quest functions
function showGreenQuest1() {
    showGreenOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    greenQuest1.style.display = 'flex';
}

function showGreenQuest2() {
    showGreenOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    greenQuest2.style.display = 'flex';
}

function showGreenQuest3() {
    showGreenOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    greenQuest3.style.display = 'flex';
}

function showGreenQuest1Tips() {
    greenQuest1Tips.style.display = 'inline';
}

function showGreenQuest2Tips() {
    greenQuest2Tips.style.display = 'inline';
}

function showGreenQuest3Tips() {
    greenQuest3Tips.style.display = 'inline';
}

function hideQuests() {
    // Add the same line of code for all quests here
    greenQuest1.style.display = 'none';
    greenQuest2.style.display = 'none';
    greenQuest3.style.display = 'none';
    yellowQuest1.style.display = 'none';
    blueQuest1.style.display = 'none';
}

function hideQuestTips() {
    // Add the same line of code for all quests here
    greenQuest1Tips.style.display = 'none';
    greenQuest2Tips.style.display = 'none';
    greenQuest3Tips.style.display = 'none';
    yellowQuest1Tips.style.display = 'none';
    blueQuest1Tips.style.display = 'none';
}


function hideAllInfoBoxes() {
    greenInfoBox.style.display = 'none';
    yellowInfoBox.style.display = 'none';
    blackInfoBox.style.display = 'none';
    redInfoBox.style.display = 'none';
    blueInfoBox.style.display = 'none';
}