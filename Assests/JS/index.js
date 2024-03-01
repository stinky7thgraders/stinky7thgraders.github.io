var says = [
 "9th grade is smelly",
  "7th grade is stinky",
  "8th grade smells like landon's farts",
  "10th grade is STANK",
  "11th grade is Poop",
  "12th grade is fine since they have Rhett"
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();
});
