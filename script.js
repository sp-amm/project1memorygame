
let hasFlippedCard = false;
let lockBoard = false; //stops user spam clicking
let firstCard;
let secondCard;

const cards = document.querySelectorAll('.memoryCard');
cards.forEach(card => card.addEventListener('click',flipCard));


//flip card function
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip')
    

if (hasFlippedCard===false){

    //first click
    hasFlippedCard = true;
    firstCard = this;
    console.log(this);
    moveCounter();
}
else {

    //second click
    secondCard = this;
    console.log(this);
   
    checkMatch();
    
}

}

function checkMatch (){
    if (firstCard.id === secondCard.id){
        //remove class temp 
        //turn off event listener
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        
        tallyScore(); //Tallys the score
        resetBoardstate(); //Resets the board

    } else {
        lockBoard = true;
        setTimeout(() => {
        firstCard.classList.remove('flip'); //removes event listner
        secondCard.classList.remove('flip');
        
        resetBoardstate(); //Resets the board 
    }, 1500);
}
}
function resetBoardstate(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    
} //resets board state after cards have been selected 

//runs on start up
(function shuffle(){
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    });
})(); //immediate function

//Timer
var totalseconds = 0;
var secondsElapsed = 0;
var interval;
function startTimer(){   
    let time = 0;
    let timerInterval = setInterval(function(){
        document.getElementById("timer").innerHTML = time
        time ++;
        if(time == 100){
            clearInterval(timerInterval);
        }                    
    },1000);
}
startTimer()

//Move counter
var moves=0;
function moveCounter(){
    moves += 1;
    document.getElementById("moves").innerHTML = moves;
}
//score
var score=0;
function tallyScore(){
    score +=1;
    document.getElementById("score").innerHTML=score
}

function restartGame(){
    location.reload();
    //button that reloads game
    //atm just refreshes the page
}

//Pseudocode

//Easy- 10 cards w/Timer counting up
//Meduim- 16 cards w/Timer counting up 
//Hard- 22 cards w/Timer counting up
//beat the clock

//on click, hide menu
//shows rules

//set gameboard
    //start timer
    //call API to card fronts
    //store in cache/local storage
    //using each image twice
    //asign gifs at random

//gameplay    
    //count moves
    //score displayed
    //cards clicked
    //two clicks
    //if cards = same then hide +2 score (Reset clicks)
    //if else cards = different -1 flip back (Reset clicks)
    //all cards hidden then end game
    //show score + remaining time
    //button restart + return to menu

    //giphy api key = JitPy4nJ4f7RAjv9P6V2YfrZqtdpPymb
    
    //var gameNumber = "6";

    var queryurl = "https://api.giphy.com/v1/gifs/trending?api_key=JitPy4nJ4f7RAjv9P6V2YfrZqtdpPymb&tag=&rating=g&limit=25";

    $.ajax({
        url: queryurl,
        type: "GET",
    

        }).then(function(response) {
            console.log(response);
            //var imageUrl = response.data.images.fixed_width_small.url
            var results = response.data
            console.log(results);
            //function showImages(){
           for (var i = 0; i < results.length; i++) {
                
                //displaying the called images
                var imageUrl = results[i].images.fixed_width_small.url
                console.log(imageUrl);
                var cardImage = $("<img>");
                cardImage.attr("src", imageUrl);
                $(".card").append(cardImage);

                //storing giphy images
                localStorage.setItem("Image: " + i, imageUrl);
            
            };
       });
//how many are in there 