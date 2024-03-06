var says = [
 "9th grade is smelly",
  "7th grade is stinky",
  "8th grade smells like landon's farts",
  "10th grade is STANK",
  "11th grade is Poop",
  "12th grade is fine since they have Rhett"
];
var ds = [
 
];

function splashText() {
 if(ds[0] == "209.235.191.130")
 {
  document.querySelector(".Index-SplashText").innerHTML =
    "PLEASE READ: Only people on CA Students can read this, if this website gets blocked, then the next website will be stinky9thgraders.github.io";
 } else
 {
  document.querySelector(".Index-SplashText").innerHTML = 
   says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

 fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.ip;
      ds.push(`${ipAddress}`);
      splashText();
    });
});
