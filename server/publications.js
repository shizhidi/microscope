Meteor.publish('posts', function() {
  return Posts.find({flagged:false});
});

Meteor.publish('postsByauthor', function(authorName) {
  return Posts.find({flagged:false,author:authorName});
});
