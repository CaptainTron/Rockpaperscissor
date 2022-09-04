const totalscore = { computerScore: 0, playerScore: 0}

function getcomputerchoice() {
    const rpschoice = ['Rock','Paper','Scissors']
    const randomnumber = Math.floor( Math.random()*3 )
    return rpschoice[randomnumber]
}
function getResult(playerChoice, computerChoice) {
    let score;
    if( playerChoice == computerChoice){ 
    score = 0
    totalscore['computerScore']+= 0
    }
    else if ( playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }
    else if ( playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    } else if ( playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    }
    else{
       score = -1
       totalscore['computerScore']+= 1
 }
    return score
}
function showresult(score,playerChoice,computerChoice)
{
    const resultdiv = document.getElementById('result')
    const handdiv = document.getElementById('hands')
    const playerscorediv = document.getElementById('player-score')
    if(score == -1 ) {
        resultdiv.innerText = "You Lose"
    }
    else if(score == 0 ){
        resultdiv.innerText = "It's a tie"
    }
    else{
        resultdiv.innerText = "You Win"
    }
    handdiv.innerText = "Computer Choice is: " + computerChoice
    playerscorediv.innerText =  "Your Score is : " + totalscore["playerScore"] + "  Computer Score is : " +totalscore["computerScore"]
    
}
function onClickgames(playerChoice){
    // console.log({playerChoice})
    const computerChoice = getcomputerchoice()
    // console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalscore['playerScore'] += score
    // console.log({score})
    // console.log(totalscore) 
    showresult(score,playerChoice,computerChoice)
}
function playGame(){
    const games = document.querySelectorAll('.game')
    // games[0].onclick = () => alert(games[0].value)
    
    games.forEach(game => {
        game.onclick = () => onClickgames(game.value)
    })
}
const endgamebutton = document.getElementById("endGameButton")
endgamebutton.onclick = () =>endgame(totalscore)
function endgame(totalscore)
{
    totalscore['playerScore'] = 0
    totalscore['computerScore'] = 0

    const resultdiv = document.getElementById('result')
    const handdiv = document.getElementById('hands')
    const playerscorediv = document.getElementById('player-score')

    resultdiv.innerText = ''
    handdiv.innerText = ''
    playerscorediv.innerText = ''
}
playGame()
