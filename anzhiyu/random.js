var posts=["2024/05/20/arary/Explain/","2024/05/16/backend/batchInsert/","2024/05/16/backend/redisson/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };