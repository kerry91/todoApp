const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const sort = document.getElementById("sortable");
let box = document.getElementsByClassName("box");
let checkOff = document.getElementsByClassName("checkOff");

window.onload = function() {
  input.focus();
};

// Getting the length of the user unput field
function inputLength() {
  return input.value.length;
}

function createListElement() {
  //var ul = document.createElement("ul");
  //var li = document.createElement("li"); //creates LI
  var div = document.createElement("div");
  var span = document.createElement("span"); // creates Span
  var remove = document.createElement("button"); // creates button tag
  var removeIcon = document.createElement("i");
  var check = document.createElement("button"); // creates button tag
  var checkIcon = document.createElement("i");
  span.textContent = input.value; //adds text to span tag based on input.value
  span.setAttribute("class", "span uk-card uk-card-hover uk-card-default uk-card-body uk-card-small uk-text-left");
  remove.setAttribute("class", "box uk-button uk-button-default uk-align-right");
  remove.style.border = "none";
  removeIcon.setAttribute("class", "fa-solid fa-xmark");
  check.setAttribute("class", "checkOff uk-button uk-button-default uk-align-left");
  check.style.border = "none";
  checkIcon.setAttribute("class", "fa-solid fa-check");
  div.setAttribute("class", "sort-div");
  //ul.setAttribute("class", "items");

  sort.appendChild(div);
  //ul.appendChild(li);
  //li.appendChild(div);
  div.appendChild(span);
  span.appendChild(check);
  check.appendChild(checkIcon);
  span.appendChild(remove);
  remove.appendChild(removeIcon);
  input.value = "";

//Add functionality to remove the li item with the X button
  for (var i = 0; i < box.length; i++) {
    var delLi = box[i];
    delLi.addEventListener("click", function(event) {
      event.currentTarget.parentElement.remove();

    });
  }

  //Add functionality to remove the li item with the X button
    for (var i = 0; i < checkOff.length; i++) {
      var checkLi = checkOff[i];
      checkLi.addEventListener("click", function(event) {
        event.target.classList.toggle("done");
      });
    }

}

//add the built list item dependent on if the user has entered something
function addListAfterClick() {

  if (inputLength() > 0) {
    createListElement();

  }
  console.log("sort");
}


input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    addListAfterClick();
  }
});
