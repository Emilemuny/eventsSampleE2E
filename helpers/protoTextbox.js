'use strict';

var protoTextBox = function (elm) {
  this.webElement = elm;
};

protoTextBox.prototype.isEnabled = function () {
  return this.webElement.isEnabled();
};

protoTextBox.prototype.select = function () {
  return this.webElement.click();
};

protoTextBox.prototype.clear = function () {
  return this.webElement.clear();
};

protoTextBox.prototype.read = function () {
  return this.webElement.getAttribute('value');
};

protoTextBox.prototype.write = function (txt, enter) {
  if(enter){
    return this.webElement.sendKeys(txt, protractor.Key.ENTER);
  }else{
    return this.webElement.sendKeys(txt);
  }
};

protoTextBox.prototype.getAttribute = function (attribute) {
  return this.webElement.getAttribute(attribute);
};

protoTextBox.prototype.isPresent = function() {
  return this.webElement.isPresent ();
};

protoTextBox.prototype.isDisplayed = function() {
  return this.webElement.isDisplayed();
};

module.exports = protoTextBox;
