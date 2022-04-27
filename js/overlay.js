
// Constants
const infoBoxes = document.getElementsByClassName('info-box');
const quests = document.getElementsByClassName('quests');
const scoreBoardOverlay = document.getElementById('scoreboard-overlay');
const scoreboardButton = document.getElementById('scoreboard-button');

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

// Yellow info box
const yellowInfoBox = document.getElementById('info-box-yellow');

// Yellow overlay buttons
const yellowExitButton = document.getElementById('exit-overlay-button-yellow');
const yellowInfoButton = document.getElementById('info-overlay-button-yellow');

// Yellow quests
const yellowQuest1 = document.getElementById('quest-yellow-1');
const yellowQuest2 = document.getElementById('quest-yellow-2');
const yellowQuest3 = document.getElementById('quest-yellow-3');
const yellowQuest4 = document.getElementById('quest-yellow-4');

const yellowQuest1Tips = document.getElementById('quest-tips-yellow-1');
const yellowQuest2Tips = document.getElementById('quest-tips-yellow-2');
const yellowQuest3Tips = document.getElementById('quest-tips-yellow-3');
const yellowQuest4Tips = document.getElementById('quest-tips-yellow-4');

const yellowQuest1ResultBox = document.getElementById('quest-result-yellow-1');
const yellowQuest2ResultBox = document.getElementById('quest-result-yellow-2');
const yellowQuest3ResultBox = document.getElementById('quest-result-yellow-3');
const yellowQuest4ResultBox = document.getElementById('quest-result-yellow-4');

// Black beams
const blackBeamA = document.getElementById('black-beam-a');
const blackBeamB = document.getElementById('black-beam-b');

// Black circles
const blackCircle1 = document.getElementById('black-circle-1');
const blackCircle2 = document.getElementById('black-circle-2');
const blackCircle3 = document.getElementById('black-circle-3');

// Black info box
const blackInfoBox = document.getElementById('info-box-black');

// Black overlay buttons
const blackExitButton = document.getElementById('exit-overlay-button-black');
const blackInfoButton = document.getElementById('info-overlay-button-black');

// Black quests
const blackQuest1 = document.getElementById('quest-black-1');
const blackQuest2 = document.getElementById('quest-black-2');
const blackQuest3 = document.getElementById('quest-black-3');

const blackQuest1Tips = document.getElementById('quest-tips-black-1');
const blackQuest2Tips = document.getElementById('quest-tips-black-2');
const blackQuest3Tips = document.getElementById('quest-tips-black-3');

const blackQuest1ResultBox = document.getElementById('quest-result-black-1');
const blackQuest2ResultBox = document.getElementById('quest-result-black-2');
const blackQuest3ResultBox = document.getElementById('quest-result-black-3');

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

// Red overlay buttons
const redExitButton = document.getElementById('exit-overlay-button-red');
const redInfoButton = document.getElementById('info-overlay-button-red');

// Red quests
const redQuest1 = document.getElementById('quest-red-1');
const redQuest2 = document.getElementById('quest-red-2');
const redQuest3 = document.getElementById('quest-red-3');
const redQuest4 = document.getElementById('quest-red-4');

const redQuest1Tips = document.getElementById('quest-tips-red-1');
const redQuest2Tips = document.getElementById('quest-tips-red-2');
const redQuest3Tips = document.getElementById('quest-tips-red-3');
const redQuest4Tips = document.getElementById('quest-tips-red-4');

const redQuest1ResultBox = document.getElementById('quest-result-red-1');
const redQuest2ResultBox = document.getElementById('quest-result-red-2');
const redQuest3ResultBox = document.getElementById('quest-result-red-3');
const redQuest4ResultBox = document.getElementById('quest-result-red-4');

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

// Blue overlay buttons
const blueExitButton = document.getElementById('exit-overlay-button-blue');
const blueInfoButton = document.getElementById('info-overlay-button-blue');

// Blue quests
const blueQuest1 = document.getElementById('quest-blue-1');
const blueQuest2 = document.getElementById('quest-blue-2');
const blueQuest3 = document.getElementById('quest-blue-3');

const blueQuest1Tips = document.getElementById('quest-tips-blue-1');
const blueQuest2Tips = document.getElementById('quest-tips-blue-2');
const blueQuest3Tips = document.getElementById('quest-tips-blue-3');

const blueQuest1ResultBox = document.getElementById('quest-result-blue-1');
const blueQuest2ResultBox = document.getElementById('quest-result-blue-2');
const blueQuest3ResultBox = document.getElementById('quest-result-blue-3');

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

// Green overlay buttons
const greenExitButton = document.getElementById('exit-overlay-button-green');
const greenInfoButton = document.getElementById('info-overlay-button-green');

// Green quests
const greenQuest1 = document.getElementById('quest-green-1');
const greenQuest2 = document.getElementById('quest-green-2');
const greenQuest3 = document.getElementById('quest-green-3');

