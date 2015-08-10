Push = new Mongo.Collection('push');

Push.allow({
  insert: function(userId, push) {
    return userId;
  },
  update: function(userId, push, fields, modifier) {
    return userId;
  },
  remove: function(userId, push) {
    return userId;
  }
});