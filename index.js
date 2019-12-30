const express = require('express');  // 설치한 express module 을 불러와서 변수에 담는다

var app = express();  // express를 실행하여 app object 를 초기화

app.set('view engine', 'ejs'); // ejs 를 사용하기 위해 express의 view engine에 설정
app.use(express.static(__dirname + '/public'));

// query를 통해서 이름을 받는 코드
app.get('/hello', (req, res) => {
    res.render('hello', {name:req.query.nameQuery});
});
// route Parameter를 통해 이름을 받는 코드
// 콜론(:)으로 시작되는 route는 해당 부분에 입력되는 route의 텍스트가 req.params에 저장된다.
// 예를들어 /hello/ahnder 를 입력하면 '/hello/:nameParam'에 의해 
// route의 2번째 부분, ahnder가 req.params.nameParam에 저장된다.
// ejs 파일을 사용하기 위해선 res.render 함수를 사용해야 하며,
// 첫번째 parameter로 ejs의 이름을,
// 두번째 parameter로 ejs에서 사용될 object를 전달한다.
app.get('/hello/:nameParam', (req, res) => {
    res.render('hello', {name:req.params.nameParam});
});

app.listen(3000, () => {
    console.log("Server On!!!");
});