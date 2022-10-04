const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const sort = document.getElementById("sortable");
const box = document.getElementsByClassName("box");
const checkOff = document.getElementsByClassName("checkOff");

//when window loads focus in one the input field
window.onload = function() {
  input.focus();
};

// Getting the length of the user unput field
function inputLength() {
  return input.value.length;
}

//Creates the new item contents
function createListElement() {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const remove = document.createElement("button");
  const removeIcon = document.createElement("i");
  const check = document.createElement("button");
  const checkIcon = document.createElement("i");
  span.textContent = input.value;
  span.setAttribute("class", "span uk-card uk-card-hover uk-card-default uk-card-body uk-card-small uk-text-left");
  remove.setAttribute("class", "box uk-button uk-button-default uk-align-right");
  remove.style.border = "none";
  removeIcon.setAttribute("class", "fa-solid fa-xmark");
  check.setAttribute("class", "checkOff uk-button uk-button-default uk-align-left");
  check.style.border = "none";
  checkIcon.setAttribute("class", "fa-solid fa-check");
  div.setAttribute("class", "sort-div");

  sort.appendChild(div);
  div.appendChild(span);
  span.appendChild(check);
  check.appendChild(checkIcon);
  span.appendChild(remove);
  remove.appendChild(removeIcon);
  input.value = "";

//Add functionality to remove item with the X button
  for (let i = 0; i < box.length; i++) {
    var delLi = box[i];
    delLi.addEventListener("click", function(event) {
      event.currentTarget.parentElement.remove();

    });
  }

  //Add functionality to check off the item
    for (let i = 0; i < checkOff.length; i++) {
      var checkLi = checkOff[i];
      checkLi.addEventListener("click", function(event) {
        event.target.classList.toggle("done");
      });
    }

}

//toggles the backround, images and cards
function toggleDarkMode() {
  const element = document.getElementsByTagName("html")[0];
  let image = document.getElementById('moonSun');
  let imageBanner = document.getElementById('banner');
  let uI = document.getElementById("userInput");
  let mI = document.getElementById("mainItems");
  let s = document.getElementsByClassName("span");
  let textBox = document.getElementById("userinput");
  uI.setAttribute("class", "uk-card uk-card-secondary uk-card-body uk-width-1-1@m");
  mI.setAttribute("class", "uk-card uk-card-secondary uk-card-body");

  element.classList.toggle("dark-mode");

  if (image.src.match("icon-moon")) {
    image.src = "images/icon-sun.svg";
    imageBanner.src = "images/bg-desktop-dark.jpg";
    uI.setAttribute("class", "uk-card uk-card-secondary uk-card-body uk-width-1-1@m");
    mI.setAttribute("class", "uk-card uk-card-secondary uk-card-body");
    textBox.style.background = "#222";
    textBox.style.color = "white";
  } else {
    image.src = "images/icon-moon.svg";
    imageBanner.src = "images/bg-desktop-light.jpg";
    uI.setAttribute("class", "uk-card uk-card-default uk-card-body uk-width-1-1@m");
    mI.setAttribute("class", "uk-card uk-card-default uk-card-body");
    textBox.style.background = "white";
    textBox.style.color = "black";
  }
}

//add the built list item dependent on if the user has entered something
function addListAfterClick() {

  if (inputLength() > 0) {
    createListElement();

  }
  console.log("sort");
}


//runs the addListAfterClick() when the enter key is pressed
input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    addListAfterClick();
  }
});
