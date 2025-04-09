const Gameboard ={
    board: ["", "", "", "", "", "","", "", ""]
    
}

const players = {
    player1: {name: "Player 1", symbol: "X"},
    player2: {name: "Player 2", symbol: "O"},
}

function winGame(){
    var winningSymbol = null;
    if(Gameboard.board[0] === Gameboard.board[1] && Gameboard.board[1]===Gameboard.board[2] ||
        Gameboard.board[0] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[8] ||
        Gameboard.board[0] === Gameboard.board[3] && Gameboard.board[3] === Gameboard.board[6]
    ){
        winningSymbol = Gameboard.board[0];
    }
    else if(Gameboard.board[3] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[5]){
        winningSymbol = Gameboard.board[3];
    }
    else if(Gameboard.board[6] === Gameboard.board[7] && Gameboard.board[7] === Gameboard.board[8] ||
        Gameboard.board[1] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[7]){
        winningSymbol = Gameboard.board[7];
    } 
    else if(Gameboard.board[2] === Gameboard.board[5] && Gameboard.board[5] === Gameboard.board[8] ||
        Gameboard.board[2] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[6]){
        winningSymbol = Gameboard.board[2];
    }else{
        return false;
    }

    return winningSymbol;

    if(winningSymbol===null){
        return "Its a tie!";
    }
    
}

function declareWinner(){
    if(winGame()===players.player1.symbol){
        return players.player1.name + " wins the game";
    }else{
        return players.player2.name + " wins the game";
    }
}

function playGame(){
    while(!winGame()){
        let playOptions = [0,1,2,3,4,5,6,7,8];
        let currentPlayer = players.player1;
        let currentSelection = playOptions[Math.floor(Math.random()*8)];
        Gameboard.board[currentSelection] = currentPlayer.symbol;
        playOptions.splice(playOptions.indexOf(currentSelection),1)
        console.log(Gameboard.board);

        if(winGame()){
            break;
        }

        currentPlayer = players.player2;
        currentSelection = playOptions[Math.floor(Math.random()*8)];
        Gameboard.board[currentSelection] = currentPlayer.symbol;
        playOptions.splice(playOptions[currentSelection],1)
        console.log(Gameboard.board);

        if(winGame()){
            break;
        }
    }
    console.log(declareWinner());
}

playGame()