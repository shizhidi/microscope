Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
  name: 'postPage'
  // data: function(){ return Posts.findOne(this.params._id); }
});

//登录模板
// Router.route('/login', {name: 'login'});
// AccountsTemplates.configureRoute('signIn');
// AccountsTemplates.configureRoute('signUp');

//帖子提交页面
Router.route('/submit', {name: 'postSubmit'});

//如果数据获取失败也返回404
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
