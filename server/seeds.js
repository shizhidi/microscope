if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    flagged: false,
    author: 'tom',
    category: 'javascript'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    flagged: false,
    author: 'tom',
    category: 'javascript'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    flagged: false,
    author: 'tom',
    category: 'css'
  });

  Posts.insert({
    title: 'The baidu',
    url: 'http://www.baidu.com',
    flagged: false,
    author: 'lilei',
    category: 'php'
  });

  Posts.insert({
    title: 'The goole Book',
    url: 'http://google.com',
    flagged: true,
    author: 'lilei',
    category: 'php'
  });
}