const greenQuest1Tips = document.getElementById('quest-tips-green-1');
const greenQuest2Tips = document.getElementById('quest-tips-green-2');
const greenQuest3Tips = document.getElementById('quest-tips-green-3');

const greenQuest1ResultBox = document.getElementById('quest-result-green-1');
const greenQuest2ResultBox = document.getElementById('quest-result-green-2');
const greenQuest3ResultBox = document.getElementById('quest-result-green-3');

// Overlays
const yellowOverlay = document.getElementById('wall-yellow-overlay');
const blackOverlay = document.getElementById('wall-black-overlay');
const redOverlay = document.getElementById('wall-red-overlay');
const blueOverlay = document.getElementById('wall-blue-overlay');
const greenOverlay = document.getElementById('wall-green-overlay');

// Send buttons
const sendButtonYellow1 = document.getElementById('send-button-yellow-1');
const sendButtonYellow2 = document.getElementById('send-button-yellow-2');
const sendButtonYellow3 = document.getElementById('send-button-yellow-3');
const sendButtonYellow4 = document.getElementById('send-button-yellow-4');
const sendButtonBlack1 = document.getElementById('send-button-black-1');
const sendButtonBlack2 = document.getElementById('send-button-black-2');
const sendButtonBlack3 = document.getElementById('send-button-black-3');
const sendButtonRed1 = document.getElementById('send-button-red-1');
const sendButtonRed2 = document.getElementById('send-button-red-2');
const sendButtonRed3 = document.getElementById('send-button-red-3');
const sendButtonRed4 = document.getElementById('send-button-red-4');
const sendButtonBlue = document.getElementById('send-button-blue');
const sendButtonGreen = document.getElementById('send-button-green');

// Counters
let nrOfYellowTotalComplete = 0;
let nrOfBlackTotalComplete = 0;
let nrOfRedTotalComplete = 0;
let nrOfBlueTotalComplete = 0;
let nrOfGreenTotalComplete = 0;

let nrOfYellowAComplete = 0;
let nrOfYellowBComplete = 0;
let nrOfBlackAComplete = 0;
let nrOfBlackBComplete = 0;
let nrOfRedAComplete = 0;
let nrOfRedBComplete = 0;
let nrOfBlueAComplete = 0;
let nrOfGreenAComplete = 0;

// Strings
const yellowColor = '#f2ba49';
const grayColor = '#555555';
const redColor = '#ff4d4d';
const blueColor = '#0ebde5';
const greenColor = '#4cbf4c';
const purpleColor = '#9900ff';

const yellowFilterString = 'brightness(0) saturate(100%) invert(75%) sepia(3%) saturate(6601%) hue-rotate(345deg) brightness(117%) contrast(93%)';
const blackFilterString = 'brightness(0) saturate(100%) invert(51%) sepia(27%) saturate(0%) hue-rotate(224deg) brightness(100%) contrast(93%)';
const redFilterString = 'brightness(0) saturate(100%) invert(64%) sepia(28%) saturate(3019%) hue-rotate(314deg) brightness(99%) contrast(115%)';

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

function hideScoreBoard() {
    scoreBoardOverlay.style.display = 'none';
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

    setYellowBeamAColors();
    setYellowBeamBColors();

    // Circles
    yellowCircle1.style.zIndex = 12;
    yellowCircle2.style.zIndex = 12;
    yellowCircle3.style.zIndex = 12;
    yellowCircle4.style.zIndex = 12;

    // Display info box
    yellowInfoBox.style.display = 'inline';

    // Display buttons
    yellowExitButton.style.display = 'inline';
    yellowInfoButton.style.display = 'inline';
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

    setBlackBeamAColors();
    setBlackBeamBColors();

    // Circles
    blackCircle1.style.zIndex = 12;
    blackCircle2.style.zIndex = 12;
    blackCircle3.style.zIndex = 12;

    // Display info box
    blackInfoBox.style.display = 'inline';

    // Display buttons
    blackExitButton.style.display = 'inline';
    blackInfoButton.style.display = 'inline';
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

    setRedBeamAColors();
    setRedBeamBColors();

    // Circles
    redCircle1.style.zIndex = 12;
    redCircle2.style.zIndex = 12;
    redCircle3.style.zIndex = 12;
    redCircle4.style.zIndex = 12;

    // Display info box
    redInfoBox.style.display = 'inline';

    // Display buttons
    redExitButton.style.display = 'inline';
    redInfoButton.style.display = 'inline';
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

    // Display buttons
    blueExitButton.style.display = 'inline';
    blueInfoButton.style.display = 'inline';
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

    // Display buttons
    greenExitButton.style.display = 'inline';
    greenInfoButton.style.display = 'inline';
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
    hideAllOverlayButtons();
    hideQuests();
    setBeamColorsOnExit();
}

