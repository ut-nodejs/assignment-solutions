// router.js
"use strict";

/**
 * listing 7.6 (p. 123-124)
 */

const httpStatus = require("http-status-codes"),
  contentTypes = require("./content-types"),
  utils = require("./utils");

// 라우트 함수를 위한 routes 객체 생성
const routes = {
  GET: {},
  POST: {},
};

// 요청을 처리하기 위한 handle 함수를 생성한다
exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};

// 라우트 함수를 매핑하기 위한 get과 post 함수를 생성한다
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
