const Region = require('./models/region.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const region = new Region();
  region.bindEvents();
})
