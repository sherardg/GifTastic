
// Function to generate buttons based on user input
$(function(){
    generateButtons(topics, 'searchButton', "#buttonsDiv");
})

//Topics array for pets
var topics = ["dogs", "cats", "hampsters", "turtles", "birds", "goldfish", "snakes"];

//Dynamically add buttons
function generateButtons (topics, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for (var i = 0; i < topics.length; i++){
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr('data-type',topics[i]);
        a.text(topics[i]);
        $(areaToAddTo).append(a);
    }
}
// Function to connect and to search the Giphy API when search button is clicked
$(document).on('click', '.searchButton', function(){
    var type = $(this).data('type');
    //queryURL for Giphy API using API key
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+type+"&api_key=8kVRuubHgUGKllRAwcKW0COF4HmpNP0J&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"})
      //wait for response from url to get results
    .done(function(response){
        // Retrieve data from Giphy API
        for(var i = 0; i < response.data.length; i++){
            var gifsHolderDiv = $("<div class='search-item'>");
            var rating = response.data[i].rating;
            var p = $('<p>').text("Rating:" +rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $("<img>");
            image.attr("src",still);
            image.attr('data-still',still);
            image.attr('data-animated',animated);
            image.attr('data-state','still');
            image.addClass('searchImg');
            gifsHolderDiv.append(p);
            gifsHolderDiv.append(image);
            $("#gifsHolder").prepend(gifsHolderDiv);
        }
    })
})
    // Function to change states from static to animated based on user input
$(document).on('click', '.searchImg',function(){
    var state = $(this).attr('data-state');
    if(state == 'still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else {
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }
})

// Add search button based on search input when user enters a search term and clicks the search button
$("#addSearch").on('click',function(){
    var newImgSearch = $("input").eq(0).val();
    topics.push(newImgSearch);
    generateButtons(topics, 'searchbutton', '#buttonsDiv');
    return false;
})

