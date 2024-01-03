let numberOfButtons = 3;
const placeAddButton = document.getElementById("buttonContainer");
const generateButtons = document.getElementById("createButtons");

window.onload = createButtons;

function createButtons() {
    winIdButton = Math.floor((Math.random() * numberOfButtons) + 1);
    let idBtns = 0;
    if (numberOfButtons === 3) {
        for (let i = 0; i < numberOfButtons; ++i) {
            ++idBtns;
            const newBtn = document.createElement("button");
            newBtn.textContent = "Click";
            newBtn.className = "btn btn-primary";
            newBtn.id = idBtns;
            newBtn.addEventListener("click", winOrLose);
            placeAddButton.appendChild(newBtn);
        }
    } else if (numberOfButtons == 2) {
        document.getElementById("3").remove();
    } else if(numberOfButtons > 3) {
        idBtns = 3;
        for (let i = 0; i < numberOfButtons - 3; ++i) {
            ++idBtns;
            const newBtn = document.createElement("button");
            newBtn.textContent = "Click";
            newBtn.className = "btn btn-primary";
            newBtn.id = idBtns;
            newBtn.addEventListener("click", winOrLose);
            placeAddButton.appendChild(newBtn);
        }
    }
}

function winOrLose(e) {
    let pressedButton = e.target.id;
    if (winIdButton == pressedButton) {
        alert("Win !!!");
    } else {
        alert("Lose !!!");
    }
}

function sotreInputValue() {
    numberOfButtons = document.getElementById("inputNumber").value;
}
generateButtons.addEventListener("click", sotreInputValue);
generateButtons.addEventListener("click", createButtons);
