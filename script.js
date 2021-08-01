const humanBtns = document.querySelectorAll('#humanChoice')
const choices = ['rock','paper','scissors']
const log = document.getElementById('log')

let humanScoreSpan = document.getElementById('humanScore')
let computerScoreSpan = document.getElementById('computerScore')
let humanScore = 0
let computerScore = 0

//Event Listeners

humanBtns.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        singleRound(`${e.target.value}`)
        console.log(e.target.value)
    })
})

//Functions
function computerMove(){
    let index = Math.floor(Math.random()*3)
    return choices[index]
}

function checkScore(){
    if(humanScore == 5 || computerScore == 5){
        if(humanScore == 5){
            alert('You won the game! Congratulations!')
        }else{
            alert('You lost! Computer is victorious!')
        }
        computerScoreSpan.textContent = '0'
        humanScoreSpan.textContent = '0'
        log.textContent = ''
        humanScore = 0
        computerScore = 0
    }
}

function loggingMoves(phrase){
    let para = document.createElement('p')
    para.textContent = phrase
    log.appendChild(para)
}

function singleRound(humanMove){
    let computerChoice = computerMove()
    console.log(`Your move is ${humanMove}`)
    console.log(`Computer move is ${computerChoice}`)
    if(humanMove == computerChoice){
        loggingMoves('Draw')
    }else if((humanMove == 'rock' && computerChoice == 'scissors') 
          || (humanMove == 'scissors' && computerChoice == 'paper')
          || (humanMove == 'paper' && computerChoice == 'rock')){
              loggingMoves(`You win this round. Your ${humanMove} beat computer's ${computerChoice}`)
              humanScore++
              humanScoreSpan.textContent = `${humanScore}`
              checkScore()
    }else{
        loggingMoves(`You lose this round. Computer's ${computerChoice} beat your ${humanMove}`)
        computerScore++
        computerScoreSpan.textContent = `${computerScore}`
        checkScore()
    }
}