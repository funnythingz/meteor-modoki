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

    Template.hello.events({
        'click #post': function (e) {
            e.preventDefault();
            if(_.isEmpty($('#tweet').val())) {
                alert("いれてね");
            } else {
                Tweets.insert({tweet: $('#tweet').val()});
                $('#tweet').val('')
            }
        }
    });
}
