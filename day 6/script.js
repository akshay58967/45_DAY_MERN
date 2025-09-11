const quotes = [
  {
    quote: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman"
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[random];

  // Fade out
  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = `"${quote}"`;
    authorText.textContent = `— ${author}`;
    quoteText.style.opacity = 1;
    authorText.style.opacity = 1;
  }, 300);
}

window.onload = getRandomQuote;
newQuoteBtn.addEventListener("click", getRandomQuote);
