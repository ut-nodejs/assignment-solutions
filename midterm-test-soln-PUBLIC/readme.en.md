# Midterm Test / 중간고사

The midterm test will be conducted in 2 parts:

1. Online quiz ([Study Guide here](https://ut-nodejs.github.io/midterm.html))
2. Midterm project (instructions below)

![Midterm Test](https://github.com/ut-nodejs/ut-nodejs.github.io/blob/master/img/in-slides/tests/midterm-index.png)

This test is **OPEN BOOK**. You may use any resources you want, including the Internet, books, notes, etc. You may not communicate with other students or use any other resources during the test.

This midterm project, together with the online quiz, will be worth **15% of your final grade**.

- Online quiz: **5%**
- Midterm project: **10%**
- TOTAL: **15%**

---

## **TEST:** Instructions / **시험:** 지시사항

1. Create an **Express web server** that displays the given web pages.
2. Break the web pages into EJS partials and pages using `layout.ejs`.
3. Handle routes with a `homeController` and errors with an `errorController`.

To preview the given files in the browser, right-click on the file (in the `views` folder) and select **"Copy path."** Then paste the path into the browser's address bar.

Just like what we worked on in class, this website consists of five pages.

- `index.html` - handled with a GET method
- `transportation.html` - handled with a GET method
- `contact.html` - using both GET and POST methods
- `thanks.html` - displayed after a POST request from the contact page
- `error.html` - displayed when an error occurs

Because you have been given only the HTML files, you will need to create the EJS files and set up the routes to display the pages.

In the `views` folder, you will need to create a `layout.ejs` file to set up the layout. In the `layout.ejs` file, include the HTML `head` and `body` tags. In the `head` tag, update the `meta` tags and the `title` tag with your own information.<br>
`views` 폴더에 `layout.ejs` 파일을 만들어 레이아웃을 설정합니다. `layout.ejs` 파일에 HTML `head`와 `body` 태그를 포함시킵니다. `head` 태그에는 `meta` 태그와 `title` 태그를 자신의 정보로 업데이트합니다.

You will also need to create the `partials` folder and the following partials:<br>
`partials` 폴더와 다음 부분을 만들어야합니다.

- `header.ejs` - the header for all pages
- `navigation.ejs` - the navigation menu for all pages
- `footer.ejs` - the footer for all pages
- `confetti.ejs` - confetti for the thanks page

---

### Detailed Steps / 자세한 단계

- [ ] **(1) Run `npm init` to begin your Node.js project.**
- [ ] **(2) Install the following packages as dependencies in your project.**
  - [ ] `http-status-codes`
  - [ ] `express`
  - [ ] `ejs`
  - [ ] `express-ejs-layouts`
- [ ] **(3) Create a `main.js` (or `app.js`) file and set up the Express server.**
- [ ] **(4) Create a `partials` folder inside the `views` folder and create the following partials:**
  - [ ] `header.ejs` - the header for all pages
  - [ ] `navigation.ejs` - the navigation bar for all pages
  - [ ] `footer.ejs` - the footer for all pages
  - [ ] `confetti.ejs` - confetti for the thanks page
- [ ] **(5) Change the file extensions of the given HTML files to `.ejs` and add a `layout.ejs` file to the `views` folder to set up the layout.**
  - [ ] `layout.ejs` - handling the layout for all pages
    - [ ] `head` - update the `meta` tags and the `title` tag with your own information
  - [ ] `index.ejs` - handled with a GET method
  - [ ] `transportation.ejs` - handled with a GET method
  - [ ] `contact.ejs` - using both GET and POST methods
  - [ ] `thanks.ejs` - displayed after a POST request from the contact page
  - [ ] `error.ejs` - displayed when an error occurs
- [ ] **(6) Create the following controllers to handle routes and errors.**
  - [ ] `homeController` - handles all application routes (GET and POST)
  - [ ] `errorController` - handles all application errors

---

### Given files / 주어진 파일

```bash
|___/views                      # <CHANGE> the file extensions to .ejs / .ejs로 확장자 변경
| |___index.html                # GET 메소드로 접근 가능
| |___transportation.html       # GET 메소드로 접근 가능
| |___contact.html              # GET과 POST 메소드로 접근 가능
| |___thanks.html               # POST 메소드 후에 접근 가능
| |___error.html                # 에러 발생 시 접근 가능

|___/public                     # <NO CHANGES> required
| |___css
| | |___style.css
| | |___style.small.css         # 반응형 웹 디자인을 위한 CSS
| | |___bootstrap.min.css       # 부트스트랩 CSS
| | |___bootstrap.min.css.map   # 부트스트랩 CSS 맵
| | |___confetti.css            # thanks.html에 사용된 CSS
| |___img
| | |___dribbble_404.gif        # error.html에 사용된 이미지
| |___js
| | |___functions.js            # 반응형 메뉴를 위한 JS
| | |___bootstrap.bundle.min.js # 케러셀을 위한 부트스트랩 JS
| | |___bootstrap.bundle.min.js.map
```

---

### Requirements / 요구사항

The following list of files and folders are expected to be in your project.

```bash
|___/views
| |___/partials                 # <NEW>
| | |___header.ejs              # 모든 페이지에 사용되는 헤더
| | |___footer.ejs              # 모든 페이지에 사용되는 푸터
| | |___navigation.ejs          # 모든 페이지에 사용되는 네비게이션 바
| | |___confetti.ejs            # thanks.html에 사용되는 confetti
| |___layout.ejs                # <NEW> 모든 페이지의 레이아웃
| |___index.ejs                 # GET 메소드로 접근 가능
| |___transportation.ejs        # GET 메소드로 접근 가능
| |___contact.ejs               # GET과 POST 메소드로 접근 가능
| |___thanks.ejs                # POST 메소드 후에 접근 가능
| |___error.ejs                 # 에러 발생 시 접근 가능

|___/public                     # <NO CHANGES> required
| |___css
| | |___style.css
| | |___style.small.css         # 반응형 웹 디자인을 위한 CSS
| | |___bootstrap.min.css       # 부트스트랩 CSS
| | |___bootstrap.min.css.map   # 부트스트랩 CSS 맵
| | |___confetti.css            # thanks.html에 사용된 CSS
| |___img
| | |___dribbble_404.gif        # error.html에 사용된 이미지
| |___js
| | |___functions.js            # 반응형 메뉴를 위한 JS
| | |___bootstrap.bundle.min.js # 케러셀을 위한 부트스트랩 JS
| | |___bootstrap.bundle.min.js.map

|___/controllers                # <NEW>
| |___homeController.js         # 모든 라우트를 처리하는 컨트롤러
| |___errorController.js        # 모든 에러를 처리하는 컨트롤러

|___main.js                     # <NEW> Express 서버를 설정하는 파일
|___package.json                # <NEW> npm init을 통해 생성된 파일
|___package-lock.json
```


---

## Optional (if time) / 선택사항 (시간이 남는다면)

### **Unit 3** Capstone / 유닛 3 캡스톤

If you have time, you can try to implement the following features (for BONUS points):

1. Add MongoDB and Mongoose to your project to store the contact form data.
2. Create a Subscribers model (in a `models` folder) to store the email addresses of people who subscribe to your newsletter.
3. Create a `subscribersController` to handle the POST request to `/contact`.

---

### Detailed Steps / 자세한 단계

- [ ] **(1) Add the following packages to your project.**
  - [ ] `mongodb`
  - [ ] `mongoose`
- [ ] **(2) Setup Mongoose with your MongoDB connection in `main.js`.**
- [ ] **(3) In the `models` folder, create a `Subscriber` model with the following fields.**
  - [ ] `name`
  - [ ] `email`
  - [ ] Don't forget to export the model with `module.exports`.
- [ ] **(4) Create a `subscribers.ejs` page to loop through all and display all the subscribers in your database.**
  - [ ] Some starter code is presented below for displaying the subscribers in a nice table. (You can copy `error.ejs` and modify it to display the subscribers.)
- [ ] **(5) In the `controllers` folder, create a `subscribersController`to handle the following functions.**
  - [ ] `getAllSubscribers` - find all Subscribers in the database and display them on the `subscribers.ejs` page.
  - [ ] `getSubscriptionPage` - render `contact.ejs`.
    - [ ] (Modify `homeController.js` to NOT render `contact.ejs`)
  - [ ] `saveSubscriber` - save data in the `Subscriber` model and render `thanks.ejs`.
  - [ ] **Don't forget** to add your new routes to `main.js`.

---

### Starter Code / 시작 코드

```js
// views/subscribers.ejs
<h1 class="mb-3">Subscribers</h1>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Thornton</td>
      <td>@jaket</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

---

### Additional Files / 추가 파일

If you decide to work on the BONUS section, you will need to add the following files to your project:

```bash
|___/models
| |___subscriber.js             # <NEW> Subscriber 모델

|___/controllers
| |___subscribersController.js  # <NEW> Subscriber 컨트롤러

|___/views
| |___subscribers.ejs           # <NEW> Subscriber 페이지
```

You will also need to modify `main.js` to connect to the database and handle the new routes.