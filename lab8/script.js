
let container = document.querySelector(".container").cloneNode(true);

function makeElement() {
    let div = document.createElement("div");

    let firstInput = document.createElement("input");
    firstInput.classList.add("first-input");
    div.append(firstInput);

    let secondInput = document.createElement("input");
    secondInput.classList.add("second-input");
    div.append(secondInput);

    let upButton = document.createElement("button");
    upButton.textContent = "↑";
    upButton.onclick = () => {
        if (div.previousElementSibling !== null) div.previousElementSibling.before(div);
    };
    div.append(upButton);

    let downButton = document.createElement("button");
    downButton.textContent = "↓";
    downButton.onclick = () => {
        if (div.nextElementSibling !== null) div.nextElementSibling.after(div);
    };
    div.append(downButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.onclick = () => div.remove();
    div.append(deleteButton);

    document.getElementById("container").append(div);
}


function saveElements() {
    let container = document.getElementById("container");
    let obj = {};
    for (let elem of container.children) {
        let firstInput = elem.getElementsByClassName("first-input")[0];
        let secondInput = elem.getElementsByClassName("second-input")[0];
        obj[firstInput.value] = secondInput.value;
    }
    document.getElementById("JSON").innerText = JSON.stringify(obj);
}