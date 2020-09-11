console.log('hello from javascript')

var seattleList= document.getElementById('seattleStore')
seattleList.textContent='listItem,'
// document.create element to create li elements w/js
//append child method-- allow to build list in js to place onto ul in html
//for loop --multiple li elements

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  const newDiv = document.createElement("div"); 
  
  // and give it some content 
  const newContent = document.createTextNode("Hi there and greetings!"); 
  
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
//developer mozilla credit for createElement examples

    var i;
for (i = 0; i < numCookies.length; i++) {
  text += numCookies[i] + "<br>";
}
//append to html page
