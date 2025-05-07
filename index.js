const allQuotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" }
];
// https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}
// https://twitter.com/intent/tweet

const quoteContainer=document.getElementsByClassName("container")
const quotes=document.getElementById("the-quote")
const generateQuote= document.getElementById("generate")
const authorName=document.getElementById("author")
const tweet=document.getElementById("tweet")

let objQuote={}

function randomQuote(){
  objQuote=allQuotes[Math.floor(Math.random()*allQuotes.length)]
  console.log(objQuote)
  quotes.innerHTML = objQuote.quote
  authorName.innerHTML=` -${objQuote.author}`
}



function tweetQuote(){
  const tweetText = `"${objQuote.quote}" — ${objQuote.author}`;
  const twitterUrl=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
  window.open(twitterUrl,'_blank')
}

generateQuote.addEventListener("click",randomQuote)
tweet.addEventListener("click",tweetQuote)

// function revealUI(){
//   quotes.textContent=
// }

