const Frame = document.querySelector(".Projects-Frame");
const HAF = document.querySelectorAll(".hideAfterFullscreen");
const IFrame = document.querySelector(".Projects-IFrame");

async function addGames() {
  try {
    const games = await (await fetch("./s7gmlist.json")).json();
    games.sort((a, b) => a.game.localeCompare(b.game));

    for (const game of games) {
      const project = document.createElement("div");
      project.className = "Projects-Project";
      project.innerHTML = `
                <img src="/Icons/${game.game.replace(
        /[.\s]/g,
        ""
      )}.webp" loading="lazy" onerror="this.src='./Assests/Imgs/NoIcon.png'"/>
                <h1>${game.game}</h1>`;
      document.querySelector(".Projects-Container").appendChild(project);

      project.addEventListener("click", () => {
        HAF.forEach((element) => element.classList.add("hidden"));
        Frame.classList.remove("hidden");
        IFrame.src = `${game.gameroot}`;
      });
    }
  } catch (error) {
    console.error(error);
  }
}

Frame.querySelector(".Projects-FrameBar").addEventListener("click", (event) => {
  if (event.target.id === "close") {
    HAF.forEach((element) => element.classList.remove("hidden"));
    Frame.classList.add("hidden");
    IFrame.src = "";
  } else if (event.target.id === "fullscreen") {
    const requestFullscreen =
      IFrame.requestFullscreen ||
      IFrame.webkitRequestFullscreen ||
      IFrame.msRequestFullscreen;
    requestFullscreen.call(IFrame);
  } else if (event.target.id === "link") window.open(IFrame.src);
});

document.getElementById("GameSearchBar").addEventListener("input", () => {
  const searchedup = document
    .getElementById("GameSearchBar")
    .value.trim()
    .toLowerCase();
  const gameholders = document.querySelector(".Projects-Container");
  const gmae = gameholders.querySelectorAll(".Projects-Project");

  gmae.forEach((game) => {
    var gamenames = game.querySelector("h1").innerText.trim().toLowerCase();
    if (gamenames.includes(searchedup)) game.classList.remove("hidden");
    else game.classList.add("hidden");
  });
});

addGames();
