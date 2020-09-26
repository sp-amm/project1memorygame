
let hasFlippedCard = false;
let firstCard;
let secondCard;


//flip card function
$('.memoryCard').click(function(){
    this.classList.toggle('flip')


if (hasFlippedCard===false){
    //first click
    hasFlippedCard = true;
    firstCard = this;
    console.log(this);
}
else {
    //second click
    hasFlippedCard = false;
    secondCard = this;
    console.log(this);
   //add Jquery selector 
    if (firstCard.id === secondCard.id){
        //remove class temp 
        //turn off event listener
        firstCard.classList.add('hidden')
        firstCard.classList.remove("memoryCard")
        secondCard.classList.add('hidden')
        secondCard.classList.remove("memoryCard")
        console.log("working")
    } 
}
})
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
