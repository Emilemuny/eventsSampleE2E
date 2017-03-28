
'use strict';

describe('Create An Event', function () {

  var homepage     = require('./../pageObjects/homepage.js');
  var signup     = require('./../pageObjects/signup.js');
  var login     = require('./../pageObjects/login.js');
  var customMatchers     = require('./../helpers/customMatchers.js');

  beforeEach(function () {
    jasmine.addMatchers(customMatchers);
  });

  describe('Home Page', function () {
    it('should get to the landing page of Events.com', function(){
      browser.get('https://events.com/');
      expect(browser.getCurrentUrl()).toEqual('https://events.com//'); // Will fail here, since the url shoud be events.com/ 
    });
    it('should validate there is a Create An Event Button enabled', function () {
      expect(homepage.btnCreateEvent.isDisplayed()).toBeTruthy();
      expect(homepage.btnCreateEvent.isEnabled()).toBeTruthy();
    });
    it('should validate there is a Login & SignUp buttons', function(){
      expect(homepage.btnLogIn.isDisplayed()).toBeTruthy();
      expect(homepage.btnSignUp.isDisplayed()).toBeTruthy();
    });
    it('should validate there is a Search Event textbox', function(){
      expect(homepage.tbSearchEvents.isDisplayed()).toBeTruthy();
    });
  });

  describe('Sign Up:', function () {

    it('should navigate to SignUp page', function(){
      homepage.btnSignUp.click();
      expect(browser.getCurrentUrl()).toContain('#/en_US/signup');
    });
    it('should throw an error msg when signing up without providing an email', function(){
      signup.tbFirstName.write('Emile');
      signup.tbLastName.write('Muny');
      signup.tbPassword.write('Password@11');
      signup.btnSignUp.click();
      expect(signup.labelOnErrorEmail.getText()).toContain('Please Enter an email address');
    });
    it('should throw an error msg when signing up without providing a valid password', function(){
      signup.tbPassword.clear();
      signup.tbEmail.write('emilemuny007@gmail.com');
      signup.tbPassword.write('123');
      signup.btnSignUp.click();
      expect(signup.labelOnErrorEmail.getText()).toContain('Please Enter a password');
    });
    it('should Signup Successfully', function(){
      signup.tbPassword.clear();
      signup.tbPassword.write('Password@11');
      signup.btnSignUp.click();
      expect(browser.getCurrentUrl()).toContain('https://my.events.com/#/en_US/events');
    });
    it('should logout', function(){
      element(by.css(['ng-click="closeAllExcept(); logOut()"'])).click();
      expect(element(by.css(['ng-click="closeAllExcept(); logOut()"'])).isPresent()).toBeFalsy();
    });
    it('should now login with the newly created account', function(){
      element(by.css('[translate="shared.header.links.logIn"]')).click();
      //homepage.btnLogIn.click();
      login.loginUser('emilemuny007@gmail.com', 'Password@11');
      expect(browser.getCurrentUrl()).toContain('https://my.events.com/#/en_US/events');
    });

  });

});
