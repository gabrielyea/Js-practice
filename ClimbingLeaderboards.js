function climbingLeaderboard(scores, alice) {
    
    let leaderBoard = createLeaderBoard(scores);
    let rankProgression = []
    
    alice.forEach(score => {
        updateLeaderBoard("alice", score, leaderBoard)
        setRank(leaderBoard);
        rankProgression.push(getRank("alice", leaderBoard))
    })
    
    return rankProgression;
}

function createLeaderBoard(scores){
    
    let leaderBoard = []

    scores.forEach((score, index) => {
        leaderBoard.push(new PlayerEntry(index, score))
    })
    
    return setRank(leaderBoard);
}

function setRank(leaderBoard){
    leaderBoard.sort(sortLeaderBoard);
    let currentScore = leaderBoard[0].score;
    let currentRank = 1;
    
    
    
    leaderBoard.forEach(player =>{
        if(player.score === currentScore){
            player.rank = currentRank;
        }
        else if(player.score != currentScore){
            currentScore = player.score;
            currentRank++;
            player.rank = currentRank;
        }  
    });

    return leaderBoard;
}

function getRank(index, leaderBoard){
    return(leaderBoard.find(player => player.index === index).rank)
}

function sortLeaderBoard(player2, player1){
    return player1.score - player2.score;
}

function PlayerEntry(index, score){
    this.index = index;
    this.score = score;
    this.rank = 0;
}

function updateLeaderBoard(index, score, leaderBoard){
    let foundPlayer;
    foundPlayer = (leaderBoard.find(player => player.index === index))
    if(foundPlayer != null){
        foundPlayer.score = score;
    }
    else{
        leaderBoard.push(new PlayerEntry(index, score));
    }
    //leaderBoard.push(new PlayerEntry(index, score));
}
