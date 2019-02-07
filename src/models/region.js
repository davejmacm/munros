const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Region = function () {
  this.data = [];
};

Region.prototype.bindEvents = function () {
  PubSub.subscribe('RegionSelectView:change', (evt) => {
      const regionName = evt.detail;
      // this.getData(regionName);
  });
};

Region.prototype.getData = function (regionName) {
  const url = 'https://munroapi.herokuapp.com/munros/';
  // console.log(url);
  const request_helper = new RequestHelper(url);
  request_helper.get()
    .then((region)=> {
      this.data = region;
      PubSub.publish('Region:region-ready', this.data);
    })
    .catch((err) => {
      PubSub.publish('Region:error', err);
    });
};

Region.prototype.getRegionName = function (munros) {
  return munros
  .map(munro => munro.region)
  .filter((region, index, regions) => regions.indexOf(region) === index);
};

// Region.prototype.handleDataReady = function (regions) {
//   const
// }

module.exports = Region;
