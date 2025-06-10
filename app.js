const redbutton = document .getElementById("red")
const yellowbutton =document .getElementById("yellow")
const greenbutton =document .getElementById("green")
const commandtext = document .getElementById("command")


function clearLights(){
    redbutton.classList.remove("active");
    yellowbutton.classList.remove("active");
    greenbutton.classList.remove("active");
    commandtext.textContent ="";
}
function  turnRed(){
    commandtext .textContent= "STOP";
    commandtext.style.color="red";
    redbutton.classList.add("active");
    yellowbutton.classList.remove("active");
    greenbutton.classList.remove("active");
}

redbutton .addEventListener("mouseover", turnRed)
redbutton .addEventListener("mouseleave", clearLights)


function turnYellow(){
    commandtext .textContent= "WAIT";
    commandtext.style.color="yellow";
    yellowbutton.classList.add("active");
    redbutton.classList.remove("active");
    greenbutton.classList.remove("active");

}
yellowbutton.addEventListener("mouseover", turnYellow)
yellowbutton.addEventListener("mouseleave", clearLights)


function turnGreen(){
    commandtext .textContent= "GO";
    commandtext.style.color="green";
    greenbutton.classList.add("active");
    yellowbutton.classList.remove("active");
    redbutton.classList.remove("active");
}

greenbutton.addEventListener("mouseover", turnGreen)
greenbutton.addEventListener("mouseleave", clearLights)
