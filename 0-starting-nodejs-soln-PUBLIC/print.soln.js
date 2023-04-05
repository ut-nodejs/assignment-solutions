// print.js
"use strict";

// @TODO: 변수를 값이 주세요.
let charName = "Thor", charAge = 1500, charDomain = "Asgard";

let printChar = () => {
    // console.log 변수로 만든 메시지.
    console.log("I am %s.", charName);
    console.log("I've lived for %d years.", charAge);
    console.log(`And I am Master of ${charDomain}`);
}

// 숙제 체크 테스트에 필요함
module.exports = printChar
