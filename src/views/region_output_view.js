const PubSub = require('../helpers/pub_sub.js');
const MunroDetails = require('./munro_details.js');

const RegionOutputView = function (container) {
  this.container = container;
};

RegionOutputView.prototype.bindEvents = function () {
  PubSub.subscribe('Region:region-ready', (evt)=> {
    this.data = evt.detail;
    this.render();
  });
};

RegionOutputView.prototype.render = function () {
  this.data.forEach((munro) => {
      const munroView = new MunroDetails(this.container, munro);
      munroView.render();
  });
};

module.exports = RegionOutputView;
