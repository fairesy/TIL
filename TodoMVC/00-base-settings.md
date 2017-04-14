---
typora-copy-images-to: ../Image-Resources
---

# 00. 개발환경 세팅하기

뭔가를 시작할 수 있는 환경부터 만들기 시작해보자.

### mocha

테스트를 만들면서 개발하려면, 만들어진 테스트를 돌리고, 확인할 수 있어야 한다. 

테스트 프레임워크로는 mocha를 사용해봅니다. 

mocha는 TDD와 BDD를 모두 지원하는 테스트 프레임워크입니다. 

*"the fun, simple, flexible JavaScript test framework"* 라고 합니다. 

![스크린샷 2017-04-14 오후 3.38.39](/Users/Naver/TIL/Image-Resources/mocha-logo.png)

##### 설치하기 

npm, 

```bash
npm install -g mocha
//or
npm install --save-dev mocha //package.json에 dev-dependency를 기록할거라면,
```

bower, 

```bash
bower install mocha
```

혹은 [cdnjs](https://cdnjs.com/libraries/mocha) 를 통해 설치할 수 있습니다. 



npm으로 설치해보지요. 

npm은 `node package manager`의 줄임말입니다. 공식 [docs](https://docs.npmjs.com/getting-started/what-is-npm)에서는 이렇게 설명되어 있습니다. 

"npm은 JavaScript 개발자들이 어떠한 문제를 해결하기 위해 만든 코드들을 **공유**하고, 다른 개발자들이 그걸 가져다가 또다른 어플리케이션을 만들 때 **재사용**할 수 있도록 도와줍니다. 

그 코드들이 업데이트되었는지 아닌지를 관리해주며, 업데이트된 사항이 있으면 바로 그 최신버전의 코드를 가지고 올 수 있습니다. 

이러한 재사용 가능한 코드 조각들을 **패키지(package)**, 혹은 **모듈(module)**이라고 부릅니다. 

"

그래서 npm은 npm(node package manager. 노드 패키지 관리자)입니다. 처음에 서버 사이드를 위한 javascript인 node를 위한 패키지들을 관리하는 용도였다가, 점차 확대되어 이제는 프론트엔드, 백엔드를 모두 아우르는 관리인으로 승격되었습니다. 

하나의 패키지는 그냥 하나 혹은 그보다 많은 코드 조각들이 들어있는 하나의 폴더라고 할 수 있고, 그 패키지를 설명해주기 위한 설명서가 함께 들어있습니다. 그 설명서를 `package.json`이라고 부릅니다. 패키지 자체에 대한 설명(이름, 버전..)과, 그 패키지가 의존하고 있는 여러 다른 패키지에 대한 정보가 함께 들어있습니다. 



일단 package.json도 없는 상태이기 때문에 이 Todo프로젝트의 package.json을 만들어봅니다. 

```bash
npm init
```

을 입력하면 커맨드라인에서 package.json에 필요한 정보를 차례로 입력할 수 있게 됩니다. 

다 입력해서 package.json이 생기면 이제 필요한 패키지-mocha-를 설치합니다. 

```bash
npm install --save-dev mocha
```

package.json의 devDependencies에 mocha가 추가된 걸 확인할 수 있습니다. 

```
"devDependencies": {
    "mocha": "^3.2.0"
}
```



##### '테스트' 하기를 한 번 테스트해보자

테스트 파일들은 테스트 파일끼리 관리하는 게 좋을테니, test 폴더를 만들고, test파일을 하나 만들어본다.

```bash
// TodoMVC/
mkdir test
cd test && touch test.js
```

test.js를 채워넣고

```javascript
describe("BDD로-", function(){
	it("테스트가 아무거나 돌아간다", function(){
		//given
		//when
		//then
	});
});
```

mocha로 돌려본다. 초록불이 뜨면 성공!

```bash
mocha //글로벌로 설치되어 있으면,
node_modules/mocha/bin/mocha
```



npm을 쓰고 있으니, npm 스크립트로 등록해서 테스트를 돌릴 수 있다. 

```
"scripts": {
    "test": "mocha"
}

npm test
```

##### 브라우저에서 테스트를 돌리자

mocha는 브라우저에서도 돌아간다. 

```html
<html>
<head>
  <meta charset="utf-8">
  <title>Mocha Tests</title>
  <link href="../node_modules/mocha/mocha.css" rel="stylesheet" />
</head>
<body>
  <div id="mocha"></div>
  <script src="../node_modules/mocha/mocha.js"></script>
  <script>mocha.setup("bdd")</script>
  <script src="../test/setting-test.js"></script>
  <script>
    mocha.run();
  </script>
</body>
</html>
```

![mocha-in-browser](/Users/Naver/TIL/Image-Resources/mocha-in-browser.png)

요렇게 브라우저에서도 동일한 테스트 항목들을 확인할 수 있습니다. 



##### assertion 라이브러리 추가하기

mocha는 자체적으로 assertion을 지원하지는 않습니다. 

(완전히 모든걸 제공하는 테스트 '프레임워크'라기보다는 기본적인 틀을 제공하고 테스트를 돌릴 수 있도록 하는 테스트 러너로서 역할합니다.)

대신 should.js, expect.js, chai 같은 assertion 라이브러리들을 자유롭게 가져다 쓸 수 있도록 합니다. 

should(), expect()와 같은 형식을 모두 쓸 수 있는 chai를 적용해봅니다. 

```bash
npm install --save-dev chai
```

이제 ~.should.be.equalse(); 와 같이 쓸 수 있습니다. 



//브라우저와 콘솔에서 모두 돌아가도록 하려면 어떻게 해야하지??? 



이제 테스트 환경을 일단 갖췄습니다. 

###  

