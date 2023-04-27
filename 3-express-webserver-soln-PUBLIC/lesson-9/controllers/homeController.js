// homeController.js
"use strict";

/**
 * Listing 9.6 (p. 153)
 * 콜백 함수를 homeController.js의 홈 컨트롤러로 이동
 */
exports.sendReqParam = (req, res) => { // 지정 라우트 요청 처리를 위한 함수 생성
    let veg = req.params.vegetable.toUpperCase();
    res.send(`This is the ${veg} page.`);
};

/**
 * 다른 라우트를 옮기기
 */
exports.getHome = (req, res) => {
    res.send('This is the HOME page.');
};

exports.getContact = (req, res) => {
    res.send('This is the CONTACT page.');
};

exports.postContact = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('CONTACT info submitted successfully.');
};

exports.logRequestPaths = (req, res, next) => {
    console.log(`request to: ${req.url}`);
    next();
};
