var btnSun = document.getElementById("sun");
var Burned = document.getElementById("hideme");
var btnMercury = document.getElementById("mercury");
var btnJupiter = document.getElementById("jupiter");

/* Grab the elements you need, you may do it all at the top or in each of your exercises */



/* create the code for hiding your paragraph when you roll over the sun, 
remove the mouse and bring the paragraph back.  Use your event handlers 
 */
function earlyEclipse() {
    "use strict";
    Burned.setAttribute("class", "burnedaway");
}
function eclipseOver() {
    "use strict";
    Burned.setAttribute("class", "brightasday");
}



/* Create an object holding one SIMPLE array of 4 pieces of information about Mercury.  Show all facts in an alert.
 Create a function that when a button is clicked will pop up the Mercury information formatted nicely, like the instructor's...

Mercury is the smallest planet.
Mercury is the messanger god.
Mercury is red.
Mercury is also in thermometers

Use an event listener in this one
 */

var mercInfo = {
    information: ["Mercury is the smallest planet.\nMercury is the messenger god.\nMercury is red.\nMercury is also in thermometers."]
};

function FYImerc() {
    "use strict";
    alert(mercInfo.information);
}

btnMercury.addEventListener("click", FYImerc);

/* Create a JSON object of Jupiter information.  You might want to put an array in your object for the "looping" part of this!
When someone clicks the button, loop through all of the information, but in one chunk display it all in a paragraph ABOVE the button.

Make the sentence: has a big storm - red
Make the sentence: has four moons - bigger than the rest

is the largest planet
has a big storm
has four moons
spins faster than any other planet
is 483,682,810 miles from the sun
*/

var FYIjupi = {
    "jupiter" : [
        {"size" : "is the largest planet"},
        {"weather" : "has a big storm"},
        {"moons" : "has four moons"},
        {"speed" : "spins faster than any other planet"},
        {"distance" : "is 483,682,810 miles from the sun"}
    ]
};

document.getElementById("targetdiv");
function loopjup() {
    "use strict";
    document.getElementById("targetdiv").setAttribute("class", "divshown");
    document.getElementById("jupiter").setAttribute("class", "makingroom");
    document.getElementById("targetdiv").innerHTML = '<p> </p>';
    var jupiterLoop = FYIjupi.jupiter.length, i;
    for (i = 0; i < jupiterLoop; i++) {
        if (FYIjupi.jupiter[i].weather === "has a big storm") {
            document.getElementById("targetdiv").innerHTML += '<p style= "color: red;">Jupiter: ' + FYIjupi.jupiter[i].weather + '.<br></p>';
        
        } else if (FYIjupi.jupiter[i].moons === "has four moons") {
            document.getElementById("targetdiv").innerHTML += '<p><font size="30%">Jupiter: ' + FYIjupi.jupiter[i].moons + '.<br></font></p>';
        
        } else {
            document.getElementById("targetdiv").innerHTML += '<p>Jupiter: ' + (FYIjupi.jupiter[i].size || FYIjupi.jupiter[i].speed || FYIjupi.jupiter[i].distance) + '.<br></p>';
        }

    }
}
btnJupiter.addEventListener("click", loopjup);
/* BEFORE you zip it all up - RENAME your js file to a txt file.  It will not go through email */