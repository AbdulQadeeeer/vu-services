const games = [
    "./games/Menja/Menja.html",
    "./games/js-Planet-Defence/js-Planet-Defence.html",
    "./games/Snake/Snake.html",
   
];

let currentGameIndex = 0;

function showGame(index) {
    const iframe = document.getElementById('currentGame');
    iframe.src = games[index];
    currentGameIndex = index;
}

function showPreviousGame() {
    currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
    showGame(currentGameIndex);
}

function showNextGame() {
    currentGameIndex = (currentGameIndex + 1) % games.length;
    showGame(currentGameIndex);
}
