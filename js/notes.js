'use strict';


//generate a random number of customers per hour 
// this is an array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//var variable1 = "value"; // one value
//var array1 = [1,2,3,4,5,6,7,8, true, "string"]; //multiple values - enclosed in [ ]
//var object1 = {   // set of variables, arrays, functions, etc, in key/value form
//  key: "value3",  // variable
//  key2: "value2", // variable
//   array: [1,2,3], // array
//   sayHello: function() {  // function
//     alert("hello")
//  } // invoke function: object1.sayhello();
//};

function getRandomInt(minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
Store.prototype.generateDailyCookie = function () {
    this.cookiesAtEachHour = [];
    for (var i = 0; i < hours.length; i++) {
        this.cookiesAtEachHour.push(this.generateCookieAtEachHour());

    }
    return this.cookiesAtEachHour;
}

Store.prototype.renderToTable = function () {
    this.cookiesAtEachHour;
    var tableRow = document.createElement('tr');
    table.append(tableRow);
    var tableData = document.createElement('td');
    tableData.textContent = this.storeLocation;
    tableRow.append(tableData);
}


function Store(name, minCust, maxCust, aveCookiesPerCust) {
    this.storeLocation = name; // name of store
    this.minCust = minCust; // minimum customers
    this.maxCust = maxCust; // maximum customers
    this.aveCookiesPerCust = aveCookiesPerCust; // ave # cookies sold per cust
    this.hourlySalesResults = []; // hourly sales count (random number * aveCookiesPerCust)
    this.getHourlySalesResults = function () {

        for (var i = 0; i < hours.length; i++) {
            // random number between min and max cust
            var custPerHour = getRandomInt(this.minCust, this.maxCust);
            // find cookies per hour
            var totalCookiesPerHr = Math.floor(custPerHour * this.aveCookiesPerCust);
            this.hourlySalesResults.push(totalCookiesPerHr);
        } //for loop 
    }; //func
    //document.getElementById('cookieTable')
    this.setInHtml = function () {
        this.getHourlySalesResults();
        var totalCookies = 0;
        var cookieTable = document.getElementById('cookieTable');
        // city title is creating h1 naming it the location
        var cityTitle = document.createElement('th');
        cityTitle.textContent = this.storeLocation;
        cookieTable.appendChild(cityTitle);
        //tr
        for (var i = 0; i < hours.length; i++) {
            var hourTd = document.createElement('td');
            hourTd.textContent = hours[i] + ': ' + this.hourlySalesResults[i] + ' cookies';
            cookieTable.appendChild(hourTd)

        }
        var totalCookies = 0
        for (var j = 0; j < this.hourlySalesResults.length; j++) {
            totalCookies += this.hourlySalesResults[j];
        }

        var totalTd = document.createElement('td');
        totalTd.textContent = 'Total: ' + totalCookies + ' cookies'
        cookieTable.appendChild(totalTd);
        //end tr
    }
};  //constructor


var seattle = new Store('Seattle', 23, 65, 6.3);
seattle.generateDailyCookie();
var tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.generateDailyCookie();
var dubai = new Store('Dubai', 11, 38, 3.7);
dubai.generateDailyCookie();
var paris = new Store('Paris', 20, 38, 2.3);
paris.generateDailyCookie();
var lima = new Store('Lima', 2, 16, 4.6);
lima.generateDailyCookie();

seattle.setInHtml();
tokyo.setInHtml();
dubai.setInHtml();
paris.setInHtml();
lima.setInHtml();

// var form = document.getElementById('myForm')
// form.addEventListener('click',function(event) {
//    event.preventDefault()
//    var name = form.cookieName.value
//    form.cookieName.value = ""
//    form.cookieLocation.value = ""
//    console.log(cookieName + " " +  cookieLocation)
//    var h1 = document.createElement('h1')


// })


  //cityUl is now called setUl change accordingly one way or to something else that makes sense
//perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output 
//for each location should look like this:


// credit developer mozilla
// with lots of help from Alex Pena
// lecture model 
// tutor Vinicio
 