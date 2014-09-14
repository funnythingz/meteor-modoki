Tweets = new Mongo.Collection("tweets");

if (Meteor.isClient) {

  Template.hello.helpers({
    title: function () {
             return "title";
           }
  });

  Template.timeline.helpers({
    tweets: function() {
              return Tweets.find({});
            }
  });

  var postTweet = function() {
    if(_.isEmpty($('#tweet').val())) {
      alert("いれてね");
    } else {
      Tweets.insert({tweet: $('#tweet').val()});
      $('#tweet').val('')
    }
  }

  Template.hello.events({
    'keypress #tweet': function(e) {
      if(_.isEqual(e.keyCode, 13)) {
        postTweet();
      }
    },

    'click #post': function (e) {
      e.preventDefault();
      postTweet();
    }
  });
}
