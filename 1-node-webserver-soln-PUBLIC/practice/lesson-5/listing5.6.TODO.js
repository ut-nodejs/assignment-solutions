// listing5.5.js
// listing5.6.js

/**
 * listing5.6.js
 * 간단한 가우팅 (p. 97)
 */

// 요청에 따른 라우트의 매핑 정의
const routeRespMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>About Us</h1>",
  "/hello": "<h1>Hello</h1>",
  "/error": "<h1>Error Page</h1>",
};

// listing5.5.js에서 (p. 96)
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });

    // 요청 라우트가 정의된 맵에 있는지 체크
    if (routeRespMap[req.url]) {
      res.end(routeRespMap[req.url]); // 선택 (여기, 라인 29이나 라인 33)

      // listing5.7.js에서 (p. 98)
      // 수동으로 응답에 지연을 걸기 위한 코드 감싸기
      // setTimeout(() => res.end(routeRespMap[req.url]), 2000);
    } else {
      setTimeout(() => {
        res.end("<h1>Welcome!</h1>"); // 기본 HTML 문구 출력
      }, 2000);
    }
  });

app.listen(port);
console.log(`The server is listening on port: ${port}`);
