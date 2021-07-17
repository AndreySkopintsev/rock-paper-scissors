const options = ['rock','paper','scissors']


function computerPlay(){
    let optionIndex = Math.floor(Math.random()*3)
    return options[optionIndex]
}

function singleRound(playerMove,computerMove){
    if(playerMove.toLowerCase() == 'paper' || playerMove.toLowerCase() == 'rock' || playerMove.toLowerCase() == 'scissors'){
        
        console.log(`You chose ${playerMove.toLowerCase()}`)
        console.log(`Computer chose ${computerMove}`)
        if(playerMove.toLowerCase() == 'paper'){
            if(computerMove == 'scissors'){
                return 'You lose! Good day, sir!'
            }else if(computerMove == 'paper'){
                return 'It\'s a draw. Move along.'
            }else{
                return 'You won! Congrats!'
            }
        }else if(playerMove.toLowerCase() == 'rock'){
            if(computerMove == 'scissors'){
                return 'You won! Congrats!'
            }else if(computerMove == 'paper'){
                return 'You lose! Good day, sir!'
            }else{
                return 'It\'s a draw. Move along.'
            }
        }else{
            if(computerMove == 'scissors'){
                return 'It\'s a draw. Move along.'
            }else if(computerMove == 'paper'){
                return 'You won! Congrats!'
            }else{
                return 'You lose! Good day, sir!'
            }
        }
    }else{
        return 'Invalid input. Please try again.'
    }
    
}

let playerSelection = 'paper'
let computerSelection = computerPlay()

console.log(singleRound(playerSelection,computerSelection))