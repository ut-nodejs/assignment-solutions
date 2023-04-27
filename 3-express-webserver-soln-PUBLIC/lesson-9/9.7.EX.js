// 9.7.EX.js
"use strict";

const port = 3000,
  express = require("express"),
  homeController = require("./controllers/homeController"),
  app = express();

/**
 * Listing 9.5 (p. 149)
 * 요청 본문으로부터 포스팅된 데이터 캡처
 */
app.use(
  express.urlencoded({
    extended: false,
  })
); // Express.js에 body-parser를 이용해 URL-encoded 데이터를 파싱하도록 요청
app.use(express.json());

// 로깅 미들웨어 함수를 사용
app.use(homeController.logRequestPaths);

/**
 * Listing 9.7 (p. 153)
 * 컨트롤러 함수의 참조를 통한 콜백의 대체
 */
// "/items/:vegetable"로의 GET 요청 처리
app.get("/items/:vegetable", homeController.sendReqParam);

/**
 * 다른 라우트 수정
 */
app.get("/", homeController.getHome);
app.get("/contact", homeController.getContact);
app.post("/contact", homeController.postContact);

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
