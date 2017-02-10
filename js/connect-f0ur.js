function ConnectFour(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winner = null;
    this.board = [
        //0   //1  //2  //3  //4  //5  //6  Index
        [null, null, null, null, null, null, null], // 0
        [null, null, null, null, null, null, null], // 1
        [null, null, null, null, null, null, null], // 2
        [null, null, null, null, null, null, null], // 3
        [null, null, null, null, null, null, null], // 4
        [null, null, null, null, null, null, null], // 5

    ];
    if (Math.random() < 0.5) {
        this.currentPlayer = this.player1;
    } else {
        this.currentPlayer = this.player2;
    }
}
