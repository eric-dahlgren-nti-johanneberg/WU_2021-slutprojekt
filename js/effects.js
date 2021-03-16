// changing words in hero section

const words = [
  "useful",
  "fun",
  "interactive",
  "accessible",
  "great",
  "right now",
  "work",
];

const wordElement = document.getElementById("hero-verb");
setInterval(() => {
  const newWord = words[Math.floor(Math.random() * words.length)];
  wordElement.innerText = newWord;
}, 10000);
