'use strict'

const hours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm"
  ];
  
  function Cookiestand(location, minCust, maxCust, avgCookie){
    this.location = location;
    this.minCust = minCust;
    this.maxcust = maxCust;
    this.guestEachHour = [];
    this.cookiesPerHour = [];
    this.totalDailyCookie = 0;
    this.avgCookie = avgCookie;

  }
  
  Cookiestand.prototype.calcCustomerPerhour = function() {
      for (let i = 0; i < hours.length; i++) {
        this.guestEachHour.push(random(this.minCust, this.maxCust));
        console.log(this.guestEachHour);
      }
    },
 Cookiestand.prototype.calcCookiesPerHour = function() {
      this.calcCustomerPerhour();
      for (let i = 0; i < hours.length; i++) {
        const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
        this.cookiesPerHour.push(eachHour);
        this.totalDailyCookie += eachHour;
      }
    };
  
  Cookiestand.prototype.render = function() {
    this.calcCookiesPerHour();
    const tableRow = document.createElement('tr');
    let tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.location;
    tableRow.appendChild(tableDataElement);
    for (let i = 0; i < hours.length; i++) {
        tableDataElement = document.createElement('td');
        tableDataElement.textContent = this.cookiesPerHour[i];
        tableRow.appendChild(tableDataElement);
    }
    const tableHeader = document.createElement('th');
    tableHeader.textContent = this.totalDailyCookie;
    tableRow.appendChild(tableHeader);
    tableDataElement.appendChild(tableRow);
};
Cookiestand.all = [];
new Cookiestand('Seattle', 23,65,6.3);
new Cookiestand('Tokyo', 3, 24, 1.2);
new Cookiestand('Dubai', 11, 38, 3.7);
new Cookiestand('Paris', 20,38,2.3);
new Cookiestand('Lima', 2, 16, 4.6);
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeHeaderRow() {
    const tableRow = document.createElement('tr');
    let tableHeader = document.createElement('th');
    tableHeader.textContent = 'Locations';
    tableRow.appendChild(tableHeader);
    for (let i = 0; i < hours.length; i++) {
        tableHeader = document.createElement('th');
        tableHeader.textContent = hours[i];
        tableRow.appendChild(tableHeader);
      }
      tableHeader = document.createElement('th');
      tableHeader.textContent = 'Location Totals';
      tableRow.appendChild(tableHeader);
      tableElement.appendChild(tableRow);
    }
    function makeFooterRow() {
      const tableRow = document.createElement('tr');
      let tableHeader = document.createElement('th');
    tableHeader.textContent = 'Totals for all locations';
    table.row.appendChild(tableHeader);
    let totalOfTotals = 0;
    for(let i = 0; i < hours.length; i++) {
        let hourlyTotal = 0;
        for(const p = 0; p < Cookiestand.all.length; p++){
            hourlyTotal += Cookiestand.all[p].calcCookiesPerHour[i];
            totalOfTotals += Cookiestand.all[p].cookiesPerHour[i];
        }
        tableHeader = document.createElement('th');
        tableHeader.textContent = hourlyTotal;
        tableRow.appendChild(tableHeader);
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent =totalOfTotals;
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
}
(function renderTable() {
    makeHeaderRow();
    for(let i = 0; i < Cookiestand.all.length; i++){
        Cookiestand.all[i].render();
    }
    makeFooterRow();
})();





// 'use strict'

// const hours = [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm"
//   ];
  
//   const Cookiestand(location, minCust, maxCust, avgCookie){
//   this.location = location;
//     minCust: 23,
//     maxCust: 65,
//     guestEachHour: [],
//     cookiesPerHour: [],
//     totalDailyCookie: 0,
//     avgCookie: 6.3,
  
//   calcCustomerPerhour: function () {
//       for (let i = 0; i < hours.length; i++) {
//         this.guestEachHour.push(random(this.minCust, this.maxCust));
//         console.log(this.guestEachHour);
//       }
//     },
//     calcCookiesPerHour: function () {
//       this.calcCustomerPerhour();
//       for (let i = 0; i < hours.length; i++) {
//         const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
//         this.cookiesPerHour.push(eachHour);
//         this.totalDailyCookie += eachHour;
//       }
//     },
  
//   render() {
//     this.calcCookiesPerHour();
//     const ul = document.getElementById('seattle')
//     ul.textContent = "seattle";
//     for (let i = 0; i < hours.length; i++) {
//     //to create the list item
//     const li = document.createElement("li")
//     // to add the text 6am: 16 cookies
//     li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
//     ul.appendChild(li);
//     console.log(li)
    
//     }
//     //create a list item (li) for the total
//     const li = document.createElement('li')
//     //total: 34543 cookies
//     li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
//     ul.appendChild(li);
    
//     }
//     };
  
  
//   const tokyo = {
//     location: "tokyo",
//     minCust: 3,
//     maxCust: 24,
//     guestEachHour: [],
//     cookiesPerHour: [],
//     totalDailyCookie: 0,
//     avgCookie: 1.2,
  
//   calcCustomerPerhour: function () {
//       for (let i = 0; i < hours.length; i++) {
//         this.guestEachHour.push(random(this.minCust, this.maxCust));
//         console.log(this.guestEachHour);
//       }
//     },
//     calcCookiesPerHour: function () {
//       this.calcCustomerPerhour();
//       for(let i = 0; i < hours.length; i++) {
//         const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
//         this.cookiesPerHour.push(eachHour);
//         this.totalDailyCookie += eachHour;
//       }
//     },
  
//   render() {
//     this.calcCookiesPerHour();
//     const ul = document.getElementById('tokyo')
//     ul.textContent = "tokyo";
//     for (let i = 0; i < hours.length; i++) {
//     //to create the list item
//     const li = document.createElement("li")
//     // to add the text 6am: 16 cookies
//     li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
//     ul.appendChild(li);
//     console.log(li)
    
//     }
//     //create a list item (li) for the total
//     const li = document.createElement('li')
//     //total: 34543 cookies
//     li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
//     ul.appendChild(li);
    
//     }
//     };
  
//   const dubai = {
//     location: "dubai",
//     minCust: 11,
//     maxCust: 38,
//     guestEachHour: [],
//     cookiesPerHour: [],
//     totalDailyCookie: 0,
//     avgCookie: 3.7,
  
//   calcCustomerPerhour: function () {
//       for (let i = 0; i < hours.length; i++) {
//         this.guestEachHour.push(random(this.minCust, this.maxCust));
//         console.log(this.guestEachHour);
//       }
//     },
//     calcCookiesPerHour: function () {
//       this.calcCustomerPerhour();
//       for (let i = 0; i < hours.length; i++) {
//         const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
//         this.cookiesPerHour.push(eachHour);
//         this.totalDailyCookie += eachHour;
//       }
//     },
  
//   render() {
//     this.calcCookiesPerHour();
//     const ul = document.getElementById('dubai')
//     ul.textContent = "dubai";
//     for (let i = 0; i < hours.length; i++) {
//     //to create the list item
//     const li = document.createElement("li")
//     // to add the text 6am: 16 cookies
//     li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
//     ul.appendChild(li);
//     console.log(li)
    
//     }
//     //create a list item (li) for the total
//     const li = document.createElement('li')
//     //total: 34543 cookies
//     li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
//     ul.appendChild(li);
    
//     }
//     };
//   const paris = {
//     location: "paris",
//     minCust: 23,
//     maxCust: 65,
//     guestEachHour: [],
//     cookiesPerHour: [],
//     totalDailyCookie: 0,
//     avgCookie: 6.3,
  
//   calcCustomerPerhour: function () {
//       for (let i = 0; i < hours.length; i++) {
//         this.guestEachHour.push(random(this.minCust, this.maxCust));
//         console.log(this.guestEachHour);
//       }
//     },
//     calcCookiesPerHour: function () {
//       this.calcCustomerPerhour();
//       for (let i = 0; i < hours.length; i++) {
//         const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
//         this.cookiesPerHour.push(eachHour);
//         this.totalDailyCookie += eachHour;
//       }
//     },
  
//   render() {
//     this.calcCookiesPerHour();
//     const ul = document.getElementById('paris')
//     ul.textContent = "paris";
//     for (let i = 0; i < hours.length; i++) {
//     //to create the list item
//     const li = document.createElement("li")
//     // to add the text 6am: 16 cookies
//     li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
//     ul.appendChild(li);
//     console.log(li)
    
//     }
//     //create a list item (li) for the total
//     const li = document.createElement('li')
//     //total: 34543 cookies
//     li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
//     ul.appendChild(li);
    
//     }
//     };
  
//   const lima = {
//     location: "lima",
//     minCust: 23,
//     maxCust: 65,
//     guestEachHour: [],
//     cookiesPerHour: [],
//     totalDailyCookie: 0,
//     avgCookie: 6.3,
  
//   calcCustomerPerhour: function () {
//       for (let i = 0; i < hours.length; i++) {
//         this.guestEachHour.push(random(this.minCust, this.maxCust));
//         console.log(this.guestEachHour);
//       }
//     },
//     calcCookiesPerHour: function () {
//       this.calcCustomerPerhour();
//       for (let i = 0; i < hours.length; i++) {
//         const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
//         this.cookiesPerHour.push(eachHour);
//         this.totalDailyCookie += eachHour;
//       }
//     },
  
//   render() {
//     this.calcCookiesPerHour();
//     const ul = document.getElementById('lima')
//     ul.textContent = "lima";
//     for (let i = 0; i < hours.length; i++) {
//     //to create the list item
//     const li = document.createElement("li")
//     // to add the text 6am: 16 cookies
//     li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
//     ul.appendChild(li);
//     console.log(li)
    
//     }
//     //create a list item (li) for the total
//     const li = document.createElement('li')
//     //total: 34543 cookies
//     li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
//     ul.appendChild(li);
    
//     }
//     };
  
//     function random(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
    
//     const allShops = [seattle,tokyo,dubai,paris,lima];
    
//     (function renderAllShops() {
//       for (let i = 0; i < allShops.length; i++) {
//         allShops[i].render();
//       }
//     })();
