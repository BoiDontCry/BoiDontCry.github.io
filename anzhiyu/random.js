var posts=["2023/11/21/Day1/","2023/11/22/Day2/","2023/11/24/Day3/","2023/11/28/Day5/","2023/11/29/Day6/","2023/11/30/Day7/","2023/11/26/Day4/","2023/11/30/Day7-20-18/","2023/12/03/Day8/","2023/12/01/毕设Week1/","2023/11/20/hello-world/","2023/12/09/毕设Week2/","2023/12/12/毕设材料清单/","2023/12/17/毕设Week3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };