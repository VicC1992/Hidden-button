const placeAddButton = document.getElementById("buttonContainer");
const generateButtons = document.getElementById("createButtons");
let buttons = document.querySelectorAll(".btn");

function winButton() {
    let x = Math.floor((Math.random() * 2) + 1);
    if (x === 1) {
        alert("Win!!");
    } else {
        alert("Lose!!");
    }
}
for(let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", winButton);
}

function storeValue() {
    numberOfButtons = document.getElementById("number").value;
}
generateButtons.addEventListener("click", storeValue);

function createButtons() {
    if(numberOfButtons == 2 ) {
        document.getElementById("button3").remove();

    } else if (numberOfButtons > 3) {
    for(let i = 0; i < numberOfButtons - 3; ++i) {
        const newBtn = document.createElement("button");
        newBtn.textContent = "Click";
        newBtn.className= "btn btn-primary";
        newBtn.addEventListener("click", winButton);
        placeAddButton.appendChild(newBtn);
        }
    }
}
generateButtons.addEventListener("click", createButtons);