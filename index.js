
//create game constructor function
class Game {
    constructor() {
    this.remainingGames = 3
    this.cpuResult = []
    this.playerResult = []
    this.cpuScore = 0
    this.playerScore = 0
    this.status = "Playing"
    }
}

//key variables
const newGame = new Game
const summaryEl = document.querySelector("#summary")
const cpuEl = document.querySelector("#cpuScore")
const playerEl = document.querySelector("#playerScore")
const startButton = document.querySelector("#startButton")
const rockEl = document.querySelector("#rock")
const paperEl = document.querySelector("#paper")
const scissorsEl = document.querySelector("#scissors")
const playerChoice = document.querySelector(".player-symbol")
const cpuChoice= document.querySelector(".cpu-symbol")


//cpu's choices
const cpuArray = ["Rock", "Paper", "Scissors"]
let result =  cpuArray[Math.floor(Math.random() * cpuArray.length)]

const cpuResult = function () {

    if (result == "Rock") {
        cpuChoice.classList.toggle("cpu-rock")
    } else if (result == "Paper") {
        cpuChoice.classList.toggle("cpu-paper")
    } else if (result == "Scissors") {
        cpuChoice.classList.toggle("cpu-scissors")
    }
}

//renderScores 
const renderScores = function () {
    cpuEl.innerHTML = ""
    const createCpuScore = document.createElement("p")
    createCpuScore.textContent = newGame.cpuScore
    cpuEl.appendChild(createCpuScore)

    playerEl.innerHTML = ""
    const createPlayerScore = document.createElement("p")
    createPlayerScore.textContent = newGame.playerScore
    playerEl.appendChild(createPlayerScore)
}

//render status summary
const renderStatus = function () {
    summaryEl.innerHTML = ""
    let summary = document.createElement("p")
    summary.textContent = newGame.status
    summaryEl.appendChild(summary)
}


//render newGame info to the header element
const render = function() {  

    //call render status function
    renderStatus()

    //eventlisteners for selection
    rockEl.addEventListener("click", (e) => {
        let classResult = e.target.className  
        playerChoice.classList.toggle(classResult)
        cpuResult()
        if (result === "Rock") {
            newGame.status = "It's a tie!"
        } else if (result ==="Paper") {
            newGame.status = "CPU wins!"
            newGame.cpuScore = newGame.cpuScore + 1
        } else if (result === "Scissors") {
            newGame.status = "Player wins!"
            newGame.playerScore = newGame.playerScore + 1
        }
        
        renderStatus()
        renderScores()
    })

    paperEl.addEventListener("click", (e) => {
        let classResult = e.target.className  
        playerChoice.classList.toggle(classResult)
        cpuResult()
        if (result === "Rock") {
            newGame.status = "Player wins!"
            newGame.playerScore = newGame.playerScore + 1
        } else if (result ==="Paper") {
            newGame.status = "It's a tie!"
        } else if (result === "Scissors") {
            newGame.status = "CPU wins!"
            newGame.cpuScore = newGame.cpuScore + 1
            
        }

        renderStatus()
        renderScores()

    })

    scissorsEl.addEventListener("click", (e) => {
        let classResult = e.target.className  
        playerChoice.classList.toggle(classResult)
        cpuResult()
        if (result === "Rock") {
            newGame.status = "CPU wins!"
            newGame.cpuScore = newGame.cpuScore + 1
        } else if (result ==="Paper") {
            newGame.status = "Player wins!"
            newGame.playerScore = newGame.playerScore + 1
        } else if (result === "Scissors") {
            newGame.status = "It's a tie!"
        }

        renderStatus()
        renderScores()

    })

}


//start new game when click button
startButton.addEventListener("click", function (e) {
    e.preventDefault()
    newGame
    render()
    renderScores()
})
