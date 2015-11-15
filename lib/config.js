if (Meteor.isClient) {
  Meteor.startup(function(){
    var lang = window.navigator.userLanguage || window.navigator.language;
    // lang = lang.toLowerCase().replace(/-/,'_');
    console.log(lang);
    accountsUIBootstrap3.setLanguage(lang);
  })
}

if (Meteor.isServer) {
  Meteor.startup(function(){
    //微博登录
    ServiceConfiguration.configurations.upsert(
      { service: "weibo" },
      { $set: { clientId: "1292962797", secret: "75a730b58f5691de5522789070c319bc" } }
    );
    //微信登录
    ServiceConfiguration.configurations.remove({
      service: "wechat"
    });
    ServiceConfiguration.configurations.insert({
      service: "wechat",
      appId: "<your-app-id>",
      scope:'basic',
      secret: "<your-app-secret>"
    });

    //QQ登录
    ServiceConfiguration.configurations.remove({
      service: "qq"
    });
    ServiceConfiguration.configurations.insert({
      service: "qq",
      clientId: "<your-client-id>",
      scope:'get_user_info',
      secret: "<your-client-secret>"
    });
  })
}
