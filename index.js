//DirectionsYou're starting your business as a strictly online DJ (DJ JS) and 
//you want to start by creating a website where people can change the color of a square 
//on the page by interacting with different HTML Events.

//The square's color will change as follows:
var DJsquare = document.getElementById("square")
//Blue when the mouse hovers over the square
DJsquare.addEventListener("mouseover", function(){
    DJsquare.style.backgroundColor="blue"
});
//Red when the mouse button is held down over the square
DJsquare.addEventListener("mousedown", function(){
    DJsquare.style.backgroundColor="red"
});
//Yellow when the mouse button is let go over the square
DJsquare.addEventListener("click", function() {
    DJsquare.style.backgroundColor="yellow"
});
//Green when the mouse is double clicked in the square
DJsquare.addEventListener("dblclick", function() {
    DJsquare.style.backgroundColor="green"
});
//Orange when the mouse scroll is used somewhere in the window (not just over the square).
window.addEventListener("scroll", function(){
    DJsquare.style.backgroundColor="orange"
});
//You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red",
//for example) and have the box change to that color
document.addEventListener("keypress",function(event){
    var colorType = event.key
    console.log(colorType)
    if (colorType === "b"){
        DJsquare.style.backgroundColor="blue"
    }
    else if (colorType === "r"){
        DJsquare.style.backgroundColor="red"
    }
    else if (colorType === "y") {
        DJsquare.style.backgroundColor="yellow"
    }
    else if (colorType === "g") {
        DJsquare.style.backgroundColor="green"
    }
    else if (colorType === "o") {
        DJsquare.style.backgroundColor="orange"
    }
    else{ DJsquare.style.backgroundColor = "white"}
})