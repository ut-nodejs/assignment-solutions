// homeController.js
"use strict";

/**
 * Listing 10.2 (p. 159)
 * 컨트롤러 동작에 의한 뷰 렌더링
 */
exports.respondWithName = (req, res) => {
    res.render('index'); // 사용자 정의 EJS 뷰를 사용한 응답
}

/**
 * Listing 10.3 (p. 160)
 * 뷰로의 라우트 매개변수 전달
 */
exports.respondWithName2 = (req, res) => {
    let paramsName = req.params.myName; // 요청 매개변수로 지역 변수 할당
    res.render('index', { name: paramsName }); // 렌더링된 뷰로 지역 변수 전달
};