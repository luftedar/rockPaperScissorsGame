function theGame(userHand){
    function whoWins(...args){
        var pairs = {
            rock : 'scissors',
            paper : 'rock',
            scissors : 'paper'
        }
        console.log((args.map(x=>[pairs[x]]))[0]);
        return (args.map(x=>[pairs[x]]))[0];
    }
    function computerInput(){
        return arr[Math.floor(Math.random()*3)];
    }

    let userScore = 0;
    let drawScore = 0;
    let computerScore = 0;
    let gameCount = 0;
    let arr = ['rock','paper','scissors']

    while(gameCount<5){

        let computerHand = computerInput();
        console.log(computerHand);
        let userInput = prompt('Rock Paper Scissors?')
        let userHand = userInput.toLowerCase();
        if(userHand===computerHand){
            console.log('Draw',userHand,computerHand);
            drawScore++;
            gameCount++;
        }else if(whoWins(userHand)==computerHand){
            console.log('You win',userHand,computerHand)
            userScore++;
            gameCount++;
        }else if(whoWins(computerHand)==userHand) {
            console.log('You Lost',userHand,computerHand)
            computerScore++;
            gameCount++;
        }
        console.log('Game number:'+gameCount+' Your Score: '+userScore+' Computer Score: '+computerScore+' Draw:'+drawScore)
        if(gameCount==5){
            return 'Game number:'+gameCount+' Your Score: '+userScore+' Computer Score: '+computerScore;
        }
        
    }
}


console.log(theGame());

