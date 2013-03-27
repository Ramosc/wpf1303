






var averageRating = function(movies) {
    var movieCount = movies.length; // something to know how many items are in the array
    console.log("I need to find the average for ", movieCount, " movies.");
    var movieNumber = 0; // something to keep track of which item in the array we're looking at
    var starTotal = 0;
    while (movieNumber < movieCount) { // until something meets that somethingCount
        var movie = movies[movieNumber]; // something to keep track of the ENTIRE item
        var stars = movie["stars"]; // get out the part were interested in
        starTotal += stars; // do some math with it
        console.log("Movie ", movieNumber, " = ", movie, " star total = ", starTotal);
        movieNumber++; //CRITICAL: update our number so the loop isn't infinit
    } // while
    var starAvg = starTotal / movieCount;
    return starAvg; //return whatever we were looking for
};

//// for loop

averageRating = function(movies) {
    for (var movieCount = movies.length, movieNumber = 0, statTotal = 0; //setup
        movieNumber < movieCount; // condition to countinue
        movieNumber++) // after each run through the loop
    {
        statTotal += movies[movieNumber]["stars"]; // magic
    }
    var starAvg = starTotal / movieCount; // magic
    return starAvg; // return whatever we were looking for
};

/////// for each loop

averageRating = function(movies) {
    var starTotal = 0; // setup
    movies.forEach(function(movie) { // JS calls this function once for each item
        starTotal += movie["stars"]; // magic
    });
    return starTotal / movies.length; // magic
};

var avgRating = averageRating(movieData);
console.log("Average stars = ", avgRating);