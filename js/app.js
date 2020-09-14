'use strict';



//generate a random number of customers per hour
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomInt(minCust, maxCust) {
   minCust = Math.ceil(minCust);
   maxCust = Math.floor(maxCust);
   return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
 function Store(name,minCust,maxCust,aveCookiesPerCust) {
   this.storeLocation= name;
   this.minCust= minCust;
   this.maxCust= maxCust;
   this.aveCookiesPerCust= aveCookiesPerCust; // ave # cookies sold per cust
   this.hourlySalesResults= [];
   this.getHourlySalesResults= function () {
      
      for (var i=0; i<hours.length; i++) {
         // random number between min and max cust
         var custPerHour = getRandomInt(this.minCust, this.maxCust);
         // find cookies per hour
         var totalCookiesPerHr = Math.floor(custPerHour * this.aveCookiesPerCust);
         this.hourlySalesResults.push(totalCookiesPerHr);
      } //for loop 
   }; //func

   this.setInHtml= function() {
         this.getHourlySalesResults();
         var totalCookies = 0;
         var theList = document.getElementById('theList');
         // city title is creating h1 naming it the location
         var cityTitle = document.createElement('h3');
         cityTitle.textContent = this.storeLocation;
         theList.appendChild(cityTitle);

         for(var i=0; i<hours.length; i++) {
            var hourLi = document.createElement('li');
            hourLi.textContent = hours[i] + ': ' +  this.hourlySalesResults[i] + ' cookies';
            theList.appendChild(hourLi)

         }
         var totalCookies = 0
         for(var j=0; j<this.hourlySalesResults.length; j++) {
            totalCookies += this.hourlySalesResults[j];
         }
         var totalLi = document.createElement('li');
         totalLi.textContent = 'Total: ' + totalCookies + ' cookies'
         theList.appendChild(totalLi);
   }
 };  //constructor

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

seattle.setInHtml();
tokyo.setInHtml();
dubai.setInHtml();
paris.setInHtml();
lima.setInHtml();


  //cityUl is now called setUl change accordingly one way or to something else that makes sense
//perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output 
//for each location should look like this:


// credit developer mozilla
// with lots of help from Alex Pena
