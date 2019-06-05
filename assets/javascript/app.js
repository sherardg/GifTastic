    //Created an array of topics for the exercise

    var topics = ["dogs", "cats", "hampsters", "turtles", "birds", "goldfish", "snakes"]
    
    //Your app should take the topics in this array and create buttons in your HTML.
    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>"+ topics.text + "</button>")
        buttons.append("topics");
    }
    
    //Try using a loop that appends a button for each string in the array.


    //queryURL for Giphy API using my api key
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=CrGQFhPeVCpCJuM4wwOdmCHNFvPfK36G";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
