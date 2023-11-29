var posts=["2023/11/21/Day1/","2023/11/22/Day2/","2023/11/24/Day3/","2023/11/28/Day5/","2023/11/20/hello-world/","2023/11/26/Day4/","2023/11/28/test-images/","2023/11/28/test-links/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };