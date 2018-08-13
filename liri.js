


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
var client = new Twitter(keys.twitter);

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

    var params = {
        screen_name: 'Peterphu2',
        count: 20
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            
            for (i = 0; i < tweets.length; i++) {
                var logTweets = i + 1 + ". Tweet: " + tweets[i].text + "\n    Created: " + tweets[i].created_at;
                console.log(logTweets);
            
                fs.appendFile("log.txt", logTweets + "\n*******************************MY TWEETS**************************************\n", function (err) {
                    if (err) {
                        return console.log("Twitter data was not appended to the log.txt file.");
                    };
                });
                
                
                
                
            };//end of for loop
        };//end if if statment
    });//end of client get
};//end of function


function spotifythissong() {
    spotify.search({
        type: 'track',
        query: name,
        limit: 1,
    }, function (err, data) {
        if (data) {
            var info = data.tracks.items
            var logSpotify =
                "\n****************************** SPOTIFY THIS SONG *******************************\nArtist: " + info[0].artists[0].name +
                "\nSong title: " + info[0].name +
                "\nAlbum name: " + info[0].album.name +
                "\nURL Preview: " + info[0].preview_url +
                "\n********************************************************************************\n";
            console.log(logSpotify)
            fs.appendFile("log.txt", logSpotify, function (err) {
                if (err) {
                    return console.log("Spotify song data was not appended to the log.txt file.");
                };
            });
        } else if (err) {
            var logNoSpotify =
                "\n****************************** SPOTIFY THIS SONG *******************************\nSpotify could not find a song with that title. Please try Again.\n********************************************************************************\n";
            console.log(logNoSpotify);
            fs.appendFile("log.txt", logNoSpotify, function (err) {
                if (err) {
                    return console.log("Spotify no song data found was not appended to the log.txt file.");
                };
            });
        };
    });
};
        




  













   
    
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
        
    console.log(response.body);
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
      
        

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("\n************************************** Movie-This *****************************************************************");
    console.log("\nRating: " + movieParse(response.body).imdbRating);
    console.log("\nTitle: " + movieParse(response.body).Title);
    console.log("\nYear: " + movieParse(response.body).Year);
    console.log("\nCountry: " + movieParse(response.body).Country);
    console.log("\nLanguage: " + movieParse(response.body).Language);
    console.log("\nPlot: " + movieParse(response.body).Plot);
    console.log("\nActors: " + movieParse(response.body).Actors);
    console.log("\nMetascore: " + movieParse(response.body).Metascore);
    console.log("\n************************************** Movie-This *****************************************************************");

  
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

function dowhatitsays() {
    
    //Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.//
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            var logDoIt = ("\n************************** Do-What-It-Says *****************************\nThere was a problem reading the random.txt file. Please try again.\n********************************************************************************");
            return console.log(logDoIt);
            fs.appendFile("log.txt", logDoIt, function (err) {
                if (err) {
                    return console.log("do-what-it-says data was not appended to the log.txt file.");
                };
            });
        };

        var output = data.split(",");
        action = output[0];
        process.argv[3] = output[1];
        title = process.argv[3];

        if (action === 'spotify-this-song') {
            spotifythissong();
        };
    });
};


    //It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.//
    //Feel free to change the text in that document to test out the feature for other commands.//
    


