/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  { 
     quote:  'It\’s in the arch of my back, The sun of my smile, The ride of my breasts, The grace of my style. I\’m a woman Phenomenally. Phenomenal woman, That\’s me.',
     source: 'Maya Angelou',
     citation: 'Cosmopolitan Magazine', 
     year: 1978,
     tags: 'Poem',
     hasCitation: true,
     hasYear: true	
  },
  {
     quote: 'Power\’s not given to you. You have to take it.',
     source: 'Beyoncé',
     tags: 'interview',
     hasCitation: false,
     hasYear: false
  },
  {
     quote: 'When you play me, you play yourself. Don\’t play yourself.',
     source: 'Beyoncé',
     citation: 'Dont Hurt Yourself',
     year: 2016,
     tags: 'Music',
     hasCitation: true,
     hasYear: true
  },
  {
     quote: 'Dont ever underestimate the impact you can have because history has shown us that courage can be contagious and hope can take on a life of its own.',
     source: 'Michelle Obama',
     citation: 'Young African Women Leaders Forum',
     year: 2011,
     tags: 'Politics',
    hasCitation: true,
    hasYear: true
  },
  {
     quote: 'It may be normal, darling; but I\’d rather be natural.',
     source: 'Holly Golightly',
     citation: 'Breakfast at Tiffany\'s',
     year: 1961,
     tags: 'Movie',
     hasCitation: true, 
     hasYear: true
  }

];

console.log(quotes);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote (){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

console.log( getRandomQuote() );



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote ()
{
  var callQuote = getRandomQuote();
  var htmlQuote = '';
    htmlQuote = htmlQuote + '<p class="quote">' + callQuote.quote + '</p>';
    htmlQuote = htmlQuote + '<p class="source">' + callQuote.source;
    //
      
    if (callQuote.hasCitation)
    {
      htmlQuote = htmlQuote + '<span class="citation">' + callQuote.citation + '</span>';
    }
    
    if (callQuote.hasYear)
    {
     htmlQuote = htmlQuote + '<span class="year">' + callQuote.year + '</span>';    
    }
    if (callQuote.tags)
    {
      htmlQuote = htmlQuote + '<span class="tags">' + callQuote.tags + '</span>';
    }

    htmlQuote = htmlQuote + '</p>';

    document.getElementById("quote-box").innerHTML = htmlQuote;
  }



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.



function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
  }

setInterval("printQuote()", 3000);
setInterval("random_bg_color()", 3000);