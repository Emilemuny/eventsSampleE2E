
'use strict';

var login = function () {

  var protoButton        = require('./../helpers/protoButton');
  var protoTextbox       = require('./../helpers/protoTextBox.js');

  this.tbEmail     = new protoTextbox(element(by.model('loginCtrl.userCredentials.email')));
  this.tbPassword  = new protoTextbox(element(by.model('loginCtrl.userCredentials.password')));
  this.btnLogin   = new protoButton(element(by.css('[translate="login.labels.logIn"]')));

  this.loginUser = function (email, password) {
    this.tbEmail.write(email);
    this.tbPassword.write(password);
    this.btnLogin.click();
    browser.sleep(8000);
  };

};

module.exports = new login();
