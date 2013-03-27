var isInState = function (ping, wantState) {
    var state = ping["state"];
    return (state == wantState);
};

var minutes = function(seconds) {
    return Math.round(seconds / 60);
};

var shuffle = function (array) {
    for (var itemNumber = 0; itemNumber < array.length; itemNumber++) {
        var target = Math.floor(Math.random() * array.length);
        console.log("target: ", target);
        var temp = array[itemNumber];
        array[itemNumber] = array[target];
        array[target] = temp;
    }
    return array
};

var notUs = function (ping, wantCountry) {
    var country = ping["cc"];
    return (country == wantCountry);
};

var onPings = function(pings) {
    pings = shuffle(pings);
    console.log(pings);
    var totalInFlorida = 0;
    var ageMax = 0;
    var ageMin = 999999999999;
    var oldestState = "";
    var country = "";
    for (var pingNumber = 0; pingNumber < pings.length; pingNumber++){
        var ping = pings[pingNumber]; // current ping
        var age = parseInt(ping["age_s"]);
            if ((age < ageMin) && !notUs(ping, "US")) {
            ageMin = age;
            oldestState = ping["state"];
            country = ping["cc"];
        }
////        if()){
////           totalInFlorida++ && ageMax++;
////        }// if in fl
    }// for each ping
//    console.log("FL Total: ", totalInFlorida);
    console.log("oldest: ", minutes(ageMin), "is from ", country);
};
