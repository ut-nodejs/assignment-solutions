## **BONUS:** Optional (if time) / **보너스:** 선택사항 (시간이 남는다면)

### **Unit 3** Capstone / 유닛 3 캡스톤

시간이 남는다면 다음 기능을 구현해보세요 (보너스 점수):

1. MongoDB와 Mongoose를 프로젝트에 추가하여 연락처 양식 데이터를 저장하세요.
2. `models` 폴더에 구독자 모델을 만들어 뉴스레터를 구독하는 사람들의 이메일 주소를 저장하세요.
3. `/contact`에 POST 요청을 처리하는 `subscribersController`를 만드세요.

---

### Detailed Steps / 자세한 단계

- [ ] **(1) 프로젝트에 다음 패키지를 추가하세요.**
  - [ ] `mongodb`
  - [ ] `mongoose`
- [ ] **(2) `main.js`에서 MongoDB 연결과 Mongoose를 설정하세요.**
- [ ] **(3) `models` 폴더를 만들고 `Subscriber` 모델을 만들어 이메일 주소를 저장하세요.**
  - [ ] `name` - 이름을 저장하는 필드
  - [ ] `email` - 이메일 주소를 저장하는 필드
  - [ ] `module.exports`로 모델을 내보내지 않으면 안 됩니다.
- [ ] **(4) `subscribers.ejs` 페이지를 만들어 데이터베이스에 있는 모든 구독자를 반복해서 표시하세요.**
  - [ ] 아래에 구독자를 표시하는 데 도움이 되는 시작 코드가 있습니다. (`error.ejs`를 복사해서 수정해서 구독자를 표시할 수 있습니다.)
- [ ] **(5) `controllers` 폴더에서 `subscribersController`를 만들어 POST 요청을 처리하세요.**
  - [ ] `getAllSubscribers` - 데이터베이스에 있는 모든 구독자를 찾아 표시하세요. 
  - [ ] `getSubscriptionPage` - `contact.ejs`를 렌더링합니다.
    - [ ] `homeController.js`를 수정하여 `contact.ejs`를 렌더링하지 않도록 합니다.
  - [ ] `saveSubscriber` - 이메일 주소를 `Subscriber` 모델에 저장하고 `thanks.ejs` 렌더링.
  - [ ] `main.js`에 새 라우트를 추가하지 않으면 안 됩니다.

---

### Subscriber Table Starter Code / 구독자 테이블 시작 코드

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

보너스 섹션을 작업하기로 결정하면 다음 파일을 프로젝트에 추가해야 합니다.

```bash
|___/models
| |___subscriber.js             # <NEW> Subscriber 모델

|___/controllers
| |___subscribersController.js  # <NEW> Subscriber 컨트롤러

|___/views
| |___subscribers.ejs           # <NEW> Subscriber 페이지
```

`main.js`를 수정하여 데이터베이스에 연결하고 새 라우트를 처리해야 합니다.