// messages.js
"use strict";

// @TODO: messages array를 만들어 주세요.
let messages = [
    'Hello world',
    'Nice to meet you',
    'My name is Aaron'
];

let printMsgs = () => {
    messages.forEach(msg => console.log(msg));
}

// 숙제 체크 테스트에 필요함
module.exports = printMsgs
