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
         this.hourlySalesResults.push(totalCookiesPerHr);
         
      } //for loop 
   }, //func
   setInHtml: function() {
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
 }  //object
var Tokyo = {
   storeLocation: 'Tokyo',
   minCust: 3,
   maxCust: 24,
   aveCookiesPerCust: 1.2, // ave # cookies sold per cust
   hourlySalesResults: [],
   getHourlySalesResults: function () {
      
      for (var i = 0; i < hours.length; i++) {
         // random number between min and max cust
         var custPerHour = getRandomInt(this.minCust, this.maxCust);
         // find cookies per hour
         var totalCookiesPerHr = Math.floor(custPerHour * this.aveCookiesPerCust);
         this.hourlySalesResults.push(totalCookiesPerHr);

      } //for loop 
   }, //func
   setInHtml: function () {
      this.getHourlySalesResults();
      var totalCookies = 0;
      var theList = document.getElementById('theList');
      // city title is creating h1 naming it the location
      var cityTitle = document.createElement('h3');
      cityTitle.textContent = this.storeLocation;
      theList.appendChild(cityTitle);

      for (var i = 0; i < hours.length; i++) {
         var hourLi = document.createElement('li');
         hourLi.textContent = hours[i] + ': ' + this.hourlySalesResults[i] + ' cookies';
         theList.appendChild(hourLi)

      }
      var totalCookies = 0
      for (var j = 0; j < this.hourlySalesResults.length; j++) {
         totalCookies += this.hourlySalesResults[j];
      }
      var totalLi = document.createElement('li');
      totalLi.textContent = 'Total: ' + totalCookies + ' cookies'
      theList.appendChild(totalLi);
   }
}  //object
var Dubai = {
   storeLocation: 'Dubai',
   minCust: 11,
   maxCust: 38,
   aveCookiesPerCust: 3.7, // ave # cookies sold per cust
   hourlySalesResults: [],
   getHourlySalesResults: function () {
      
      for (var i = 0; i < hours.length; i++) {
         // random number between min and max cust
         var custPerHour = getRandomInt(this.minCust, this.maxCust);
         // find cookies per hour
         var totalCookiesPerHr = Math.floor(custPerHour * this.aveCookiesPerCust);
         this.hourlySalesResults.push(totalCookiesPerHr);

      } //for loop 
   }, //func
   setInHtml: function () {
      this.getHourlySalesResults();
      var totalCookies = 0;
      var theList = document.getElementById('theList');
      // city title is creating h1 naming it the location
      var cityTitle = document.createElement('h3');
      cityTitle.textContent = this.storeLocation;
      theList.appendChild(cityTitle);

      for (var i = 0; i < hours.length; i++) {
         var hourLi = document.createElement('li');
         hourLi.textContent = hours[i] + ': ' + this.hourlySalesResults[i] + ' cookies';
         theList.appendChild(hourLi)

      }
      var totalCookies = 0
      for (var j = 0; j < this.hourlySalesResults.length; j++) {
         totalCookies += this.hourlySalesResults[j];
      }
      var totalLi = document.createElement('li');
      totalLi.textContent = 'Total: ' + totalCookies + ' cookies'
      theList.appendChild(totalLi);
   }
}  //object
var Lima = {
   storeLocation: 'Lima',
   minCust: 2,
   maxCust: 16,
   aveCookiesPerCust: 4.6, // ave # cookies sold per cust
   hourlySalesResults: [],
   getHourlySalesResults: function () {
      
      for (var i = 0; i < hours.length; i++) {
         // random number between min and max cust
         var custPerHour = getRandomInt(this.minCust, this.maxCust);
         // find cookies per hour
         var totalCookiesPerHr = Math.floor(custPerHour * this.aveCookiesPerCust);
         this.hourlySalesResults.push(totalCookiesPerHr);

      } //for loop 
   }, //func
   setInHtml: function () {
      this.getHourlySalesResults();
      var totalCookies = 0;
      var theList = document.getElementById('theList');
      // city title is creating h1 naming it the location
      var cityTitle = document.createElement('h3');
      cityTitle.textContent = this.storeLocation;
      theList.appendChild(cityTitle);

      for (var i = 0; i < hours.length; i++) {
         var hourLi = document.createElement('li');
         hourLi.textContent = hours[i] + ': ' + this.hourlySalesResults[i] + ' cookies';
         theList.appendChild(hourLi)

      }
      var totalCookies = 0
      for (var j = 0; j < this.hourlySalesResults.length; j++) {
         totalCookies += this.hourlySalesResults[j];
      }
      var totalLi = document.createElement('li');
      totalLi.textContent = 'Total: ' + totalCookies + ' cookies'
      theList.appendChild(totalLi);
   }
}  //object
var Paris = {
   storeLocation: 'Paris',
   minCust: 20,
   maxCust: 38,
   aveCookiesPerCust: 2.3, // ave # cookies sold per cust
   hourlySalesResults: [],
   getHourlySalesResults: function () {
      
      for (var i = 0; i < hours.length; i++) {
         // random number between min and max cust
         var custPerHour = getRandomInt(this.minCust, this.maxCust);
         // find cookies per hour
         var totalCookiesPerHr = Math.floor(custPerHour * this.aveCookiesPerCust);
         this.hourlySalesResults.push(totalCookiesPerHr);

      } //for loop 
   }, //func
   setInHtml: function () {
      this.getHourlySalesResults();
      var totalCookies = 0;
      var theList = document.getElementById('theList');
      // city title is creating h1 naming it the location
      var cityTitle = document.createElement('h3');
      cityTitle.textContent = this.storeLocation;
      theList.appendChild(cityTitle);

      for (var i = 0; i < hours.length; i++) {
         var hourLi = document.createElement('li');
         hourLi.textContent = hours[i] + ': ' + this.hourlySalesResults[i] + ' cookies';
         theList.appendChild(hourLi)

      }
      var totalCookies = 0
      for (var j = 0; j < this.hourlySalesResults.length; j++) {
         totalCookies += this.hourlySalesResults[j];
      }
      var totalLi = document.createElement('li');
      totalLi.textContent = 'Total: ' + totalCookies + ' cookies'
      theList.appendChild(totalLi);
   }
}  //object
Seattle.setInHtml();
Tokyo.setInHtml();
Dubai.setInHtml();
Paris.setInHtml();
Lima.setInHtml();

  //cityUl is now called setUl change accordingly one way or to something else that makes sense
//perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output 
//for each location should look like this:


// credit developer mozilla
// with lots of help from Alex Pena
