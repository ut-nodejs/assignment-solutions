# 1. 노드 웹 서버 첫 걸음

**Note** 과제를 다운로드하거나 GitHub 클래스룸에 다시 업로드하는 데 문제가 있는 경우 [다음 PDF에서 도움말을 찾으세요](https://github.com/ut-nodejs/ut-nodejs.github.io/raw/master/slides/1.3-6-starting-nodejs.pdf).

이 과제는 3 부분으로 나뉩니다.

1. '첫 웹 서버 만들기' (4장)
2. '수신 데이터 다루기' (5장)
3. '라우트와 외부 파일' (6장)

마찬가지로 이 과제에는 3가지 유형의 파일이 있습니다.

1. listing3.1.js (숫자만 있는 파일은 예시다)
2. listing4.1.EX.js (EX 있는 파일은 수업에서 학습이다)
3. listing5.6.**TODO**.js (TODO 있는 파일은 **과제**다)

**Note** 이 저장소에 대한 테스트가 없습니다.

### 보충 연습 (선택)

#### listing5.6 과제

예제 애플리케이선에서는 /info와 /contact라는 라우트를 생성해 2개의 경로를 처리하고 있다. 하지만 일반 애플리케이션은 더 많은 경로와 페이지를 갖고 있다. 다음 경로를 위한 라우트를 애플리케이션에추가해보자.

- /about: 사용자가 http://localhost:3000/about에 액세스할 때 HTML 라인으로 “Learn More About Us."를 출력하도록 한다.
- / hello: 사용자가 http://localhost:3000/hello에 액세스할 때 HTML 라인으로 “Say hello by emailing us here."를 출력하도록 한다. 이때 여러분의 이메일 주소를 앵커로 걸도록 한다.
- /error: 사용자가 http://localhost:3000/about/error에 액세스할 때 상태 코드 404(페이지 없음) 및 일반 텍스트 줄 “Sorry, the page you are looking for is not here,"를 출력한다.
