'use strict';

var protoButton = function (elm) {
  this.webElement = elm;
};

protoButton.prototype.isEnabled = function () {
  return this.webElement.isEnabled();
};

protoButton.prototype.getLabel = function () {
  return this.webElement.getText();
};

protoButton.prototype.select = function () {
  this.webElement.click();
};

protoButton.prototype.click = function () {
  this.webElement.click();
};

protoButton.prototype.getAttribute = function (attribute) {
  return this.webElement.getAttribute(attribute);
};

protoButton.prototype.isPresent  = function() {
  return this.webElement.isPresent();
};

protoButton.prototype.isDisplayed = function() {
  return this.webElement.isDisplayed();
};

module.exports = protoButton;
