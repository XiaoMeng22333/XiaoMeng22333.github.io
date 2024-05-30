var posts=["2024/05/22/张然/","2024/03/13/从阶级视角看第二次世界大战/","2024/05/06/小孟酱的12345投诉历程（2024年5月）/","2024/05/04/一要理论二要实践才能维持美好未来的实现/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };