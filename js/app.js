var myGlobalConnectGame;
$(document).ready(function() {
  var player1 = prompt('enter name for player 1:');
  var player2 = prompt('enter name for player 2:');
    myGlobalConnectGame = new ConnectFour(player1,player2);
    console.log(myGlobalConnectGame);
    renderBoard();
    updateCurrentPlayer();

  function updateCurrentPlayer() {
    if (myGlobalConnectGame.currentPlayer === myGlobalConnectGame.player1) {
      $('#current-player').html(myGlobalConnectGame.player1 + " 's Turn");
      $('#current-player').addClass('player1');
      $('#current-player').removeClass('player2');
    }

    else {
      $('#current-player').html(myGlobalConnectGame.player2 + " 's Turn");
      $('#current-player').addClass('player2');
      $('#current-player').removeClass('player1');
    }

    $('#current-player').css('visibility', 'visible');


    }
});

function renderBoard() {
  $('#board').empty();

  myGlobalConnectGame.board.forEach(function (row) {
    row.forEach(function (slot){
      var checkerClass;

        if (slot === 1) {
          checkerClass = 'checker-player-1';
        }

        else if (slot === 2 ) {
          checkerClass = 'checker-player-2';
        }

        else {
          checkerClass = '';
        }

        var slotHTML = '<div class="square"><div class="slot  ' + checkerClass + '"></div></div>';
        $('#board').append(slotHTML);
    });
  });
}
