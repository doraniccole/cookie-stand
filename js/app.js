'use strict';


//generate a random number of customers per hour 
// this is an array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];

function getRandomInt(minCus, maxCus) {
   minCus = Math.ceil(minCus);
   maxCus = Math.floor(maxCus);
   return Math.floor(Math.random() * (maxCus - minCus) + minCus);
}
 function Store(name, minCus, maxCus, aveCookiesPerCus) {
   this.storeLocation= name; // name of store
   this.minCus= minCus; // minimum customers
   this.maxCus= maxCus; // maximum customers
   this.aveCookiesPerCus= aveCookiesPerCus; // ave # cookies sold per cus
   this.hourlySalesResultsResults= []; // hourly sales count (random number * aveCookiesPerCus)
   this.totalHolder=0 //hold the total number of cookies per day

    for (var i = 0; i < hours.length; i++) {
   //       // random number between min and max cus
         var cusPerHour = getRandomInt(this.minCus, this.maxCus);
   //       // find cookies per hour
         var totalCookiesPerHr = Math.floor(cusPerHour * this.aveCookiesPerCus);
         this.hourlySalesResultsResults.push(totalCookiesPerHr);
      }
   for (var i=0; i < this.hourlySalesResultsResults.length; i++) {
      this.totalHolder += this.hourlySalesResultsResults[i];
   
   }

//console.log('totalHolder: ' + this.totalHolder)
         
 };  //constructor   
 // Alex Pena guidance 
 

var seattle = new Store('Seattle', 23, 65, 6.3);
//seattle.generateDailyCookie();
var tokyo = new Store('Tokyo', 3, 24, 1.2);
//tokyo.generateDailyCookie();
var dubai = new Store('Dubai', 11, 38, 3.7);
//dubai.generateDailyCookie();
var paris = new Store('Paris', 20, 38, 2.3);
//paris.generateDailyCookie();
var lima = new Store('Lima', 2, 16, 4.6);
//lima.generateDailyCookie();

var form = document.getElementById('myForm');

form.addEventListener('click', function(event) {
   event.preventDefault();
   var name = form.cookieName.value;
   form.cookieName.value = "";
   var amount = form.cookieLocation.value;
   form.cookieLocation.value = "";
console.log(cookieName + " " +  cookieLocation);
var h1 = document.createElement('h1');

})

var tableBody = document.getElementById('salesTable');

function renderHeader() {
   var headerRow = document.createElement('tr');
   var headerStore = document.createElement('th');
   headerStore.textContent = 'Locations';
   headerRow.appendChild(headerStore);
   tableBody.appendChild(headerRow);

   for (var i = 0; i < hours.length; i++) {
      var headerHours = document.createElement('th');
      headerHours.textContent = hours[i];
      headerRow.appendChild(headerHours);
   }
   var headerTotal = document.createElement('th');
   headerTotal.textContent = 'Store Total';
   headerRow.appendChild(headerTotal);
}
Store.prototype.body = function () {
   var bodyRow = document.createElement('tr');
   tableBody.appendChild(bodyRow);

   //Create Store name for each row
   var bodyStore = document.createElement('td');
   bodyStore.textContent = this.storeName;
   bodyRow.appendChild(bodyStore);

   // Hours by loop through hours array and rendering hourlySalesResults
   for (var i = 0; i < hours.length; i++) {
      var bodyHours = document.createElement('td');
      bodyHours.textContent = this.hourlySalesResults[i];
      bodyRow.appendChild(bodyHours);
   }

   //Grabbing Daily Total and rendering it at the end of the row.
   var bodyTotal = document.createElement('td');
   bodyTotal.textContent = this.dailyTotals;
   bodyRow.appendChild(bodyTotal);
}

function renderFooter() {
   var footerRow = document.createElement('tr');
   var footerStore = document.createElement('th');
   footerStore.textContent = 'Hourly Totals';
   footerRow.appendChild(footerStore);

   var grandTotal = 0;
   var totalhourlySalesResults = 0;
   for (var row = 0; row < hours.length; row++) {
      totalhourlySalesResults = 0;
      for (var column = 0; column < storeLocations.length; column++) {
         totalhourlySalesResults += storeLocations[column].hourlySalesResults[row];
         grandTotal += storeLocations[column].hourlySalesResults[row];
      }
      var totalHours = document.createElement('th');
      totalHours.textContent = totalhourlySalesResults;
      footerRow.appendChild(totalHours);
   }
   var grandTotalSales = document.createElement('th');
   grandTotalSales.textContent = grandTotal;
   footerRow.appendChild(grandTotalSales);
   tableBody.appendChild(footerRow);
}

function render() {
   tableBody.innerHTML = null;
   renderHeader();
   for (var i = 0; i < storeLocations.length; i++) {
      storeLocations[i].body();
   }
   renderFooter();
}
render();
  //cityUl is now called setUl change accordingly one way or to something else that makes sense
//perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output 
//for each location should look like this:
//    a table


// credit developer mozilla
// with lots of help from Alex Pena
// lecture model 
// tutor Vinicio