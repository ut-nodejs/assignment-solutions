# 캡스톤 프로젝트 1

## 첫 번째 웹 애플리케이션 만들기

![example-website](https://raw.githubusercontent.com/ut-nodejs/ut-nodejs.github.io/master/img/in-slides/capstone-1/index.png)

**118-129페이지**의 지침에 따라 첫 번째 Node.js 웹 서버와 웹사이트를 만드십시오. 요구 사항 및 첫 번째 단계는 다음과 같습니다.

1. 먼저, 바탕화면의 사용자 폴더에 프로젝트를 다운로드
2. 프로젝트 폴더 내에서 `npm init` 실행
3. `npm install http-status-codes` 실행
4.  아래 지침에 따라 프로젝트의 나머지 부분을 코딩

---

## 프로젝트 요구 사항

### 1. 웨 서버

웹 서버는 사용자를 각 웹사이트 페이지로 라우팅할 수 있어야 합니다. 다양한 콘텐츠 유형(HTML, CSS, JS, 이미지)을 제공할 수 있어야 합니다. 그리고 GET 및 POST 메서드를 모두 처리해야 합니다. 이러한 다양한 부분을 처리하려면 다음 파일 목록이 포함되어야 합니다.

- `main.js` (애플리케이션 파일)
- `router.js` (라우팅)
- `content-types.js` ("Content-Type" 핸들링)
- `utils.js` (파일을 읽고 응답을 돌려주기 위한 함수)

웹사이트를 코딩한 후 `node main.js`로 실행할 수 있고 오류가 없는지 확인하십시오.

### 2. 웹사이트

[Bootstrap CSS 다운로드](https://getbootstrap.com/)

5개의 필수 페이지가 아래에 나열되어 있습니다. `style.css` 파일도 포함해야 하지만 `bootstrap.css` 파일을 포함하지 않아도 됩니다. 그러나 `bootstrap.css` 파일을 포함하면 일부 CSS 스타일을 빠르게 추가하는 것이 도움이 될 수 있습니다.

1. `index.html` (홈)
2. `courses.html` (내용) - 이름 바뀔 수 있습니다.
3. `contact.html` (이메일 신청)
4. `thanks.html` (이메일 신청 응답)
5. `error.html` (에러 처리)

모든 페이지에는 다음 5개 이상의 요소가 필요합니다. `<header>`, `<nav>`, 및 `<footer>`가 모든 페이지에서 동일해야 합니다.

1. `<header>` 
2. `<nav>`
3. `<div><img>` = 모든 페이지에는 하나의 이미지가 필요합니다.
4. `<div><p>` = 모든 페이지에는 일종의 텍스트가 필요합니다.
5. `<footer>` = 이름과 저작권 날짜 포함.

**[팁]** 인터넷에서 자신의 이미지를 수집할 수 있습니다. [Pixabay.com](https://pixabay.com)은 저작권 없는 이미지를 찾을 수 있는 좋은 장소입니다. 

**[노트]** 만약 최종 프로젝트를 미리 계획하고 싶다면 지금부터 일부 코드(HTML, CSS) 준비를 시작할 수 있습니다. 다음은 최종 프로젝트에 대해 생각해 볼 수 있는 몇 가지 고려 사항입니다. 다음에서 CRUD(생성, 조회, 수정, 삭제) 활동을 하는 컨트롤러가 필요합니다 (420페이지 참조).

- `usersController.js` = 사용자 (생성, 업데이트, 삭제)
- `coursesController.js` = 내용/과정/신청할 수 있는 것
- `subscribersController.js` = 가입자/컨텐츠 참여자/신청하는 자

### 3. 웹사이트 내용

자유롭게 책의 예를 따라 요리 과정 웹사이트를 만들거나 창의력을 발휘하여 자신만의 스타일과 관심 있는 콘텐츠로 웹사이트를 만드십시오. 몇 가지 아이디어가 아래에 나열되어 있습니다.

- 요리 과정 사이트 (책 따라)
- 교통 방법 사이트 (비행기, 기차, 자동차, ...)
- 엔터테인먼트 사이트 (게임, 영화, 음악, Netflix, ...)
- 운동 사이트 (운동 과정, 방법, ...)
- 뉴스 사이트 (뉴스 쇼, 기자, ...)
- 여행 사이트 (숙소, 명소, 맛집, ...)

---

### 프로젝트의 디렉터리 구조

다음 디렉터리 구조는 포함할 프로젝트의 다양한 부분을 이해하는 데 도움이 될 수 있습니다.

```
. <-- 터미널에서 본 루트 폴더의 트리구조 (p. 120)
|____main.js
|____router.js
|____public
| |____css
| | |____bootstrap.css
| | |____style.css
| |____js
| | |____functions.js // 포함하지 않아도 된다
| |____img
| | |____ // 모든 페이지에서 하나의 이미지 포함 필수
|____views
| |____index.html
| |____courses.html
| |____contact.html
| |____thanks.html
| |____error.html
|____content-types.js
|____utils.js
|____package.json // npm init으로 만드십시오
|____package-lock.json // npm install로 만드십시오
```

**Note** HTML 파일은 클라이언트 레벨에서 보이는 파일이지만 에셋으로 분류되지는 않는다. 따라서 public 폴더에 위치시키지 않는다.

### HELP

문제가 있는 경우 이 과제에 대한 [HELP 포럼](https://github.com/orgs/ut-nodejs/discussions/3)에 문제를 제출하십시오.
