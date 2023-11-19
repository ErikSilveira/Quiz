const grid = document.querySelector(".grid");
const spanPlayers = document.querySelector(".player");
const timer = document.querySelector(".timer");

const loadgame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffleArray = duplicateCharacters.sort(() => 0.5 - Math.random());
  shuffleArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
};

window.onload = () => {
  const playerName = localStorage.getItem("player");

  spanPlayers.innerHTML = playerName;

  startTimer();

  loadgame();
};
