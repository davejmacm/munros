const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Region = function () {
  this.data = null;
};

Region.prototype.bindEvents = function () {
  PubSub.subscribe('RegionSelectView:region-ready', (evt) => {
      const regionName = evt.detail;
      this.getData(regionName);
  });
};

Region.prototype.getData = function (regionName) {
  const url = `https://munroapi.herokuapp.com/munros/region/${regionName}`;
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

module.exports = Region;
