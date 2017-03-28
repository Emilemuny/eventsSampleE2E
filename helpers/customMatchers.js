var customMatchers = {

  toEndWith: function (util, customEqualityTesters) {
    'use strict';
    return {
      compare: function (actual, expected) {
        if (expected === undefined) {
          expected = '';
        }
        var result = {};
        result.pass = util.equals(actual.substr(expected.length), expected, customEqualityTesters);
        result.message = result.pass ? actual + ' ends with ' + expected : actual + ' does NOT end with ' + expected;
        return result;
      }
    };
  }
};

module.exports = customMatchers;
