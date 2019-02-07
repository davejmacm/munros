const MunroDetails = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroDetails.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const munroList = this.createMunroList();
  munroContainer.appendChild(munroList);
  this.munrosContainer.appendChild(munroContainer);
};

MunroDetails.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-Name');
  name.textContent = this.munro.name;
  return name;
};

MunroDetails.prototype.createMunroList = function () {
  const munrosList = document.createElement('ul');
  munrosList.classList.add('details');

  const munroListItemMeaning = document.createElement('li');
  munroListItemMeaning.textContent = this.munro.meaning;


  const munroListItemHeight = document.createElement('li');
  munroListItemHeight.textContent = this.munro.height;

  munrosList.appendChild(munroListItemMeaning);
  munrosList.appendChild(munroListItemHeight);

  return munrosList;

};

module.exports = MunroDetails;
