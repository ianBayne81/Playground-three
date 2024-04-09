//key variables
const startButton = document.querySelector("#startButton")
const playerChoice = document.querySelector(".player-symbol")
const cpuChoice= document.querySelector(".cpu-symbol")
const restartEl= document.querySelector("#restart")
const bottomEl= document.querySelector("#bottom-element")
const buttonEl = document.querySelector("#buttonOne")

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

    renderPlayerChoices() {
        bottomEl.innerHTML = ""

        const rockButton = document.createElement("button")
        rockButton.classList.add("rock-element")
        rockButton.setAttribute("id", "rock")
        bottomEl.appendChild(rockButton)
    
        rockButton.addEventListener("click", (e) => {
            
            if (playerChoice.className !== "player-symbol") {
                return
            } else {
                let classResult = e.target.className  
                playerChoice.classList.toggle(classResult)
                this.cpuFunction()
                if (this.cpuResult === "Rock") {
                    this.status = "It's a tie!"
                } else if (this.cpuResult ==="Paper") {
                    this.status = "CPU wins!"
                    this.cpuScore++
                } else if (this.cpuResult === "Scissors") {
                    this.status = "Player wins!"
                    this.playerScore++
                }
                
                animate.pause()
                this.renderStatus()
                this.renderScores()

            }

        })

        const paperButton = document.createElement("button")
        paperButton.classList.add("paper-element")
        paperButton.setAttribute("id", "paper")
        bottomEl.appendChild(paperButton)

        paperButton.addEventListener("click", (e) => {

            if (playerChoice.className !== "player-symbol") {
                return
            } else {
                let classResult = e.target.className  
                playerChoice.classList.toggle(classResult)
                this.cpuFunction()
                if (this.cpuResult === "Rock") {
                    this.status = "Player wins!"
                    this.playerScore++
                } else if (this.cpuResult ==="Paper") {
                    this.status = "It's a tie!"
                } else if (this.cpuResult === "Scissors") {
                    this.status = "CPU wins!"
                    this.cpuScore++
                }
                
                animate.pause()
                this.renderStatus()
                this.renderScores()

            }
        
        })

        const scissorsButton = document.createElement("button")
        scissorsButton.classList.add("scissors-element")
        scissorsButton.setAttribute("id", "scissors")
        bottomEl.appendChild(scissorsButton)

        scissorsButton.addEventListener("click", (e) => {

            if (playerChoice.className !== "player-symbol") {
                return
            } else {
                let classResult = e.target.className  
                playerChoice.classList.toggle(classResult)
                this.cpuFunction()
                if (this.cpuResult === "Rock") {
                    this.status = "CPU wins!"
                    this.cpuScore = this.cpuScore + 1
                } else if (this.cpuResult ==="Paper") {
                    this.status = "Player wins!"
                    this.playerScore = this.playerScore + 1
                } else if (this.cpuResult === "Scissors") {
                    this.status = "It's a tie!"
                }
            
                animate.pause()
                this.renderStatus()
                this.renderScores()

            }
        
        })
        
    }

    renderRestartButton() {

        buttonEl.innerHTML = ""
        const restartButton = document.createElement("button")
        restartButton.classList.add("bottomButton")
        restartButton.setAttribute("id", "restart")
        restartButton.textContent = "Make your selection"
        buttonEl.appendChild(restartButton)

        restartButton.addEventListener("click", (e) => {
            e.preventDefault()
            animate.resume()
            this.clear()
            this.renderStatus()
            this.renderPlayerChoices()
        })

    }
    
}

//click button to start new game
startButton.addEventListener("click", (e) => {
    e.preventDefault()
    newGame = new Game()
    newGame.clear()
    newGame.renderStatus()
    newGame.renderScores()
    bottomEl.innerHTML = ""
    newGame.renderRestartButton()
    animate.pause()

})






    