/**
 * Created by Bobby on 17/12/13.
 */
window.onload=function(){
    var para=document.getElementById("heading");
    para.innerText="A short exercise on creating dynamic web content.";
    var button=document.getElementById("button");
    button.onclick=function(){
        alert("Ive been clicked");
    };
    var list = document.getElementById("list");
    list.onchange = function(){
        var item = list.options[list.selectedIndex].text; // This code extracts the text
        changeColour(item); // from the selected item in
    }; // list (at the .onchange event)
    var dob = document.getElementById("dob");
    dob.oninput = function(){
        alert("Your birth date is: " + dob.value); // This picks up the date
    };
    var range = document.getElementById("range"); // This, the slider control
    var value = document.getElementById("value"); // The paragraph after it
    range.onchange = function(){
        value.innerText = range.value; // Show the value beside the
    };
    function changeColour(colour){
        var c = 0;
        switch(colour){
            case "Red":
                c = "#f00"; // The code for red
                break;
            case "Green":
                c = "#0f0"; // Green..
                break;
            case "Blue":
                c = "#00f"; // Blue..
                break;
        }
        document.bgColor = c; // Note the U.S. spelling of colour – silly people.
    };
};