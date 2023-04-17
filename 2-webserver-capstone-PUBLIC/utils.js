// utils.js
"use strict";

/**
 * listing 7.5 (p. 123)
 */

const fs = require("fs"),
  httpStatus = require("http-status-codes"),
  contentTypes = require("./content-types"); // getFile에서 사용할 모듈들의 임포트

// 파일을 읽고 응답을 돌려주기 위한 함수의 익스포트
module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("There was an error serving content!");
      }
      res.end(data);
    });
  },
};
