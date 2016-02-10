/* a var to add eventlistner to button on click */
var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);

function replaceIt() {  /* function to add words entered by user to dom */
    var storyDiv = document.getElementById("story");

    var adj1 = "<span class= 'replacement'>" + document.getElementById
        ("adj1").value + "</span>";

    var verbIng = "<span class= 'replacement'>" + document.getElementById
        ("verbIng").value + "</span>";

    var roomInHouse = "<span class='replacement'>" + document.getElementById
        ("roomInHouse").value + "</span";

    var musicType = "<span class='replacement'>"+ document.getElementById
        ("musicType").value + "</span>";

    var diffRoom = "<span class='replacement'>"+ document.getElementById
        ("diffRoom").value + "</span>";

    var exclamation = "<span class='replacement'>"+ document.getElementById
        ("exclamation").value + "</span>";

    var pastVerb2 = "<span class='replacement'>"+ document.getElementById
        ("pastVerb2").value + "</span>";

    var adjDance = "<span class='replacement'>"+ document.getElementById
        ("adjDance").value + "</span>";

    var animal = "<span class='replacement'>"+ document.getElementById
        ("animal").value + "</span>";

    var city = "<span class='replacement'>"+ document.getElementById
        ("city").value + "</span>";

    var verb = "<span class='replacement'>"+ document.getElementById
        ("verb").value + "</span>";
        /* Insert more variable definitions here */

    var theStory = theStory = "<h1>Douglas's Dance Party</h1>";

    theStory += "One " + adj1 + " Day,";
    theStory += " Douglas was " + verbIng;
    theStory += " in his  " + roomInHouse;
    theStory += musicType;
    theStory += " music was playing in the " + diffRoom + ".<br> </br>";
    theStory += exclamation + "! he exclaimed, as he ";
    theStory += pastVerb2 + " down the stairs to join the ";
    theStory += adjDance + " party.<br> </br>";
    theStory += "Douglas danced the " + animal;
    theStory += " Dance, the " + city + " Shake,";
    theStory += " and took the prize for dancing the best Electric " + verb + ".<br> </br>";

    /* Put the rest of the story here, using the += operator */
    storyDiv.innerHTML= theStory;
}
