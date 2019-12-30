const express = require('express');  // 설치한 express module 을 불러와서 변수에 담는다

var app = express();  // express를 실행하여 app object 를 초기화

app.use(express.static(__dirname + '/public'));

// 사용할 포트번호를 port 변수에 할당
var port = 3000;
// 1. port 변수를 이용, 3000번 포트에 node.js 서버를 할당
// 2. 서버가 실행되면 콜백함수를 실행
app.listen(port, () => {
    console.log("server on!! http://localhost:" + port);
});