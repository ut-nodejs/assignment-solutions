// numbers.js
"use strict";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// @TODO: printNumbers 함수를 만들어 주세요.
let printNumbers = () => {
    numbers.forEach(num => console.log(num));
};

// 숙제 체크 테스트에 필요함
module.exports = printNumbers;