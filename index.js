import {allQuote} from './quote.js'
// https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}
// https://twitter.com/intent/tweet



const buttons=document.querySelectorAll(".q")
const quoteContainer=document.getElementsByClassName("container")
const quotes=document.getElementById("the-quote")
const generateQuote= document.getElementById("generate")
const authorName=document.getElementById("author")
const tweet=document.getElementById("tweet")


let currentQuote=""
buttons.forEach(function(item){

  item.addEventListener("click",function(e){
   
    const id= e.target.dataset.id
    console.log(id)
   let quoteArray= allQuote[id]
    if(quoteArray){
      const random=quoteArray[Math.floor(Math.random()*quoteArray.length)]
      currentQuote=random
      quotes.textContent=random
    }
    
 })
 })






 function tweetQuote(){
   const tweetText = `"${currentQuote}"`;
   const twitterUrl=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
   window.open(twitterUrl,'_blank')
 }

// generateQuote.addEventListener("click",randomQuote)
tweet.addEventListener("click",tweetQuote)


