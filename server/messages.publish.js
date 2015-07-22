'use strict'

Meteor.publish('messages', function(options, searchString) {
  if(!searchString) {
    searchString = '';
  }
  Counts.publish(this, 'numberOfMessages', Messages.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});
  return Messages.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});
