//object
var player = {
    name :"C.S.E",
    chips : 100
}
var cards = [];
var sum = 0;

var hasBlackjack = false;
var isAlive = false;

var message ="";

var messageEl = document.getElementById("msg"); 

//var sumEl = document.getElementById("sum");
var sumEl = document.querySelector("#sum");
var cardsEl = document.querySelector("#cards")

var playerEl = document.getElementById("player");

playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard(){
    var rand = Math.random()*13;
    var ret = Math.ceil(rand);

    if (ret ===1){
        ret = 11;
    }else if(ret >=11){
        ret = 10;
    } 
    return ret;
    console.log(ret);
}

function startGame(){
    isAlive = true;
    var firstCard = getRandomCard();
    var secondCard = getRandomCard();

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame(){

    cardsEl.textContent = "Cards : ";
    for(var i=0; i<cards.length; i++){
        cardsEl.textContent +=+ cards[i] + " ";
    }

    sumEl.textContent = "Sum : " + sum;
    

    if(sum <= 20){
        message = "Do you want to draw a new card? 🙂";

    }else if(sum ===21){
        message = "Woohoo! You've got the blackjack... 🥳";
        hasBlackjack = true;

    }else{
        message = "You're out of the game!!! 😭";
        isAlive = false
    }

    messageEl.textContent= message;

}

function newcard(){
    console.log(isAlive);
    console.log(hasBlackjack);
    if(isAlive === true && hasBlackjack === false){
        var card = getRandomCard();
        cards.push(card);
        console.log(cards);

        sum += card;
        
        renderGame();
    }
}
//console.log(message)
/*
//cash out
console.log(hasBlackjack);

//is game still going 
console.log(isAlive);
*/