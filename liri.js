

require("dotenv").config();
var request = require("request");

//Add the code required to import the keys.js file and store it in a variable.

//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

var command = process.argv[2];
var name = process.argv[3];

/*
Make it so liri.js can take in one of the following commands:
* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`
????????

if else or swich statement
*/
if(command == "moviethis") {
    console.log(command);
    moviethis(name);
}

if(command == "spotifythissong") {
    console.log(command);
    spotifythissong(song_name);
}

    






//create function
function mytweets() {
    //This will show your last 20 tweets and when they were created at in your terminal/bash window.
}

function spotifythissong(song_name) {

    request("https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx)", function(error, response, body) {

  // If the request was successful...
  if (!error && response.statusCode === 200) {

    console.log(response);
    
  













    }
});//end of request function
    
    //This will show the following information about the song in your terminal/bash window

    //Artist(s)
    //The song's name
    //A preview link of the song from Spotify
    //The album that the song is from

    //If no song is provided then your program will default to "The Sign" by Ace of Base.

}///end of function

function moviethis (movie_name) {

    var movieParse = JSON.parse
// Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + movieParse(response.body).imdbRating);
    console.log("The movie's title is: " + movieParse(response.body).Title);
    console.log("The movie's year is: " + movieParse(response.body).Year);
    console.log("The movie's country is: " + movieParse(response.body).Country);
    console.log("The movie's language is: " + movieParse(response.body).Language);
    console.log("The movie's plot is: " + movieParse(response.body).Plot);
    console.log("The movie's actors is: " + movieParse(response.body).Actors);
    console.log("The movie's metasore is: " + movieParse(response.body).Metascore);
  
  }
});//end of request function

    // You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
    /*
    This will output the following information to your terminal/bash window:

    * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie. 
 
 
   If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' 
*/

}//end of movie function

function dowhatitsays () {
    
    //Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.//
    var fs = require("fs");


    //It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.//
    //Feel free to change the text in that document to test out the feature for other commands.//
    
}