// Globe functions
function showGlobeBox() {
    document.getElementById('globe-box').style.display = 'flex';
    setTimeout(hideGlobeBox, 5000);
}

function hideGlobeBox() {
    document.getElementById('globe-box').style.display = 'none';
}

// Yellow quest functions
function showYellowQuest1() {
    showYellowOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    yellowQuest1.style.display = 'flex';
}

function showYellowQuest2() {
    showYellowOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    yellowQuest2.style.display = 'flex';
}

function showYellowQuest3() {
    showYellowOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    yellowQuest3.style.display = 'flex';
}

function showYellowQuest4() {
    showYellowOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    yellowQuest4.style.display = 'flex';
}

function showYellowQuest1Tips() {
    yellowQuest1Tips.style.display = 'inline';
}

function showYellowQuest2Tips() {
    yellowQuest2Tips.style.display = 'inline';
}

function showYellowQuest3Tips() {
    yellowQuest3Tips.style.display = 'inline';
}

function showYellowQuest4Tips() {
    yellowQuest4Tips.style.display = 'inline';
}

function showYellowQuest1Result() {
    // Save user input
    var userInput = document.getElementById('quest-yellow-1-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-yellow-1-input').readOnly = true;

        // Change look of send button
        sendButtonYellow1.style.backgroundColor = 'white';
        sendButtonYellow1.style.color = '#f2ba49';
        sendButtonYellow1.innerHTML = "Skickat!";

        // Display result box
        yellowQuest1ResultBox.style.display = 'flex';

        // Display user input in the result box
        var displayInput = document.getElementById('user-input-yellow-1');
        displayInput.innerHTML = userInput;

        // Display redo button
        var redoButton = document.getElementById('redo-button-yellow-1');
        redoButton.style.display = 'flex';

        hideQuestTips();

        // Increase counter
        nrOfYellowAComplete++;
        nrOfYellowTotalComplete++;

        // Change beam color
        setYellowBeamAColors();

        // Change circle border color
        yellowCircle1.style.outlineColor = yellowColor;

        // Set image color
        setYellowImageColor();
    }
}

function showYellowQuest2Result() {
    // Save user input
    var userInput = document.getElementById('quest-yellow-2-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-yellow-2-input').readOnly = true;

        // Change look of send button
        sendButtonYellow2.style.backgroundColor = 'white';
        sendButtonYellow2.style.color = '#f2ba49';
        sendButtonYellow2.innerHTML = "Skickat!";

        // Display result box
        yellowQuest2ResultBox.style.display = 'flex';

        // Display redo button
        var redoButton = document.getElementById('redo-button-yellow-2');
        redoButton.style.display = 'flex';

        hideQuestTips();

        // Increase counter
        nrOfYellowAComplete++;
        nrOfYellowTotalComplete++;

        // Change beam color
        setYellowBeamAColors();

        // Change circle border color
        yellowCircle2.style.outlineColor = yellowColor;

        // Set image color
        setYellowImageColor();
    }
}

function showYellowQuest3Result() {
    // Save user input
    var userInput = document.getElementById('quest-yellow-3-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-yellow-3-input').readOnly = true;

        // Change look of send button
        sendButtonYellow3.style.backgroundColor = 'white';
        sendButtonYellow3.style.color = '#f2ba49';
        sendButtonYellow3.innerHTML = "Skickat!";

        // Display result box
        document.getElementById('yellow-3-result-intro').innerHTML = "Baserat på ditt svar tror vi att du kommer ifrån en av dessa län:";
        yellowQuest3ResultBox.style.display = 'flex';


        // Display user input in the result box
        var displayInputA = document.getElementById('user-input-yellow-3');

        if (userInput > 0) {
            displayInputA.innerHTML = "Halland Stockholm";
        }

        else if (userInput < 7) {
            displayInputA.innerHTML = 'Västra Götaland Uppsala Gotland';
        }

        else if (userInput < 18) {
            displayInputA.innerHTML = 'Östergötland Västmanland Skåne Jönköping';
        }

        else if (userInput < 24.9) {
            displayInputA.innerHTML = 'Norrbotten Kronoberg Södermanland';
        }

        else if (userInput < 29.3) {
            displayInputA.innerHTML = 'Västernorrland Kalmar Örebro Västerbotten';
        }

        else if (userInput < 32) {
            displayInputA.innerHTML = 'Gävleborg Dalarna Jämtland';
        }

        else {
            displayInputA.innerHTML = 'Värmland Blekinge';
        }

        // Display redo button
        var redoButton = document.getElementById('redo-button-yellow-3');
        redoButton.style.display = 'flex';

        hideQuestTips();

        // Increase counter
        nrOfYellowAComplete++;
        nrOfYellowTotalComplete++;

        // Change beam color
        setYellowBeamAColors();

        // Change circle border color
        yellowCircle3.style.outlineColor = yellowColor;

        // Set image color
        setYellowImageColor();
    }
}

