var posts=["2023/11/21/Day1/","2024/01/10/Day10/","2024/01/21/Day11/","2023/11/24/Day3/","2023/11/22/Day2/","2023/11/26/Day4/","2023/11/28/Day5/","2023/11/29/Day6/","2023/12/03/Day8/","2023/11/30/Day7-20-18/","2023/11/30/Day7/","2024/01/03/Day9/","2023/11/20/hello-world/","2024/01/20/完全图解编译原理笔记/","2024/01/12/嵌入式基础知识笔记V1/","2023/12/09/毕设Week2/","2023/12/17/毕设Week3/","2024/01/09/毕设Week5/","2024/01/23/毕设Week6/","2024/01/04/毕设Week4/","2023/12/12/毕设材料清单/","2023/12/01/毕设Week1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };