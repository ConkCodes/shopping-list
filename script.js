// CACHE QUERIES IN VARAIBLES

var submitButton = document.getElementById("add");
var addItemInput = document.querySelector("input");
var ul = document.querySelector("ul");
var liElements = document.querySelectorAll("li");

// EVENT ACTIONS

function clickButtonAction() {
    if (addItemInput.value !== "") addToList();
}
function enterKeyAction(event) {
    if (addItemInput.value !== "" && event.keyCode === 13) addToList();
}

function addToList() {
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(addItemInput.value + " "));
    p.addEventListener("click", crossItemOffList);
    li.appendChild(p);
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    button.addEventListener("click", deleteItemOffList);
    li.appendChild(button);
    ul.appendChild(li);
    addItemInput.value = "";
}

function crossItemOffList(event) {
    var li = event.target;
    li.classList.toggle("done");
}

function deleteItemOffList(event) {
    ul.removeChild(event.target.parentElement);
}

// EVENT LISTENERS

submitButton.addEventListener("click", clickButtonAction);
addItemInput.addEventListener("keypress", enterKeyAction);

for (var i = 0; i < liElements.length; i++) {
    liElements[i].children[0].addEventListener("click", crossItemOffList);
    liElements[i].children[1].addEventListener("click", deleteItemOffList);
}