function showYellowQuest4Result() {
    // Save user input
    let userInput = document.getElementById('quest-yellow-4-input').value;
    let years = Math.round(userInput / 0.3125);

    if (userInput.length != 0) {
        // Make user input read only
        document.getElementById('quest-yellow-4-input').readOnly = true;

        // Change look of send button
        sendButtonYellow4.style.backgroundColor = 'white';
        sendButtonYellow4.style.color = '#f2ba49';
        sendButtonYellow4.innerHTML = "Skickat!";

        // Display result box
        document.getElementById('yellow-4-result-intro').innerHTML = "Kan det vara så att du är...";
        yellowQuest4ResultBox.style.display = 'flex';

        // Display user input in the result box
        var displayInput = document.getElementById('user-input-yellow-4');
        displayInput.innerHTML = years;

        // Display redo button
        var redoButton = document.getElementById('redo-button-yellow-4');
        redoButton.style.display = 'flex';

        hideQuestTips();

        // Increase counter
        nrOfYellowBComplete++;
        nrOfYellowTotalComplete++;

        // Change beam color
        setYellowBeamBColors();

        // Change circle border color
        yellowCircle4.style.outlineColor = yellowColor;

        // Set image color
        setYellowImageColor();
    }
}

function redoYellowQuest1() {
    // Hide redo button
    document.getElementById('redo-button-yellow-1').style.display = 'none';

    // Remove user input from result box
    document.getElementById('user-input-yellow-1').innerHTML = "(Du har ångrat ditt svar)";

    // Make input writeable
    document.getElementById('quest-yellow-1-input').readOnly = false;

    // Restore send button
    sendButtonYellow1.style.backgroundColor = '#f2ba49';
    sendButtonYellow1.style.color = 'white';
    sendButtonYellow1.innerHTML = "Skicka";

    // Decrease counter
    nrOfYellowAComplete--;
    nrOfYellowTotalComplete--;

    // Change beam color
    setYellowBeamAColors();

    // Change circle border color
    yellowCircle1.style.outlineColor = 'white';

    // Set image color
    setYellowImageColor();
}

function redoYellowQuest2() {
    // Hide redo button
    document.getElementById('redo-button-yellow-2').style.display = 'none';

    // Make input writeable
    document.getElementById('quest-yellow-2-input').readOnly = false;

    // Restore send button
    sendButtonYellow2.style.backgroundColor = '#f2ba49';
    sendButtonYellow2.style.color = 'white';
    sendButtonYellow2.innerHTML = "Skicka";

    // Hide result window
    yellowQuest2ResultBox.style.display = 'none';

    // Decrease counter
    nrOfYellowAComplete--;
    nrOfYellowTotalComplete--;

    // Change beam color
    setYellowBeamAColors();

    // Change circle border color
    yellowCircle2.style.outlineColor = 'white';

    // Set image color
    setYellowImageColor();
}

function redoYellowQuest3() {
    // Hide redo button
    document.getElementById('redo-button-yellow-3').style.display = 'none';

    // Remove user input from result box
    document.getElementById('user-input-yellow-3').innerHTML = "(Du har ångrat ditt svar)";

    // Make input writeable
    document.getElementById('quest-yellow-3-input').readOnly = false;

    // Restore send button
    sendButtonYellow3.style.backgroundColor = '#f2ba49';
    sendButtonYellow3.style.color = 'white';
    sendButtonYellow3.innerHTML = "Skicka";

    // Decrease counter
    nrOfYellowAComplete--;
    nrOfYellowTotalComplete--;

    // Change beam color
    setYellowBeamAColors();

    // Change circle border color
    yellowCircle3.style.outlineColor = 'white';

    // Set image color
    setYellowImageColor();
}

function redoYellowQuest4() {
    // Hide redo button
    document.getElementById('redo-button-yellow-4').style.display = 'none';

    // Remove user input from result box
    document.getElementById('user-input-yellow-4').innerHTML = "(Du har ångrat ditt svar)";

    // Make input writeable
    document.getElementById('quest-yellow-4-input').readOnly = false;

    // Restore send button
    sendButtonYellow4.style.backgroundColor = '#f2ba49';
    sendButtonYellow4.style.color = 'white';
    sendButtonYellow4.innerHTML = "Skicka";

    // remove År?
    document.getElementById('yellow-4-year').innerHTML = '';

    // Decrease counter
    nrOfYellowBComplete--;
    nrOfYellowTotalComplete--;

    // Change beam color
    setYellowBeamBColors();

    // Change circle border color
    yellowCircle4.style.outlineColor = 'white';

    // Set image color
    setYellowImageColor();
}

// Blue quest functions
function showBlackQuest1() {
    showBlackOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    blackQuest1.style.display = 'flex';
}

function showBlackQuest2() {
    showBlackOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    blackQuest2.style.display = 'flex';
}

