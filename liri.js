

require("dotenv").config();
var keys = require("./keys.js");

// npm apps
var Spotify = require('node-spotify-api');
var request = require("request");
var Twitter = require('twitter');
var fs = require("fs");


// access keys.js to get TWITTER and SPOTIFY api access
//var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
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
if(command == "movie-this") {
    console.log(command);
    moviethis(name);
    
}

if(command == "spotify-this-song") {
    console.log(command);
    spotifythissong(name);
}

if(command == "do-what-it-says") {
    console.log(command);
    dowhatitsays();
}

if(command == "my-tweets") {
    console.log(command);
    mytweets();
}









//create function
function mytweets() {
    //This will show your last 20 tweets and when they were created at in your terminal/bash window.

    

        
        

    };

function spotifythissong(name) {
    
    var spotify = new Spotify(keys.spotify);
        
        spotify.search({ 
            type: 'track', 
            query: name 
        }, 
            function(err, data) {
            if (err){
                console.log('Error occurred: ' + err);
                return;
            }
            var songInfo = data.tracks.items;
            var logSpotify =
                "\nArtist: " + songInfo[0].artists[0].name +
                "\nSong title: " + songInfo[0].name +
                "\nAlbum name: " + songInfo[0].album.name +
                "\nURL Preview: " + songInfo[0].preview_url +
            console.log(logSpotify)
    });
}//end of function
  













   
    
    //This will show the following information about the song in your terminal/bash window

    //Artist(s)
    //The song's name
    //A preview link of the song from Spotify
    //The album that the song is from

    //If no song is provided then your program will default to "The Sign" by Ace of Base.



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

function movie() {
    if (name === undefined) {
        title = "Mr.+Nobody";
        moviethis();
    } else if (title !== undefined) {
        titleSplit = title.split(" ");
        title = titleSplit.join("+");
        moviethis();
    };
};

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
    fs.readFile('random.txt', "utf8", function(error, data){
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        if (dataArr[0] === "spotify-this-song") {
            var check = dataArr[1].slice(1, -1);
            spotify(check);
        } else if (dataArr[0] === "my-tweets") {
            var tweetname = dataArr[1].slice(1, -1);
            twitter(tweetname);
        } else if(dataArr[0] === "movie-this") {
            var movie_name = dataArr[1].slice(1, -1);
            movie(movie_name);
        } 
        
    });
}


    //It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.//
    //Feel free to change the text in that document to test out the feature for other commands.//
    


