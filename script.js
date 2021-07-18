const options = ['rock','paper','scissors']


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
            return `You won!${player} beats ${computer}`
        }else{
            return `You lost!${computer} beats ${player}`
        }
    }
} 