function showBlackQuest3() {
    showBlackOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    blackQuest3.style.display = 'flex';
}

function showBlackQuest1Tips() {
    blackQuest1Tips.style.display = 'inline';
}

function showBlackQuest2Tips() {
    blackQuest2Tips.style.display = 'inline';
}

function showBlackQuest3Tips() {
    blackQuest3Tips.style.display = 'inline';
}


function showBlackQuest1Result() {
    // Save user input
    var userInput = document.getElementById('quest-black-1-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-black-1-input').readOnly = true;

        // Change look of send button
        sendButtonBlack1.style.backgroundColor = 'white';
        sendButtonBlack1.style.color = '#9900ff';
        sendButtonBlack1.innerHTML = "Skickat!";

        // Display result box
        blackQuest1ResultBox.style.display = 'flex';

        // Display user input in the result box
        // var displayInput = document.getElementById('user-input-black-1');
        // displayInput.innerHTML = userInput;

        // Display redo button
        // var redoButton = document.getElementById('redo-button-black-1');
        // redoButton.style.display = 'flex';

        hideQuestTips();

        // Increase counter
        nrOfBlackAComplete++;
        nrOfBlackTotalComplete++;

        // Change beam color
        setBlackBeamAColors();

        // Change circle border color
        blackCircle1.style.outlineColor = grayColor;

        // Set image color
        setBlackImageColor();
    }
}

function showBlackQuest2Result() {
    // Save user input
    var userInput = document.getElementById('quest-black-2-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-black-2-input').readOnly = true;

        // Change look of send button
        sendButtonBlack2.style.backgroundColor = 'white';
        sendButtonBlack2.style.color = '#9900ff';
        sendButtonBlack2.innerHTML = "Skickat!";

        // Display result box
        blackQuest2ResultBox.style.display = 'flex';

        // Display user input in the result box
        var displayInput = document.getElementById('user-input-black-2');
        displayInput.innerHTML = userInput;

        // Display redo button
        var redoButton = document.getElementById('redo-button-black-2');
        redoButton.style.display = 'flex';

        hideQuestTips();

        // Increase counter
        nrOfBlackTotalComplete++;

        // Change circle border color
        blackCircle2.style.outlineColor = grayColor;

        // Set image color
        setBlackImageColor();
    }
}

function showBlackQuest3Result() {
    // Save user input
    var userInput = document.getElementById('quest-black-3-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-black-3-input').readOnly = true;

        // Change look of send button
        sendButtonBlack3.style.backgroundColor = 'white';
        sendButtonBlack3.style.color = '#9900ff';
        sendButtonBlack3.innerHTML = "Skickat!";

        // Display result box

        blackQuest3ResultBox.style.display = 'flex';

        // Display redo button
        // var redoButton = document.getElementById('redo-button-black-3');
        // redoButton.style.display = 'flex';

        hideQuestTips();

        // Increase counter
        nrOfBlackBComplete++;
        nrOfBlackTotalComplete++;

        // Change beam color
        setBlackBeamBColors();

        // Change circle border color
        blackCircle3.style.outlineColor = grayColor;

        // Set image color
        setBlackImageColor();
    }
}

function redoBlackQuest2() {
    // Hide redo button
    document.getElementById('redo-button-black-2').style.display = 'none';

    // Remove user input from result box
    document.getElementById('user-input-black-2').innerHTML = "Du har ångrat ditt svar";

    // Make input writeable
    document.getElementById('quest-black-2-input').readOnly = false;

    // Restore send button
    sendButtonBlack2.style.backgroundColor = '#9900ff';
    sendButtonBlack2.style.color = 'white';
    sendButtonBlack2.innerHTML = "Skicka";

    // Decrease counter
    nrOfBlackTotalComplete--;

    // Change circle border color
    blackCircle2.style.outlineColor = 'white';

    // Set image color
    setBlackImageColor();
}

// Red quest functions
function showRedQuest1() {
    showRedOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    redQuest1.style.display = 'flex';
}

function showRedQuest1Result() {
    // Save user input
    var userInput = document.getElementById('quest-red-1-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-red-1-input').readOnly = true;

        // Change look of send button
        sendButtonRed1.style.backgroundColor = 'white';
        sendButtonRed1.style.color = '#ff4d4d';
        sendButtonRed1.innerHTML = "Skickat!";

        // Display result box
        redQuest1ResultBox.style.display = 'flex';

        // Display user input in the result box
        var displayInput = document.getElementById('user-input-red-1');
        displayInput.innerHTML = userInput;

        // Display redo button
        var redoButton = document.getElementById('redo-button-red-1');
        redoButton.style.display = 'flex';

        // Increase counter
        nrOfRedAComplete++;
        nrOfRedTotalComplete++;

        // Change beam color
        setRedBeamAColors();

        // Change circle border color
        redCircle1.style.outlineColor = redColor;

        // Set image color
        setRedImageColor();
    }
}

