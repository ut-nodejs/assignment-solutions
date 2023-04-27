// listing 8.1.js (p. 137)
"use strict";

const port = 3000,
  express = require("express"), // 애플리케이션에 express 모듈 추가
  app = express(); // 상수 app에 express 애플리케이션 할당

app
  .get("/", (req, res) => {
    // 홈페이지에 GET 라우트 세팅
    /**
     * Listing 8.2 (p. 140)
     * 요청 매개변수의 액세스
     */
    console.log(req.params); // 요청 매개변수의 로그 (토켄, ID, 이름 등)
    console.log(req.body); // POST 요청 바디의 로그 (폼 데이터)
    console.log(req.url); // 요청된 URL의 로그 (index.html)
    console.log(req.query); // Stringified 요청 쿼리의 로그 (name=John&age=30)

    res.send("Hello World!"); // res.send로 서버에서 클라이언트의 응답 발행
  })
  .listen(port, () => {
    // 3000번 포트로 애플리케이션 셋업
    console.log(`The Express server is listening on port: ${port}`);
  });
