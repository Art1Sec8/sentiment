/*jshint -W020*/
/**
 * sentiment -that uses the AFINN-111 wordlist to perform sentiment
 *    analysis on arbitrary blocks of input text
 * @param str {String} - the string to be analyzed
 * @param obj {Object} - key/value pairs to be used to overwrite
 *    values from AFINN
 * @param cb {Function} - the callback that should be called when
 *    the operation is complete
 * @returns {Object} - includes the results
 */
sentiment = function ( str, obj, cb ) {
/*jshint +W020*/
  check(str, String);
  if (obj) {
    if (_.isFunction(obj)) {
      //check if a callback was provided also
      if (_.isFunction(cb)) {
        console.error('sentiment: object parameter was not provided');
        return null;
      } else {
        //optional object was not provided, set callback properly
        cb = obj;
        obj = null;
      }
    } else {
      check(obj, Object);
    }
  }
  if(! _.isFunction(cb)) {
    console.error('sentiment: provided callback is not a function');
    return null;
  }

  Meteor.call('sentiment', str, obj, cb);
};