function redoRedQuest1() {
    // Hide redo button
    document.getElementById('redo-button-red-1').style.display = 'none';

    // Remove user input from result box
    document.getElementById('user-input-red-1').innerHTML = '(Du har ångrat ditt svar)';

    // Make input writeable
    document.getElementById('quest-red-1-input').readOnly = false;

    // Restore send button
    sendButtonRed1.style.backgroundColor = '#ff4d4d';
    sendButtonRed1.style.color = 'white';
    sendButtonRed1.innerHTML = "Skicka";

    // Decrease counter
    nrOfRedAComplete--;
    nrOfRedTotalComplete--;

    // Change beam color
    setRedBeamAColors();

    // Change circle border color
    redCircle1.style.outlineColor = 'white';

    // Set image color
    setRedImageColor();
}

function showRedQuest2() {
    showRedOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    redQuest2.style.display = 'flex';
}

function showRedQuest2Result() {
    // Change look of send button
    sendButtonRed2.style.backgroundColor = 'white';
    sendButtonRed2.style.color = '#ff4d4d';
    sendButtonRed2.innerHTML = "Klart!";

    // Display redo button
    var redoButton = document.getElementById('redo-button-red-2');
    redoButton.style.display = 'flex';

    // Increase counter
    nrOfRedAComplete++;
    nrOfRedTotalComplete++;

    // Change beam color
    setRedBeamAColors();

    // Change circle border color
    redCircle2.style.outlineColor = redColor;

    // Set image color
    setRedImageColor();
}

function redoRedQuest2() {
    // Hide redo button
    document.getElementById('redo-button-red-2').style.display = 'none';

    // Restore send button
    sendButtonRed2.style.backgroundColor = '#ff4d4d';
    sendButtonRed2.style.color = 'white';
    sendButtonRed2.innerHTML = "Klar";

    // Decrease counter
    nrOfRedAComplete--;
    nrOfRedTotalComplete--;

    // Change beam color
    setRedBeamAColors();

    // Change circle border color
    redCircle2.style.outlineColor = 'white';

    // Set image color
    setRedImageColor();
}

function showRedQuest3() {
    showRedOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    redQuest3.style.display = 'flex';
}

function showRedQuest3Result() {
    // Save user input
    var userInput = document.getElementById('quest-red-3-input').value;
    if (userInput.length != 0) {

        // Make user input read only
        document.getElementById('quest-red-3-input').readOnly = true;

        // Change look of send button
        sendButtonRed3.style.backgroundColor = 'white';
        sendButtonRed3.style.color = '#ff4d4d';
        sendButtonRed3.innerHTML = "Skickat!";

        // Display result box
        document.getElementById('red-3-result-intro').innerHTML = "Vad har andra svarat?";
        redQuest3ResultBox.style.display = 'flex';

        // Display user input in the result box
        var displayInput = document.getElementById('user-input-red-3');
        displayInput.innerHTML = userInput;

        // Display redo button
        var redoButton = document.getElementById('redo-button-red-3');
        redoButton.style.display = 'flex';

        // Increase counter
        nrOfRedBComplete++;
        nrOfRedTotalComplete++;

        // Change beam color
        setRedBeamBColors();

        // Change circle border color
        redCircle3.style.outlineColor = redColor;

        // Set image color
        setRedImageColor();
    }
}

function redoRedQuest3() {
    // Hide redo button
    document.getElementById('redo-button-red-3').style.display = 'none';

    // Remove user input from result box
    document.getElementById('user-input-red-3').innerHTML = "(Du har ångrat ditt svar)";

    // Make input writeable
    document.getElementById('quest-red-3-input').readOnly = false;

    // Restore send button
    sendButtonRed3.style.backgroundColor = '#ff4d4d';
    sendButtonRed3.style.color = 'white';
    sendButtonRed3.innerHTML = "Skicka";

    // Decrease counter
    nrOfRedBComplete--;
    nrOfRedTotalComplete--;

    // Change beam color
    setRedBeamBColors();

    // Change circle border color
    redCircle3.style.outlineColor = 'white';

    // Set image color
    setRedImageColor();
}

function showRedQuest4() {
    showRedOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    redQuest4.style.display = 'flex';
}

function showRedQuest1Tips() {
    redQuest1Tips.style.display = 'inline';
}

function showRedQuest2Tips() {
    redQuest2Tips.style.display = 'inline';
}

function showRedQuest3Tips() {
    redQuest3Tips.style.display = 'inline';
}

function showRedQuest4Tips() {
    redQuest4Tips.style.display = 'inline';
}

// Blue quest functions
function showBlueQuest1() {
    showBlueOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    blueQuest1.style.display = 'flex';
}

function showBlueQuest2() {
    showBlueOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    blueQuest2.style.display = 'flex';
}

