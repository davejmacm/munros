const Region = require('./models/region.js');
const RegionSelectView = require('./views/region_select_view.js');



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const region = new Region();
  region.bindEvents();

  const selectElement = document.querySelector('#munros');
  const regionDropdown = new RegionSelectView(selectElement);
  regionDropdown.bindEvents();
})
