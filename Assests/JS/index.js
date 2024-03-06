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
  document.querySelector(".Index-SplashText").innerHTML =
    ds[0];
    //says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

 fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.ip;
      ds.push(`umm your ip: ${ipAddress}`);
      splashText();
    });
});
