//Pseudocode

//Easy- 10 cards w/Timer counting up
//Meduim- 16 cards w/Timer counting up 
//Hard- 22 cards w/Timer counting up
//beat the clock

//on click, hide menu

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