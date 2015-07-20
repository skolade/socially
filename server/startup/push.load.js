Meteor.startup(function() {
  if(Push.find().count() === 0) {
    var push = [
      {
        'name': 'push 1'
      },
      {
        'name': 'push 2'
      }
    ];
    push.forEach(function(push) {
      Push.insert(push);
    });
  }
});