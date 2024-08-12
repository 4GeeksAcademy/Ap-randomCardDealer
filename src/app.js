const suits = ["♥", "♦", "♣", "♠"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generateRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementById("top-left-suit").innerText = randomSuit;
  document.getElementById("bottom-right-suit").innerText = randomSuit;
  document.getElementById("middle-value").innerText = randomValue;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.getElementById("top-left-suit").style.color = "red";
    document.getElementById("bottom-right-suit").style.color = "red";
    document.getElementById("middle-value").style.color = "red";
  } else {
    document.getElementById("top-left-suit").style.color = "black";
    document.getElementById("bottom-right-suit").style.color = "black";
    document.getElementById("middle-value").style.color = "black";
  }
}

window.onload = generateRandomCard;
