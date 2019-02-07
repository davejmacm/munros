const PubSub = require('../helpers/pub_sub.js');

const RegionSelectView = function (formElement) {
  this.formElement = formElement;
};

RegionSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Region:region-ready', (evt) => {
    const allRegions = evt.detail;
    this.populate(allRegions);
    console.log(allRegions);
  });


  this.formElement.addEventListener('change', (evt) => {
    // evt.preventDefault();
    const regionName = evt.target['munros'].value;
    PubSub.publish('RegionSelectView:change', regionName);
    // evt.target.reset();
  });
};

RegionSelectView.prototype.populate = function (allRegions) {
  allRegions.forEach((region, index) => {
      const option = document.createElement('option');
      option.textContent = region.name;
      option.value = index;
      this.element.appendChild(option);
  });
};

module.exports = RegionSelectView;
