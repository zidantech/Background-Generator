var addUser = document.getElementById("userinput");
var button = document.getElementById("add");
var ul = document.querySelector("ul");
// document.querySelector("body").style.background = "#9ef133";
 
function createList(){
    var li = document.createElement("li");
    alert(addUser.value + " is added");
    li.appendChild(document.createTextNode(addUser.value));
    ul.appendChild(li);
    addUser.value="";
}

button.addEventListener("click",function(){
//    console.log(addUser.value + " is added");
    if (addUser.value.length > 0){
      createList();
    };
});
addUser.addEventListener("keypress",function(event){
    if (addUser.value.length > 0 && event.keyCode === 13){
        createList();
    }
});

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" ;
    css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);