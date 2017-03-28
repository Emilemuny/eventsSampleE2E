
exports.config = {

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['Tests/signUp.js'],

  params: {
    server: 'events.com',
    port:''
  },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 100000,
    realtimeFailure: true
  }

  // onPrepare: function(){
  //   var disableNgAnimate = function() {
  //     angular.module('disableNgAnimate', []).run(function($animate) {
  //       $animate.enabled(false);
  //     });
  //   };
  //   browser.addMockModule('disableNgAnimate', disableNgAnimate);
  // }
};
