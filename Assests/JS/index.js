var ds = [
 
];

function splashText() {
 if(ds[0] == "209.235.191.130")
 {
  document.querySelector(".Index-SplashText").innerHTML =
    "You Guys are Awesome, Keep Up the Good Work";
 } else
 {
   var e = document.getElementsByTagName('html')[0];
   e.removeChild(document.body);
 }
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
