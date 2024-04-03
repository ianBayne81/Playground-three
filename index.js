//key variables
const startButton = document.querySelector("#startButton")
const rockEl = document.querySelector("#rock")
const paperEl = document.querySelector("#paper")
const scissorsEl = document.querySelector("#scissors")
const playerChoice = document.querySelector(".player-symbol")
const cpuChoice= document.querySelector(".cpu-symbol")
const restartEl= document.querySelector("#restart")
let newGame

//create gsap animation 
const animate = gsap.timeline({repeat:-1}).timeScale(1)
animate.fromTo("#nuckle", {y: 0}, {y: -10, ease:'powerOne'}).pause()

//create game constructor function
class Game {
    constructor() {
    this.cpuArray = ["Rock", "Paper", "Scissors"]
    this.cpuResult = ""
    this.cpuScore = 0
    this.playerScore = 0
    this.status = "Playing"
    }

    renderStatus() {
    const summaryEl = document.querySelector("#summary")
    summaryEl.innerHTML = ""
    let summary = document.createElement("p")
    summary.textContent = this.status
    summaryEl.appendChild(summary)
    }

    
    renderScores() {
    const cpuEl = document.querySelector("#cpuScore")
    cpuEl.innerHTML = ""
    const createCpuScore = document.createElement("p")
    createCpuScore.textContent = this.cpuScore
    cpuEl.appendChild(createCpuScore)

    const playerEl = document.querySelector("#playerScore")
    playerEl.innerHTML = ""
    const createPlayerScore = document.createElement("p")
    createPlayerScore.textContent = this.playerScore
    playerEl.appendChild(createPlayerScore)
    }

    clear() {
        playerChoice.className = "player-symbol"
        cpuChoice.className = "cpu-symbol"
        this.status = "Playing"
    }

    cpuFunction() {
        this.cpuResult = this.cpuArray[Math.floor(Math.random() * this.cpuArray.length)]
        
        if (this.cpuResult == "Rock") {
            cpuChoice.classList.toggle("cpu-rock")
        } else if (this.cpuResult == "Paper") {
            cpuChoice.classList.toggle("cpu-paper")
        } else if (this.cpuResult == "Scissors") {
            cpuChoice.classList.toggle("cpu-scissors")
        }
    }
    
}


//start new game when click button
startButton.addEventListener("click", (e) => {
    e.preventDefault()
    newGame = new Game()
    newGame.clear()
    newGame.renderStatus()
    newGame.renderScores()
    animate.resume()

})

restartEl.addEventListener("click", (e) => {
    e.preventDefault()
    animate.resume()
    newGame.clear()
    newGame.renderStatus()
})

rockEl.addEventListener("click", (e) => {
    let classResult = e.target.className  
    playerChoice.classList.toggle(classResult)
    newGame.cpuFunction()
    if (newGame.cpuResult === "Rock") {
        newGame.status = "It's a tie!"
    } else if (newGame.cpuResult ==="Paper") {
        newGame.status = "CPU wins!"
        newGame.cpuScore = newGame.cpuScore + 1
    } else if (newGame.cpuResult === "Scissors") {
        newGame.status = "Player wins!"
        newGame.playerScore = newGame.playerScore + 1
    }
    
    animate.pause()
    newGame.renderStatus()
    newGame.renderScores()

})
        
paperEl.addEventListener("click", (e) => {
    let classResult = e.target.className  
    playerChoice.classList.toggle(classResult)
    newGame.cpuFunction()
    if (newGame.cpuResult === "Rock") {
        newGame.status = "Player wins!"
        newGame.playerScore = newGame.playerScore + 1
    } else if (newGame.cpuResult ==="Paper") {
        newGame.status = "It's a tie!"
    } else if (newGame.cpuResult === "Scissors") {
        newGame.status = "CPU wins!"
        newGame.cpuScore = newGame.cpuScore + 1
                
    }
    
    animate.pause()
    newGame.renderStatus()
    newGame.renderScores()

})

scissorsEl.addEventListener("click", (e) => {
    let classResult = e.target.className  
    playerChoice.classList.toggle(classResult)
    newGame.cpuFunction()
    if (newGame.cpuResult === "Rock") {
        newGame.status = "CPU wins!"
        newGame.cpuScore = newGame.cpuScore + 1
    } else if (newGame.cpuResult ==="Paper") {
        newGame.status = "Player wins!"
        newGame.playerScore = newGame.playerScore + 1
    } else if (newGame.cpuResult === "Scissors") {
        newGame.status = "It's a tie!"
    }

    animate.pause()
    newGame.renderStatus()
    newGame.renderScores()

})

    