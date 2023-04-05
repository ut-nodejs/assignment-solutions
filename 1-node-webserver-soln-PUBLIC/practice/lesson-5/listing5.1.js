// listing5.1.js
// listing5.2.js
// listing5.3.js

/**
 * listing5.1.js
 * 이벤트 리스너를 추가한 간단한 웹 서버 (p. 90)
 */
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

app.on("request", (req, res) => {
  /**
   * listing5.2.js
   * 요청 로깅 (p. 92)
   */
  console.log(req.method); // 사용된 HTTP 메소드의 로그
  console.log(req.url); // 요청된 URL의 로그
  console.log(req.headers); // 요청 헤더

  /**
   * listing5.3.js
   * 요청 데이터 로깅 (p. 92)
   */
  console.log(`Method: ${getJSONString(req.method)}`);

  // 요청 수신
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  }); // 응답 준비

  let resMsg = "<h1>This will show on the screen.</h1>";
  res.end(resMsg); // HTML로 응답
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

/**
 * listing5.3.js
 * 요청 데이터 로깅 (p. 92)
 */
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2); // JS 객체의 스트링 변환
};
