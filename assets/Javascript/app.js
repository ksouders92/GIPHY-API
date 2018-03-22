// Use GIPHY API Key to demo AJAX to return search endpoints 

var topics = ["Australian shepherd", "Beagle", "Border Collie", "Boston Terrier", "Bulldog", "Corgi", "Dachshund", "Doberman Pinscher",
    "German Shepherd", "Golden Retriever", "Great Dane", "Labrador Retriever", "Pomeranian", "Poodle", "Pug", "Rottweiler", "Saint Bernard", "Shar Pei",
    "Siberian Husky", "Staffordshire Bull Terrier"];

var giphyApiKey = "jG07scMeifeajQ5rK283TzBGgjN8dh6y";

// make sure the document is ready to run
$(document).ready(function () {
    // Event listener for all button elements

    $("button").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var topics = $(this).attr("data-breed");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topics + "&api_key=jG07scMeifeajQ5rK283TzBGgjN8dh6y&limit=10&offset=0&rating=PG&lang=en";

        // NYT Search Activity
        // var searchTerm = $("#search-term").val().trim();
        // queryURL += "&q=" + searchTerm;

        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;
                // Looping over every result item
                for (var i = 0; i < results.length; i++) {

                    // Creating a div with the class "item"
                    var gifDiv = $("<div class='item'>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var breedImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    breedImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.prepend(breedImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);

                }
            });
    });
});