function showBlueQuest3() {
    showBlueOverlay();
    hideAllInfoBoxes();
    hideQuests();
    hideQuestTips();
    blueQuest3.style.display = 'flex';
}

function showBlueQuest1Tips() {
    blueQuest1Tips.style.display = 'inline';
}

function showBlueQuest2Tips() {
    blueQuest2Tips.style.display = 'inline';
}

function showBlueQuest3Tips() {
    blueQuest3Tips.style.display = 'inline';
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
    yellowQuest2.style.display = 'none';
    yellowQuest3.style.display = 'none';
    yellowQuest4.style.display = 'none';
    blueQuest1.style.display = 'none';
    blueQuest2.style.display = 'none';
    blueQuest3.style.display = 'none';
    redQuest1.style.display = 'none';
    redQuest2.style.display = 'none';
    redQuest3.style.display = 'none';
    redQuest4.style.display = 'none';
    blackQuest1.style.display = 'none';
    blackQuest2.style.display = 'none';
    blackQuest3.style.display = 'none';
}

function hideQuestTips() {
    // Add the same line of code for all quests here
    greenQuest1Tips.style.display = 'none';
    greenQuest2Tips.style.display = 'none';
    greenQuest3Tips.style.display = 'none';
    yellowQuest1Tips.style.display = 'none';
    yellowQuest2Tips.style.display = 'none';
    yellowQuest3Tips.style.display = 'none';
    yellowQuest4Tips.style.display = 'none';
    blueQuest1Tips.style.display = 'none';
    blueQuest2Tips.style.display = 'none';
    blueQuest3Tips.style.display = 'none';
    redQuest1Tips.style.display = 'none';
    redQuest2Tips.style.display = 'none';
    redQuest3Tips.style.display = 'none';
    redQuest4Tips.style.display = 'none';
    blackQuest1Tips.style.display = 'none';
    blackQuest2Tips.style.display = 'none';
    blackQuest3Tips.style.display = 'none';
}


function hideAllInfoBoxes() {
    greenInfoBox.style.display = 'none';
    yellowInfoBox.style.display = 'none';
    blackInfoBox.style.display = 'none';
    redInfoBox.style.display = 'none';
    blueInfoBox.style.display = 'none';
}

function hideAllOverlayButtons() {
    yellowExitButton.style.display = 'none';
    yellowInfoButton.style.display = 'none';
    blackExitButton.style.display = 'none';
    blackInfoButton.style.display = 'none';
    redExitButton.style.display = 'none';
    redInfoButton.style.display = 'none';
    blueExitButton.style.display = 'none';
    blueInfoButton.style.display = 'none';
    greenExitButton.style.display = 'none';
    greenInfoButton.style.display = 'none';
}

// Coloring functions
function setBeamColorsOnExit() {

    // Yellow beams
    if (nrOfYellowAComplete == 3) {
        yellowBeamA.style.filter = yellowFilterString + 'opacity(1)';
        yellowBeamAPartial1.style.display = 'none';
        yellowBeamAPartial2.style.display = 'none';
    } else if (nrOfYellowAComplete == 2) {
        yellowBeamA.style.filter = 'opacity(1)';

        yellowBeamAPartial1.style.display = 'none';
        yellowBeamAPartial1.style.zIndex = null;

        yellowBeamAPartial2.style.filter = yellowFilterString + 'opacity(1)';
        yellowBeamAPartial2.style.display = 'inline';
        yellowBeamAPartial2.style.zIndex = null;
    } else if (nrOfYellowAComplete == 1) {
        yellowBeamAPartial1.style.filter = yellowFilterString + 'opacity(1)';
        yellowBeamAPartial1.style.display = 'inline';
        yellowBeamAPartial1.style.zIndex = null;
    } else {
        yellowBeamA.style.filter = 'opacity(1)';
    }

    if (nrOfYellowBComplete == 0) {
        yellowBeamB.style.filter = 'opacity(1)';
    } else {
        yellowBeamB.style.filter = yellowFilterString + 'opacity(1)';
    }

    // Black beams
    if (nrOfBlackAComplete == 1) {
        blackBeamA.style.filter = blackFilterString + 'opacity(1)';
    } else {
        blackBeamA.style.filter = 'opacity(1)';
    }

    if (nrOfBlackBComplete == 1) {
        blackBeamB.style.filter = blackFilterString + 'opacity(1)';
    } else {
        blackBeamB.style.filter = 'opacity(1)';
    }

    // Red beams
    if (nrOfRedAComplete == 2) {
        redBeamA.style.filter = redFilterString + 'opacity(1)';
        redBeamAPartial.style.display = 'none';
    } else if (nrOfRedAComplete == 1) {
        redBeamA.style.filter = 'opacity(1)';

        redBeamAPartial.style.filter = redFilterString + 'opacity(1)';
        redBeamAPartial.style.display = 'inline';
        redBeamAPartial.style.zIndex = null;
    } else {
        redBeamA.style.filter = 'opacity(1)';
    }

    if (nrOfRedBComplete == 2) {
        redBeamB.style.filter = redFilterString + 'opacity(1)';
        redBeamBPartial.style.display = 'none';
    } else if (nrOfRedBComplete == 1) {
        redBeamB.style.filter = 'opacity(1)';

        redBeamBPartial.style.filter = redFilterString + 'opacity(1)';
        redBeamBPartial.style.display = 'inline';
        redBeamBPartial.style.zIndex = null;
    } else {
        redBeamB.style.filter = 'opacity(1)';
    }
}

