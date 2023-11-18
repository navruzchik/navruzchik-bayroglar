const button = document.querySelector("button");
const body = document.querySelector("body");
const buttonText = document.querySelector("button span");
let theme = false;

buttonText.innerHTML = "Dark Mode";

console.log(buttonText.innerHTML);
button.addEventListener("click", () => {
  if (theme) {
    body.style.background = "white";
    body.style.color = "black";
    buttonText.innerHTML = "Dark Mode";
    console.log(buttonText);
    theme = false;
  } else {
    body.style.background = "black";
    body.style.color = "white";
    theme = true;
    buttonText.innerHTML = "Light Mode";
    console.log(buttonText);
  }
});
