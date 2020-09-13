'use strict';

//Uses a method of that object to generate a random number 
//of customers per hour.Objects / Math / random
//Calculate and store the simulated amounts of cookies 
//purchased for each hour at each location using average 
//cookies purchased and the random number of customers generated
//Store the results for each location in a separate array… 
//perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output for each 
//location should look like this:

//generate a random number of customers per hour
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomInt(minCust, maxCust) {
   minCust = Math.ceil(minCust);
   maxCust = Math.floor(maxCust);
   return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
   var Seattle = {
   storeLocation: 'Seattle',
   minCust: 23,
   maxCust: 65,
   aveCookiesPerCust: 6.3, // ave # cookies sold per cust
   hourlySalesResults: [],
   getHourlySalesResults: function() {
      for (var i=0; i<hours.length; i++) {
         // random number between min and max cust
         var custPerHour = getRandomInt(this.minCust, this.maxCust);
         // find cookies per hour
         var totalCookiesPerHr = Math.floor(custPerHour * this.aveCookiesPerCust);
         totalCookiesPerHr.push(this.hourlySalesResults);
      } //for loop 
   }, //func
   setInHtml: function() {
         this.getHourlySalesResults();
         var totalCookies = 0;
         var divId = document.getElementById('seattleStore');
         // set Ul makes unordered list
         var setUl = document.createElement('ul');
         // city title is creating h1 naming it the location
         var cityTitle = document.createElement('h1');
         cityTitle.textContent = this.storeLocation;
         setUl.appendChild(cityTitle);

         for(var i=0; i<hours.length; i++) {
            var hourLi = document.createElement('li');
            hourLi.textContent = hours[i] + ': ' +  this.salesPerHour[i] + 'cookies';
            cityUl.appendChild(hourLi);
         }
         for(var j=0; j<this.salesPerHour.length; j++){
            totalCookies += this.salesPerHour[i];
         }
         var totalLi = document.createElement('li');
         totalLi.textContent = 'Total: ' + totalCookies + ' cookies'
         cityUl.appendChild(totalLi);
         divId.append(cityUl);
    }
 }  //object
 seattleStore.getHourlySales();
 seattleStore.setInHtml();

  //cityUl is now called setUl change accordingly one way or to something else that makes sense
//perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output 
//for each location should look like this:


// credit developer mozilla
// with lots of help from Alex Pena