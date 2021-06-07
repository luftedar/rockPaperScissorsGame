function theGame(userHand){
    function whoWins(...args){
        var pairs = {
            rock : 'scissors',
            paper : 'rock',
            scissors : 'paper'
        }
        return args.map(x=>[pairs[x]])
    }

    let userScore = 0;
    let computerScore = 0;
    let gameCount = 0;
    let arr = ['rock','paper','scissors']
    function computerInput(){
        return arr[Math.floor(Math.random()*3)];
    }
    while(gameCount<5){
        let userInput = prompt('Rock Paper Scissors?')
        let userHand = userInput.toLowerCase();
        let computerHand = computerInput();
        if(userHand===computerHand){
            console.log('Draw',userHand,computerHand)
            gameCount++;
        }else if(whoWins(userHand)===computerHand){
            console.log('You win',userHand,computerHand)
            userScore++;
            gameCount++;
        }else{
            console.log('You Lost',userHand,computerHand)
            computerScore++;
            gameCount++;
        }
        if(gameCount==5){
            return gameCount+''+'Puanın:'+userScore+'Bilgisayar:'+computerScore;
        }
        
    }
}


console.log(theGame());

