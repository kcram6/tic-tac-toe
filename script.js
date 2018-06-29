var tiles = document.querySelectorAll('#board > div');
var turn = document.querySelector('h3');
//querySelector gives you the first element found
//querySelectorAll gives all elements that match the selector and returns it as a list

//gdpr
var player1 = true;
console.log(tiles);

tiles.forEach(function (tile) {
    tile.onclick = function  () {
        if (tile.innerHTML == "") {
            if (player1) {
                tile.innerHTML = 'X';
                tile.style.color = 'red';
                checkWinner('X');
                turn.innerHTML = 'Player O\'s Turn';
                turn.style.color = 'blue';
                player1 = false;
            } else {
                tile.innerHTML = 'O';
                tile.style.color = 'blue';
                turn.style.color = 'red';
                checkWinner('O');
                turn.innerHTML = 'Player X\'s Turn';
                player1 = true;

            }
        }
    };
});
//                              .row, .col1, x or o
var checkThreeTiles = function (selector, symbol) {
    var set = document.querySelectorAll(selector);
    var match = true;
    set.forEach(function (tile) {
        if (tile.innerHTML != symbol) {
            match = false;
        }      
    });
    return match;
};

var checkWinner = function (symbol) {
    var row1 = checkThreeTiles('.row1', symbol);
    var row2 = checkThreeTiles('.row2', symbol);
    var row3 = checkThreeTiles('.row3', symbol);
    var col1 = checkThreeTiles('.col1', symbol);
    var col2 = checkThreeTiles('.col2', symbol);
    var col3 = checkThreeTiles('.col3', symbol);
    var diag1 = checkThreeTiles('.diag1', symbol);
    var diag2 = checkThreeTiles('.diag2', symbol);
    
    if (row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2) {
        alert('winner');
    }
    
};

//function syntax
// var NAME = function (parameters) {}