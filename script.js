const options = ['rock','paper','scissors']
let computerPoints = 0
let playerPoints = 0
let round = 1

function computerPlay(){
    let optionIndex = Math.floor(Math.random()*3)
    return options[optionIndex]
}


function singleRound(player,computer){
    if(player.toLowerCase() === computer){
        return 'Draw'
    }else{
        if(
            (player.toLowerCase() == 'rock' && computer == 'scissors') ||
            (player.toLowerCase() == 'paper' && computer == 'rock') ||
            (player.toLowerCase() == 'scissors' && computer == 'paper')
        ){
            playerPoints++
            return `You won!${player} beats ${computer}`
        }else{
            computerPoints++
            return `You lost!${computer} beats ${player}`
        }
    }
} 

function game(){
    while(playerPoints < 5 && computerPoints < 5){
        
        console.log(`Round ${round}. Fight!`)
        let playerChoice = prompt('What\'s your choice? Rock, paper or scissors?')
        let computerChoice = computerPlay()

        console.log(singleRound(playerChoice,computerChoice))
        console.log(`Player points: ${playerPoints}`)
        console.log(`Computer points: ${computerPoints}`)
        round++
    }
    if(playerPoints == 5){
        console.log('gratz you won')
    }else{
        console.log('you lost')
    }
}

game()
