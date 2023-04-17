// main.js
"use strict";

/**
 * listing 7.3 (p. 121)
 */

// 필요 모듈의 임포트
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./content-types"),
  utils = require("./utils");

/**
 * listing 7.8 (p. 127-128)
 */

// 웹 페이지와 에셋을 위한 라우트 목록 추가
// GET 라우트
router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});
router.get("/courses.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/courses.html", res);
});
router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/contact.html", res);
});

// POST 라우트
router.post("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/thanks.html", res);
});

// 에셋 라우트
// CSS 에셋 라우트
router.get("/bootstrap.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("public/css/bootstrap.css", res);
});
router.get("/style.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("public/css/style.css", res);
});

// JS 에셋 라우트
router.get("/functions.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("public/js/functions.js", res);
});

// IMG 에셋 라우트
router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});
router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});
router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port: ${port}`);

/**
 * [노트-1] 여기서는 프로젝트에서 파일로 보일 에셋(이미지, js, 그리고 css 파일)에 대한 라우트만 만든다.
 *
 * [노트-2] POST 라우트에 주목하라. 이는 contact.html 페이지에서 전달되는 폼을 처리한다.
 * 다른 HTML 페이지로 응답하는 대신 이 라우트는 "Thank you for supporting the product."
 * HTML 페이지로 응답한다.
 */
