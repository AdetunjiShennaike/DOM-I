const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//add navbar text
let navBar = document.querySelectorAll('a');
// console.log(navBar);
let navItems = siteContent["nav"];
// console.log(navItems[`nav-item-1`])

navBar.forEach(function(anchor,i) {
  anchor.textContent = navItems[`nav-item-${i + 1}`];
});

//header section
const headerText = document.querySelector('h1');
headerText.textContent = siteContent['cta']['h1'];

const headerBtn = document.querySelector('button');
headerBtn.textContent = siteContent['cta']['button'];

const headerImg = document.getElementById('cta-img');
headerImg.src = siteContent['cta']['img-src'];


//main section
const mainSectionTopHeader = document.querySelectorAll('div.top-content div.text-content h4');
mainSectionTopHeader[0].textContent = siteContent['main-content']['features-h4'];
mainSectionTopHeader[1].textContent = siteContent['main-content']['about-h4'];

const mainSectionTop = document.querySelectorAll('div.top-content div.text-content p');
mainSectionTop[0].textContent = siteContent['main-content']['features-content'];
mainSectionTop[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const mainSectionBotHeader = document.querySelectorAll('div.bottom-content div.text-content h4');
mainSectionBotHeader[0].textContent = siteContent['main-content']['services-h4'];
mainSectionBotHeader[1].textContent = siteContent['main-content']['product-h4'];
mainSectionBotHeader[2].textContent = siteContent['main-content']['vision-h4'];

const mainSectionBot = document.querySelectorAll('div.bottom-content div.text-content p');
mainSectionBot[0].textContent = siteContent['main-content']['services-content'];
mainSectionBot[1].textContent = siteContent['main-content']['product-content'];
mainSectionBot[2].textContent = siteContent['main-content']['vision-content'];


//contact section
const contactHeader = document.querySelector('section.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('section.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];


//footer section
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];


//new elements
const newNavAnchor = document.createElement('a');
const newNavAnchor2 = document.createElement('a');

newNavAnchor.textContent = 'Greetings!';
newNavAnchor2.textContent = 'Become One!!!!';

const parent = document.querySelector('nav');
parent.appendChild(newNavAnchor2);
parent.prepend(newNavAnchor);

const pText = document.querySelectorAll('p');
console.log(pText)

headerBtn.addEventListener('click', function(event){
  pText.forEach( function(currentValue) {currentValue.style.color = 'orange';
  });
});

//style change
navBar.forEach( function(currentValue) {
  currentValue.style.color = 'green';
});

