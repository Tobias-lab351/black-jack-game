
    let player= {
        name:"Tobias",
        chips:145,
        sayHello: function() {
            console.log("Hello Tobby")
        }
}
    let cards = []
    let sum = 2
    let isAlive = true
    let hasBlackJack = false
    let message = " "
    let messageEl = document.querySelector(".message-el")
    let sumEl = document.querySelector(".sum-el")
    let cardsEl = document.querySelector(".cardsEl")
    let playerData = document.getElementById("player-el")

    //rendering player name
    playerData.textContent= player.name + ": Ksh" +player.chips

    function getRandomCard() {
         let randomNumber  = Math.floor(Math.random()*13) + 1
         if (randomNumber > 10){
            return 10
         }
         else if (randomNumber === 1){
            return 11
         }
         else {
            return randomNumber
         }
}


    function startGame() {
        isAlive=true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        let cards = [firstCard, secondCard]
        let sum = cards[0] + cards[1]
        renderGame()
    }

function renderGame() {  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = " Wohoo, You've got a blackjack?" 
        hasBlackJack = true   
    }
    else {
        message = "You are out of the game"
        isAlive = false
    }  
messageEl.textContent=message
sumEl.textContent="Sum:" + sum
cardsEl.textContent = "Cards: "

for (let i=0; i<cards.length; i += 1){
    cardsEl.textContent += cards[i] + " "
}
}

function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
}


player.sayHello()









     
    