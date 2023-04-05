// listing5.4.js

/**
 * listing5.4.js
 * post된 요청 처리 (p. 94)
 */

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

/**
 * listing5.3.js
 * 요청 데이터 로깅 (p. 92)
 */
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2); // JS 객체의 스트링 변환
};

// 요청 수신
app.on("request", (req, res) => {
  var body = []; // 청크 콘텐츠를 위한 배열 선언
  req.on("data", (bodyData) => {
    // 또 다른 콜백 함수에서 처리
    body.push(bodyData); // body 배열에 수신 데이터 추가
  });

  req.on("end", () => {
    // 데이터 전송 종료 시 코드 수행
    body = Buffer.concat(body).toString(); // body 배열의 String 텍스트 변환
    console.log(`Request Body Contents: ${body}`); // 콘솔에 요청 콘텐츠 로깅
  });

  // listing5.2에서 req 객체와 속성
  // listing5.3에서 JS 객체의 스트링 변환
  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Headers: ${getJSONString(req.headers)}`);

  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });

  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);
});

app.listen(port);
console.log(`The server has started and is listening on port: ${port}`);

/**
 * 이렇게 추가된 코드로 애플리케이션에서 배열로 수집된 포스팅 데이터를 수신하고
 * 문자열 형식으로 다시 변환할 수 있다. 이렇게 추가된 코드로 애플리케이션에서
 * 배열로 수집된 포스팅 데이터를 수신하고 문자열 형식으로 다시 변환할 수 있다.
 *
 * 아직 데이터 제출을 위한 폼을 만들지 않았기 때문에 curl 명령을 사용해 확인해야 한다.
 *
 * [노트] 만일 윈도우 사용자라면 curl을 사용하기 전에 Chocolatey
 * (https://chocolatey.org/install)를 다운로드해 설치한다.
 * 그 후 choco install curl을 커맨드라인에서 실행하라.
 *
 * 1. 먼저 터미널 윈도우 하나에 서버를 띄우고 또 다른 터미널 윈도우를 띄운다.
 * 2. 다음으로 새로운 윈도우에 다음과 같이 명령을 입력한다.
 *
 * curl --data "username=Aaron&password=secret" http://localhost:3000
 *
 * [팀] curl은 서버에 브라우저를 대신해서 요청을 보낼 수 있는 간단한 방법이다.
 * curl 키원드 사용 시 다앙한 플래그 옵션을 활용할 수 있다.
 * 일례로 --data는 POST 방식으로 요청을 서버로 보내는 플래그다.
 */
