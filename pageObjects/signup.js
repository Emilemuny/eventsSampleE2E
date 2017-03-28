
'use strict';

var signup = function () {

  var protoButton        = require('./../helpers/protoButton');
  var protoTextbox       = require('./../helpers/protoTextBox.js');

  this.tbFirstName = new protoTextbox(element(by.model('signupCtrl.userInfo.firstName')));
  this.tbLastName  = new protoTextbox(element(by.model('signupCtrl.userInfo.lastName')));
  this.tbEmail     = new protoTextbox(element(by.model('signupCtrl.userInfo.email')));
  this.tbPassword  = new protoTextbox(element(by.model('signupCtrl.userInfo.password')));

  this.btnSignUp   = new protoButton(element(by.css('[translate="shared.header.links.signUp"]')));

  this.labelOnErrorEmail = element(by.css('[translate="login.messages.loginvalidEmail"]'));
  this.labelOnErrorPwd   = element(by.css('[translate="login.labels.enterPassword"]'));

};

module.exports = new signup();
