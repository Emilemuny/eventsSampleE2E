
'use strict';

var homepage = function () {

  var protoButton        = require('./../helpers/protoButton');
  var protoTextbox       = require('./../helpers/protoTextBox.js');

  this.tbSearchEvents = new protoTextbox(element(by.model('searchText.name')));

  this.btnCreateEvent = new protoButton(element(by.css('[ng-click="collapsibles.header = true; setRouteCookie(urls.admin.create)"]')));
  this.btnLogIn       = new protoButton(element(by.css('[translate="shared.header.links.signUp"]')));
  this.btnSignUp      = new protoButton(element(by.css('[translate="shared.header.links.signUp"]')));

};

module.exports = new homepage();
