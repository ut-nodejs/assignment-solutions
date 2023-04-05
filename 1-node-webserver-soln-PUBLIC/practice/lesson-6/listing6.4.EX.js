// listing6.4.js

/**
 * listing6.4.js
 * 프로젝트 내 main.js에서 각 파일별 특정 라우티를 가지는 웹 서거 구현
 */

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"); // fs 모듈의 요청

const sendErrorResp = (res) => {
  // 에러 핸들링 함수 생성
  res.writeHead(httpStatus.NOT_FOUND, {
    "Content-Type": "text/html",
  });
  res.write("<h1>404: File Not Found!</h1>");
  res.end();
};

http
  .createServer((req, res) => {
    let url = req.url; // url 변수에 요청 URL 저장

    // URL에 파일 확장자가 있는지 확인
    if (url.indexOf(".html") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html",
      }); // 요청 콘텐츠 유형의 지정
      customReadFile(`./views${url}`, res); // 파일을 읽어들이기 위한 readFile의 호출
    } else if (url.indexOf(".js") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/javascript",
      });
      customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf(".css") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/css",
      });
      customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf(".png") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "image/png",
      });
      customReadFile(`./public/img${url}`, res);
    } else {
      sendErrorResp(res);
    }
  })
  .listen(port);

console.log(`The server is listening on port: ${port}`);

// 이름으로 요청된 파일 찾기
const customReadFile = (file_path, res) => {
  // 파일이 존재하는지 확인
  if (fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if (error) {
        console.log(error);
        sendErrorResp(res);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    sendErrorResp(res);
  }
};

/**
 * 이제 여러분의 애플리케이션은 존재하지 않는 파일에 대한 대응을 할 수 있게 됐다.
 */
