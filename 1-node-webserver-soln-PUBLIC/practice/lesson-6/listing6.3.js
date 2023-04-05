// listing6.3.js

/**
 * listing6.3.js
 * 동적인 읽기와 파일 제공을 위한 'fs'와 라우팅 사용
 */

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"); // fs 모듈의 요청

// listing6.2.js에서
// const routeMap = { // HTML 파일에 매핑되는 라우트 설정
//   "/": "views/index.html",
// };

const getViewUrl = (url) => {
  // URL을 파일 경로에 보간하기 위한 함수 생성
  return `views${url}.html`;
};

http
  .createServer((req, res) => {
    let viewUrl = getViewUrl(req.url); // 파일 경로 문자열 추출
    fs.readFile(viewUrl, (error, data) => {
      //요청 URL을 fs file 탐색에 보간
      if (error) {
        // 404 에러 코드 처리
        res.writeHead(httpStatus.NOT_FOUND);
        res.write("<h1>404: FILE NOT FOUND</h1>");
      } else {
        // 파일 내용으로 응답
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/html",
        });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port);

console.log(`The server is listening on port: ${port}`);
