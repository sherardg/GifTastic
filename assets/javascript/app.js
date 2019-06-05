    //Created an array of topics for the exercise

    var topics = ["dogs", "cats", "hampsters", "turtles", "birds", "goldfish", "snakes"]
    
    //Your app should take the topics in this array and create buttons in your HTML.
    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>"+ topics.text + "</button>")
        buttons.append("topics");
    }

    //Try using a loop that appends a button for each string in the array.
    //Buttons for array of pets

    <button data-search = "dogs">Dogs</button>
    <button data-search = "cats">Cats</button>
    <button data-search = "hampsters">Hampsters</button>

    //Button triggered Ajax

    $("button").on('click', function(){
        var j = $(this).data("search");
        console.log("You clicked a button");


    //queryURL for home + pets Giphy API using my api key
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+j+"&api_key=8kVRuubHgUGKllRAwcKW0COF4HmpNP0J&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    //wait for response from url to get results
    .done(function(response) {
      console.log(response);
      for(var i = 0; i <response.data.length;i++){
        $("#body").prepend("<p>Rating: "+response.data[i].rating+"</p>");
        $("body").prepend("<img src=' "+response.data[i].images.downsized.url+" '>");
      }
      
    });
})