function setYellowBeamAColors() {
    if (nrOfYellowAComplete == 0) {
        yellowBeamA.style.filter = 'opacity(0.5)';
        yellowBeamAPartial1.style.display = 'none';
        yellowBeamAPartial2.style.display = 'none';
    } else if (nrOfYellowAComplete == 1) {
        yellowBeamAPartial1.style.filter = yellowFilterString + 'opacity(0.5)';
        yellowBeamAPartial1.style.display = 'inline';
        yellowBeamAPartial1.style.zIndex = 11;

        yellowBeamAPartial2.style.display = 'none';
        yellowBeamAPartial2.style.zIndex = null;
    } else if (nrOfYellowAComplete == 2) {
        yellowBeamA.style.filter = 'opacity(0.5)';

        yellowBeamAPartial1.style.display = 'none';
        yellowBeamAPartial1.style.zIndex = null;

        yellowBeamAPartial2.style.filter = yellowFilterString + 'opacity(0.5)';
        yellowBeamAPartial2.style.display = 'inline';
        yellowBeamAPartial2.style.zIndex = 11;
    } else if (nrOfYellowAComplete == 3) {
        yellowBeamA.style.filter = yellowFilterString + 'opacity(0.5)';
        yellowBeamAPartial1.style.display = 'none';
        yellowBeamAPartial2.style.display = 'none';
    }
}

function setYellowBeamBColors() {
    if (nrOfYellowBComplete == 0) {
        yellowBeamB.style.filter = 'opacity(0.5)';
    } else {
        yellowBeamB.style.filter = yellowFilterString + 'opacity(0.5)';
    }
}

function setYellowImageColor() {
    let image = document.getElementById('society-background-partial');

    if (nrOfYellowTotalComplete == 4) {
        image.style.filter = 'saturate(100%)';
    } else {
        image.style.filter = 'grayscale(100%)';
    }
}

function setBlackBeamAColors() {
    if (nrOfBlackAComplete == 0) {
        blackBeamA.style.filter = 'opacity(0.5)';
    } else {
        blackBeamA.style.filter = blackFilterString + 'opacity(0.5)';
    }
}

function setBlackBeamBColors() {
    if (nrOfBlackBComplete == 0) {
        blackBeamB.style.filter = 'opacity(0.5)';
    } else {
        blackBeamB.style.filter = blackFilterString + 'opacity(0.5)';
    }
}

function setBlackImageColor() {
    let image = document.getElementById('space-background-partial');

    if (nrOfBlackTotalComplete == 3) {
        image.style.filter = 'saturate(100%)';
    } else {
        image.style.filter = 'grayscale(100%)';
    }
}

function setRedBeamAColors() {
    if (nrOfRedAComplete == 0) {
        redBeamA.style.filter = 'opacity(0.5)';
        redBeamAPartial.style.display = 'none';
    } else if (nrOfRedAComplete == 1) {
        redBeamA.style.filter = 'opacity(0.5)';

        redBeamAPartial.style.filter = redFilterString + 'opacity(0.5)';
        redBeamAPartial.style.display = 'inline';
        redBeamAPartial.style.zIndex = 11;
    } else if (nrOfRedAComplete == 2) {
        redBeamA.style.filter = redFilterString + 'opacity(0.5)';
        redBeamAPartial.style.display = 'none';
    }
}

function setRedBeamBColors() {
    if (nrOfRedBComplete == 0) {
        redBeamB.style.filter = 'opacity(0.5)';
        redBeamBPartial.style.display = 'none';
    } else if (nrOfRedBComplete == 1) {
        redBeamB.style.filter = 'opacity(0.5)';

        redBeamBPartial.style.filter = redFilterString + 'opacity(0.5)';
        redBeamBPartial.style.display = 'inline';
        redBeamBPartial.style.zIndex = 11;
    } else if (nrOfRedBComplete == 2) {
        redBeamB.style.filter = redFilterString + 'opacity(0.5)';
        redBeamBPartial.style.display = 'none';
    }
}

function setRedImageColor() {
    let image = document.getElementById('human-background-partial');

    if (nrOfRedTotalComplete == 4) {
        image.style.filter = 'saturate(100%)';
    } else {
        image.style.filter = 'grayscale(100%)';
    }
}