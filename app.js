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

let everyBookStands = [];
let newBookstand = document.getElementById('newBookStand');

function bookStand (location, minCustomer, maxCustomer, avgCookie) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.guestPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookie = 0;
  this.avgCookie = avgCookie;
  everyBookStands.push(this);
}

new bookStand('Seattle', 23, 65, 6.3);
new bookStand('Tokyo', 3, 24, 1.2);
new bookStand('Dubai',11, 38, 3.7);
new bookStand('Paris',20, 38, 2.3);
new bookStand('Lima',2, 16, 4.6);

bookStand.prototype.calcGuestPerhour=function() {
    for (let i = 0; i < hours.length; i++) {
      this.guestPerHour.push(Math.floor(Math.random() * (this.minCustomer-this.maxCustomer+1)+this.minCustomer));
    }
 };
bookStand.prototype.calcCookiesPerHour=function() {
    
    this.calcGuestPerhour();
    for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.guestPerHour[i] * this.avgCookie))
    }
};
bookStand.prototype.calcTotalDailyCookies=function() {
 let allCookiesTotal = 0;
 for(let i = 0; i < hours.length; i++) {
   allCookiesTotal += this.cookiesPerHour[i];
 }
 return allCookiesTotal;
}  

bookStand.prototype.render=function() {
this.calcCookiesPerHour();
let bookStandTable = document.getElementById('t-body');
let trEl = document.createElement('tr');
let tdEl = document.createElement('td');
tdEl.textContent = this.location;
trEl.appendChild(tdEl);
for(let i = 0; i < hours.length; i++) {
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesPerHour[i];
  trEl.appendChild(tdEl);
}
tdEl = document.createElement('td');
tdEl.textContent = this.calcTotalDailyCookies();
trEl.appendChild(tdEl);
bookStandTable.appendChild(trEl);
};
function tableHead() {
let bookStandTable = document.getElementById('t-head');
let trEl = document.createElement('tr');
let thEl = document.createElement('th');
thEl.textContent = ' ';
trEl.appendChild(thEl);

for(let i = 0; i < hours.length; i++) {
  thEl = document.createElement('th');
thEl.textContent = hours[i];
trEl.appendChild(thEl);
if (i === hours.length-1) {
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  bookStandTable.appendChild(trEl);
    }
  }
}

function renderBookStand() {
for (let i = 0; i < everyBookStands.length; i++) {
  everyBookStands[i].render();
}
}

function totalAtFooter() {
let bookStandPerHour = [];
for(let i = 0; i < hours.length; i++) {
  let totalCookiesPerHour = 0;
  for(let j = 0; j < everyBookStands.length; j++) {
    totalCookiesPerHour += everyBookStands[j].cookiesPerHour[i];
 }
bookStandPerHour.push(totalCookiesPerHour);
}
let footData = document.getElementById('t-body');
let trEl = document.createElement('tr');
trEl.id = 'total-row';
let tdEl = document.createElement('td');
tdEl.textContent = 'Total';
trEl.appendChild(tdEl);
  for(let i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = bookStandPerHour[i];
    trEl.appendChild(tdEl);
}
let totalEveryStands = 0;
for (let i = 0; i < hours.length; i++) {
totalEveryStands = bookStandPerHour
}
tdEl = document.createElement('td');
tdEl.textContent = totalEveryStands;
trEl.appendChild(tdEl);

footData.appendChild(trEl);

}


newBookStand.addEventListener('submit', handleNewCookieStand);
function handleNewCookieStand(event) {
    event.preventDefault();


let newCookieStandName = event.target.location.value;
let newMinCustomer = event.target.minCustomer.value;
let newMaxCustomer = event.target.maxCustomer.value;
let newAvgCookie = event.target.avgCookie.value;
let newInput = new bookStand(newMinCustomer, newMaxCustomer, newCookieStandName,newAvgCookie);

event.target.location.value = null;
event.target.maxCustomer.value = null;
event.target.maxCustomer.value = null;
event.target.avgCookie.value = null;

newInput.render();
totalAtFooter();
dupRow();
}

function dupRow() {
let totalRow = document.getElementById('total-row');
if (totalRow ) {
  totalRow.remove();
}
}
tableHead();
renderBookStand();

