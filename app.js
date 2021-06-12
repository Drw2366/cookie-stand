
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
  
  const Bookstand(location, minCust, maxCust, avgCookie){
  this.location = location;
    minCust: 23,
    maxCust: 65,
    guestEachHour: [],
    cookiesPerHour: [],
    totalDailyCookie: 0,
    avgCookie: 6.3,
  
  calcCustomerPerhour: function () {
      for (let i = 0; i < hours.length; i++) {
        this.guestEachHour.push(random(this.minCust, this.maxCust));
        console.log(this.guestEachHour);
      }
    },
    calcCookiesPerHour: function () {
      this.calcCustomerPerhour();
      for (let i = 0; i < hours.length; i++) {
        const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
        this.cookiesPerHour.push(eachHour);
        this.totalDailyCookie += eachHour;
      }
    },
  
  render() {
    this.calcCookiesPerHour();
    const ul = document.getElementById('seattle')
    ul.textContent = "seattle";
    for (let i = 0; i < hours.length; i++) {
    //to create the list item
    const li = document.createElement("li")
    // to add the text 6am: 16 cookies
    li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
    ul.appendChild(li);
    console.log(li)
    
    }
    //create a list item (li) for the total
    const li = document.createElement('li')
    //total: 34543 cookies
    li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
    ul.appendChild(li);
    
    }
    };
  
  
  const tokyo = {
    location: "tokyo",
    minCust: 3,
    maxCust: 24,
    guestEachHour: [],
    cookiesPerHour: [],
    totalDailyCookie: 0,
    avgCookie: 1.2,
  
  calcCustomerPerhour: function () {
      for (let i = 0; i < hours.length; i++) {
        this.guestEachHour.push(random(this.minCust, this.maxCust));
        console.log(this.guestEachHour);
      }
    },
    calcCookiesPerHour: function () {
      this.calcCustomerPerhour();
      for(let i = 0; i < hours.length; i++) {
        const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
        this.cookiesPerHour.push(eachHour);
        this.totalDailyCookie += eachHour;
      }
    },
  
  render() {
    this.calcCookiesPerHour();
    const ul = document.getElementById('tokyo')
    ul.textContent = "tokyo";
    for (let i = 0; i < hours.length; i++) {
    //to create the list item
    const li = document.createElement("li")
    // to add the text 6am: 16 cookies
    li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
    ul.appendChild(li);
    console.log(li)
    
    }
    //create a list item (li) for the total
    const li = document.createElement('li')
    //total: 34543 cookies
    li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
    ul.appendChild(li);
    
    }
    };
  
  const dubai = {
    location: "dubai",
    minCust: 11,
    maxCust: 38,
    guestEachHour: [],
    cookiesPerHour: [],
    totalDailyCookie: 0,
    avgCookie: 3.7,
  
  calcCustomerPerhour: function () {
      for (let i = 0; i < hours.length; i++) {
        this.guestEachHour.push(random(this.minCust, this.maxCust));
        console.log(this.guestEachHour);
      }
    },
    calcCookiesPerHour: function () {
      this.calcCustomerPerhour();
      for (let i = 0; i < hours.length; i++) {
        const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
        this.cookiesPerHour.push(eachHour);
        this.totalDailyCookie += eachHour;
      }
    },
  
  render() {
    this.calcCookiesPerHour();
    const ul = document.getElementById('dubai')
    ul.textContent = "dubai";
    for (let i = 0; i < hours.length; i++) {
    //to create the list item
    const li = document.createElement("li")
    // to add the text 6am: 16 cookies
    li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
    ul.appendChild(li);
    console.log(li)
    
    }
    //create a list item (li) for the total
    const li = document.createElement('li')
    //total: 34543 cookies
    li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
    ul.appendChild(li);
    
    }
    };
  const paris = {
    location: "paris",
    minCust: 23,
    maxCust: 65,
    guestEachHour: [],
    cookiesPerHour: [],
    totalDailyCookie: 0,
    avgCookie: 6.3,
  
  calcCustomerPerhour: function () {
      for (let i = 0; i < hours.length; i++) {
        this.guestEachHour.push(random(this.minCust, this.maxCust));
        console.log(this.guestEachHour);
      }
    },
    calcCookiesPerHour: function () {
      this.calcCustomerPerhour();
      for (let i = 0; i < hours.length; i++) {
        const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
        this.cookiesPerHour.push(eachHour);
        this.totalDailyCookie += eachHour;
      }
    },
  
  render() {
    this.calcCookiesPerHour();
    const ul = document.getElementById('paris')
    ul.textContent = "paris";
    for (let i = 0; i < hours.length; i++) {
    //to create the list item
    const li = document.createElement("li")
    // to add the text 6am: 16 cookies
    li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
    ul.appendChild(li);
    console.log(li)
    
    }
    //create a list item (li) for the total
    const li = document.createElement('li')
    //total: 34543 cookies
    li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
    ul.appendChild(li);
    
    }
    };
  
  const lima = {
    location: "lima",
    minCust: 23,
    maxCust: 65,
    guestEachHour: [],
    cookiesPerHour: [],
    totalDailyCookie: 0,
    avgCookie: 6.3,
  
  calcCustomerPerhour: function () {
      for (let i = 0; i < hours.length; i++) {
        this.guestEachHour.push(random(this.minCust, this.maxCust));
        console.log(this.guestEachHour);
      }
    },
    calcCookiesPerHour: function () {
      this.calcCustomerPerhour();
      for (let i = 0; i < hours.length; i++) {
        const eachHour = Math.ceil(this.avgCookie * this.guestEachHour[i]);
        this.cookiesPerHour.push(eachHour);
        this.totalDailyCookie += eachHour;
      }
    },
  
  render() {
    this.calcCookiesPerHour();
    const ul = document.getElementById('lima')
    ul.textContent = "lima";
    for (let i = 0; i < hours.length; i++) {
    //to create the list item
    const li = document.createElement("li")
    // to add the text 6am: 16 cookies
    li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
    ul.appendChild(li);
    console.log(li)
    
    }
    //create a list item (li) for the total
    const li = document.createElement('li')
    //total: 34543 cookies
    li.textContent = 'Total: ' + this.totalDailyCookie + 'cookies';
    ul.appendChild(li);
    
    }
    };
  
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const allShops = [seattle,tokyo,dubai,paris,lima];
    
    (function renderAllShops() {
      for (let i = 0; i < allShops.length; i++) {
        allShops[i].render();
      }
    })();
