# Midterm Test Study Guide / 중간고사 스터디 가이드

- [1. Git and GitHub Classroom](#1-git-and-github-classroom)
  - [Basic Git commands](#basic-git-commands)
  - [GitHub Classroom](#github-classroom)
- [2. Node.js](#2-nodejs)
  - [\*What is Node.js?](#what-is-nodejs)
  - [\*Node.js REPL](#nodejs-repl)
  - [\*Modules, Packages, and Dependencies](#modules-packages-and-dependencies)
  - [exports Module / require keyword](#exports-module--require-keyword)
  - [Callback Functions](#callback-functions)
- [3. NPM](#3-npm)
  - [What is NPM?](#what-is-npm)
  - [Some important NPM commands](#some-important-npm-commands)
- [4. Basic Web Servers](#4-basic-web-servers)
  - [HTTP Module](#http-module)
  - [`request` and `response` objects](#request-and-response-objects)
  - [\*`http-status-codes` (200, 404, 500)](#http-status-codes-200-404-500)
  - [HTTP Headers](#http-headers)
  - [\*HTTP Methods](#http-methods)
- [5. Request-Response Cycle](#5-request-response-cycle)
  - [Listening for Requests](#listening-for-requests)
  - [Analyzing the Request](#analyzing-the-request)
  - [Reading the Request Body](#reading-the-request-body)
    - [JSON.stringify()](#jsonstringify)
    - [JSON.parse()](#jsonparse)
- [6. Routing and External Files](#6-routing-and-external-files)
  - [Simple Routing](#simple-routing)
  - [Working with Static Files](#working-with-static-files)
  - [Simple Route Handling in External Files](#simple-route-handling-in-external-files)
- [7. Express Framework](#5-express-framework)
- [8. Middleware](#6-middleware)
- [9. Template Engine](#8-template-engine)
- [10. MVC Pattern](#9-mvc-pattern)

---

# Unit 0

## 1. `git` and GitHub Classroom

### Basic `git` commands

- `git init` - initialize a local repository / 로컬 저장소 초기화
- `git add` - add files to the staging area / 스테이징 영역에 파일 추가
- `git commit` - commit changes to the local repository / 로컬 저장소에 변경사항 커밋
- `git push` - push changes to the remote repository / 원격 저장소에 변경사항 푸시
- `git pull` - pull changes from the remote repository / 원격 저장소에서 변경사항 풀
- `git clone` - clone a remote repository / 원격 저장소 복제

### [GitHub Classroom](https://ut-nodejs.github.io/instructions.html)

- [Accepting an assignment / 과제 수락](https://ut-nodejs.github.io/instructions.html#1-accessing-the-assignment)
- [Submitting an assignment / 과제 제출](https://ut-nodejs.github.io/instructions.html#2-submitting-the-assignment)
- [Checking the status of an assignment / 과제 상태 확인](https://ut-nodejs.github.io/instructions.html#3-checking-the-assignment)

---

## 2. Node.js

### What is Node.js?

An **asynchronous runtime environment**, used for building JavaScript web applications. It handles the backend web server and can run JavaScript outside the browser. It is built on **Google Chrome's V8 JavaScript engine**.<br>
자바스크립트를 사용하여 웹 애플리케이션을 만들기 위한 **비동기 런타임 환경**입니다. 백엔드 웹 서버를 다루고 브라우저 밖에서 자바스크립트를 실행할 수 있습니다. **구글 크롬의 V8 자바스크립트 엔진**을 기반으로 만들어졌습니다.

- [Node.js](https://nodejs.org/ko/)
- [Node.js 설치](https://nodejs.org/ko/download/)

### Node.js REPL

REPL is the Read-Eval-Print-Loop. It is a simple interactive shell that evaluates expressions and returns the result to the user. It is used for debugging and testing.<br>
REPL은 Read-Eval-Print-Loop의 약자입니다. 표현식을 평가하고 결과를 사용자에게 반환하는 간단한 대화형 셸입니다. 디버깅과 테스트에 사용됩니다.

- [REPL](https://nodejs.org/ko/docs/guides/getting-started-guide/#repl)

### Modules, Packages, and Dependencies

1. Modules are the basic building blocks of Node.js applications. They are **self-contained pieces of code** that can be reused throughout an application.<br>
   모듈은 Node.js 애플리케이션의 기본 구성 요소입니다. 애플리케이션 전체에서 재사용할 수 있는 **독립적인 코드 조각**입니다.
2. Packages are a **collection of modules** that can be used in an application.<br>
   패키지는 애플리케이션에서 사용할 수 있는 **모듈의 모음**입니다.
3. Dependencies are the packages that an application **needs** to run.<br>
   종속 모듈은 애플리케이션을 실행하는 데 **필요한 패키지**입니다.

- [Modules](https://nodejs.org/ko/docs/guides/getting-started-guide/#modules)
- [Packages](https://nodejs.org/ko/docs/guides/getting-started-guide/#packages)
- [Dependencies](https://nodejs.org/ko/docs/guides/getting-started-guide/#dependencies)

### `exports` Module / `require` keyword

Modules can be exported from one file with the `exports` object and imported in another file with the `require` keyword.<br>
모듈은 `exports` 객체로 하나의 파일에서 내보내고 `require` 키워드로 다른 파일에서 가져올 수 있습니다.

- [export](https://nodejs.org/ko/docs/guides/getting-started-guide/#export)
- [require](https://nodejs.org/ko/docs/guides/getting-started-guide/#require)

### Callback functions

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.<br>
콜백 함수는 다른 함수에 인수로 전달되고 일부 작업이 완료된 후 실행되는 함수입니다.

- [Callback functions](https://nodejs.org/ko/docs/guides/getting-started-guide/#callback-functions)

---

## 3. NPM

### What is NPM?

NPM is the **Node Package Manager**. It is used to install and manage Node.js packages.<br>
NPM은 **Node 패키지 관리자**입니다. Node.js 패키지를 설치하고 관리하는 데 사용됩니다.

### Some important NPM commands

- `npm init` - initialize a Node.js project / Node.js 프로젝트 초기화
- `npm install` - install a package / 패키지 설치
- `npm install -g` - install a package globally / 패키지를 전역으로 설치
- `npm install --save` - install a package and add it to the `package.json` file / 패키지를 설치하고 `package.json` 파일에 추가
- `npm install --save-dev` - install a package and add it to the `package.json` file as a development dependency / 패키지를 설치하고 `package.json` 파일에 개발 의존성으로 추가
- `npm uninstall` - uninstall a package / 패키지 삭제
- `npm update` - update a package / 패키지 업데이트
- `npm start` - run the `start` script in the `package.json` file / `package.json` 파일의 `start` 스크립트 실행

Of the commands listed above, you should at least be familiar with `npm init`, `npm install`, and `npm start`.<br>
위 목록에 나열된 명령 중에서 적어도 `npm init`, `npm install`, `npm start`를 알고 있어야 합니다.

- [NPM](https://www.npmjs.com/)

---

# Unit 1

## 4. Basic Web Servers

For a more in-depth explanation of an **HTTP transaction**, see [this article](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction) from the Node.js documentation.<br>
**HTTP 트랜잭션**에 대한 자세한 설명은 Node.js 문서의 [이 글](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction)을 참고하세요.

### `http` Module

The HTTP module is used to create Node.js web servers. A server can be created with the `createServer` method. The `createServer` method takes a callback function as a parameter. The callback function takes two parameters: `request` and `response`.<br>
HTTP 모듈은 Node.js 웹 서버를 만들 때 사용됩니다. `createServer` 메서드를 사용하여 서버를 만들 수 있습니다. `createServer` 메서드는 콜백 함수를 매개변수로 사용합니다. 콜백 함수는 `request`와 `response`를 매개변수로 사용합니다.

```js
const http = require("http");

const server = http.createServer((request, response) => {
  // ...
});
```

#### `request` & `response` Objects

The `request` object represents the request from the client. It contains information about the request such as the URL, request method, request headers, and data. The `response` object represents the response that the server sends back to the client. It contains information about the response such as the status code, response headers, and data.<br>
`request` 객체는 클라이언트의 요청을 나타냅니다. URL, 요청 방법, 요청 헤더 및 데이터와 같은 요청에 대한 정보가 포함됩니다. `response` 객체는 서버가 클라이언트에게 보내는 응답을 나타냅니다. 상태 코드, 응답 헤더 및 데이터와 같은 응답에 대한 정보가 포함됩니다.

- [request](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/#request)
- [response](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/#response)

### `http-status-codes` (200, 404, 500)

The HTTP status codes are used to indicate the status of a server response. The most common status codes are 200, 404, and 500.<br>
HTTP 상태 코드는 서버 응답의 상태를 나타내는 데 사용됩니다. 가장 일반적인 상태 코드는 200, 404, 500입니다.

- `200` - OK
- `404` - Not Found
- `500` - Internal Server Error

We use the `writeHead` method to check the status code of the response. Then we use the `write` method to write the response message. Finally, we use the `end` method to end the response.<br>
`writeHead` 메서드를 사용하여 응답의 상태 코드를 확인합니다. 그런 다음 `write` 메서드를 사용하여 응답 메시지를 작성합니다. 마지막으로 `end` 메서드를 사용하여 응답을 종료합니다.

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(httpStatusCode.OK, {
    // status code: 200
    "Content-Type": "text/html", // response header
  });

  let responseMessage = "<h1>Hello, Universe!</h1>";
  response.write(responseMessage);
  response.end();
});
```

- [http-status-codes](https://www.npmjs.com/package/http-status-codes)

### HTTP Headers

HTTP headers are used to send additional information with the request or the response. One of the most common HTTP headers is `Content-Type`, shown above in the `writeHead` function. This header is used to indicate the type of data that is being sent (HTML, CSS, JavaScript, JSON, etc.).<br>
HTTP 헤더는 요청 또는 응답에 추가 정보를 보내는 데 사용됩니다. 가장 일반적인 HTTP 헤더 중 하나는 `writeHead` 함수에서 보여진 `Content-Type`입니다. 이 헤더는 보내는 데이터의 유형을 나타내는 데 사용됩니다 (HTML, CSS, JavaScript, JSON 등).

### HTTP Methods

HTTP methods are used to indicate the type of action that the client wants to perform on a resource. **In the class, we have studied `GET` and `POST`.** Later, we will also study `PUT` and `DELETE`.<br>
HTTP 메서드는 클라이언트가 리소스에 대해 수행하려는 작업 유형을 나타내는 데 사용됩니다. **클래스에서는 `GET`과 `POST`를 공부했습니다.** 나중에 `PUT`과 `DELETE`도 공부할 것입니다.

- `GET` - retrieve a resource / 리소스 검색
- `POST` - create a resource / 리소스 생성
- <del>`PUT` - update a resource / 리소스 업데이트</del>
- <del>`DELETE` - delete a resource / 리소스 삭제</del>

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(`Method: ${request.method}`); // GET, POST, PUT, DELETE
  console.log(`URL: ${request.url}`);
  // ...
});
```

---

## 5. Request-Response Cycle

### Listening for Requests

The `listen` method is used to start the server. It takes two parameters: the port number and the callback function. The callback function is executed when the server starts listening for requests.<br>
`listen` 메서드는 서버를 시작하는 데 사용됩니다. 두 개의 매개변수를 사용합니다: 포트 번호와 콜백 함수. 콜백 함수는 서버가 요청을 수신하기 시작할 때 실행됩니다.

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const port = 3000;

const server = http.createServer((request, response) => {
  // ...
});

server.listen(port, () => {
  console.log(
    `The server has started and is listening on port number: ${port}`
  );
});
```

### Analyzing the Request

The `request` object contains information about the request. We can use the `url` property to get the URL of the request. We can use the `method` property to get the HTTP method of the request.<br>
`request` 객체에는 요청에 대한 정보가 포함됩니다. `url` 속성을 사용하여 요청의 URL을 가져올 수 있습니다. `method` 속성을 사용하여 요청의 HTTP 메서드를 가져올 수 있습니다.

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(`Method: ${request.method}`); // GET, POST, PUT, DELETE
  console.log(`URL: ${request.url}`);
  // ...
});
```

### Reading the Request Body

The `body` property of the `request` object (shown above) is not available immediately. It is only available after the `end` event is emitted.<br>
`request` 객체의 `body` 속성 (위에서 표시됨)은 즉시 사용할 수 없습니다. `end` 이벤트가 발생한 후에만 사용할 수 있습니다.

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const port = 3000;

const server = http.createServer((request, response) => {
  let body = [];

  request
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log("body:", body);
    });
});

server.listen(port, () => {
  console.log(
    `The server has started and is listening on port number: ${port}`
  );
});
```

#### JSON.stringify()

The `JSON.stringify` method is used to convert a JavaScript object (such as the URL request parameters, or URL request body) into a JSON string.<br>
`JSON.stringify` 메서드는 JavaScript 객체 (URL 요청 매개변수 또는 URL 요청 본문과 같은)를 JSON 문자열로 변환하는 데 사용됩니다.

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const port = 3000;

const server = http.createServer((request, response) => {
  console.log("url:", request.url); // request url
  console.log("method:", request.method); // request method
  console.log("request parameters:", JSON.stringify(request.params)); // request parameters
  console.log("request body:", JSON.stringify(request.body)); // request body
  // ...
});

server.listen(port, () => {
  console.log(
    `The server has started and is listening on port number: ${port}`
  );
});
```

#### JSON.parse()

On the other hand, the `JSON.parse` method is used to convert a JSON string back into a JavaScript object. The `JSON.parse` method takes two parameters: the string to convert and the function used to replace values.<br>
반면에 `JSON.parse` 메서드는 JSON 문자열을 다시 JavaScript 객체로 변환하는 데 사용됩니다. `JSON.parse` 메서드는 두 개의 매개변수를 사용합니다: 변환할 문자열과 값을 대체하는 데 사용되는 함수.

---

## 6. Routing and External Files

### Simple Routing

Because the `request` object contains a `url` property which contains the URL of the request, we can use this property to implement simple routing.<br>
`request` 객체에는 요청의 URL을 포함하는 `url` 속성이 포함되어 있으므로 이 속성을 사용하여 간단한 라우팅을 구현할 수 있습니다.

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const port = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    // home route
    response.writeHead(httpStatusCode.OK, {
      "Content-Type": "text/html",
    });
    response.write("<h1>Hello World!</h1>");
    response.end();
  } else if (request.url === "/users") {
    // users route
    response.writeHead(httpStatusCode.OK, {
      "Content-Type": "text/html",
    });
    response.write("<h1>Users</h1>");
    response.end();
  } else {
    // 404 Not Found route
    response.writeHead(httpStatusCode.NOT_FOUND, {
      "Content-Type": "text/html",
    });
    response.write("<h1>Not Found</h1>");
    response.end();
  }
});

server.listen(port, () => {
  console.log(
    `The server has started and is listening on port number: ${port}`
  );
});
```

### Working with Static Files

The `fs` module uses the `readFile` method to read the contents of a file. The `readFile` method takes three parameters: the file path, the encoding, and the callback function. Remember that the first parameter in the callback function is _always_ the error object, and the second parameter is the data.<br>
`fs` 모듈은 `readFile` 메서드를 사용하여 파일의 내용을 읽습니다. `readFile` 메서드는 세 개의 매개변수를 사용합니다: 파일 경로, 인코딩 및 콜백 함수. 콜백 함수의 첫 번째 매개변수는 _항상_ 오류 객체이고 두 번째 매개변수는 데이터입니다.

```js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const fs = require("fs");
const port = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    // home route
    response.writeHead(httpStatusCode.OK, {
      "Content-Type": "text/html",
    });
    fs.readFile("./views/index.html", (error, data) => {
      if (error) {
        console.log(error);
        response.end();
      } else {
        response.write(data);
        response.end();
      }
    });
  } else {
    // 404 Not Found route
    response.writeHead(httpStatusCode.NOT_FOUND, {
      "Content-Type": "text/html",
    });
    fs.readFile("./views/404.html", (error, data) => {
      if (error) {
        console.log(error);
        response.end();
      } else {
        response.write(data);
        response.end();
      }
    });
  }
});

server.listen(port, () => {
  console.log(
    `The server has started and is listening on port number: ${port}`
  );
});
```

### Simple Route Handling in External Files

We can break the routing logic into separate files and use the `require` function to import them into our main file.<br>
라우팅 로직을 별도의 파일로 나누고 `require` 함수를 사용하여 메인 파일에 가져올 수 있습니다.

```js
// main.js
const http = require("http");
const httpStatusCode = require("http-status-codes");
const fs = require("fs");
const port = 3000;

const router = require("./router");

const server = http.createServer(router.handle);

server.listen(port, () => {
  console.log(
    `The server has started and is listening on port number: ${port}`
  );
});
```

```js
// router.js
const routes = {
  GET: {},
  POST: {},
};

exports.handle = (request, response) => {
  try {
    routes[request.method][request.url](request, response);
  } catch (error) {
    response.writeHead(404);
    response.end();
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
```

---

# Unit 2

## 7. Express Framework

## 8. Middleware

## 9. Template Engine

## 10. MVC Pattern
