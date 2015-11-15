Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('postsByflag', function() {
  return Posts.find({flagged:false});
});

Meteor.publish('postsByauthor', function(authorName) {
  return Posts.find({flagged:false,author:authorName});
});

Meteor.publish('postById', function(postId){
  return Posts.find({_id: postId});
});
