/*jshint -W020*/
sentiment = Npm.require('sentiment');
/*jshint +W020*/


Meteor.methods({
  sentiment: function ( str, obj ) {
    check(str, String);
    if (obj) {
      check(obj, Object);
    }
    return sentiment( str, obj );
  }
});