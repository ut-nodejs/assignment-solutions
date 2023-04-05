// listing6.2.js

/**
 * listing6.2.js
 * fs 모듈을 사용한 서버 응답 (p. 104)
 */
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"); // fs 모듈의 요청

// HTML 파일에 매핑되는 라우트 설정
const routeMap = {
  "/": "views/index.html",
};

http
  .createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });

    if (routeMap[req.url]) {
      // 매핑된 파일들의 콘텐츠 읽기
      fs.readFile(routeMap[req.url], (error, data) => {
        // 밑에 있는 [노트]를 보세요.
        res.write(data); // 파일 콘텐츠로 응답
        res.end();
      });
    } else {
      res.end("<h1>Sorry, not found.</h1>");
    }
  })
  .listen(port);

console.log(`The server is listening on port: ${port}`);

/**
 * [노트] 컴퓨터에셔 파일을 읽을 때 파일을 읽다가 중단되거나 혹은 읽을 수 없게 되거나 삭제될 수
 * 있다. 이 코드에서는 그런 것을 생각할 필요는 없다. 파일에 이상이 발견되면 콜백 합수의 첫 번째
 * 매개변수 값으로 에러를 받을 것이다.
 */
