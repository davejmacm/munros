const PubSub = require('../helpers/pub_sub.js');

const RegionSelectView = function (formElement) {
  this.formElement = formElement;
};

RegionSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Region:region-ready', (evt) => {
    const allRegions = evt.detail;
    this.populate(allRegions);
  });


  this.formElement.addEventListener('change', (evt) => {
    const regionName = evt.target['munros'].value;
    PubSub.publish('RegionSelectView:change', regionName);
  });
};

RegionSelectView.prototype.populate = function (allRegions) {
  allRegions.forEach((region, index) => {
      const option = document.createElement('option');
      option.textContent = region.name;
      option.value = index;
      this.formElement.appendChild(option);
  });
};

module.exports = RegionSelectView;
