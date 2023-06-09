# korean-food-recipe

> 한국 요리 레시피를 검색할 수 있는 웹 사이트입니다.

약 1000여 개의 한국 요리를 검색할 수 있고,
상세보기를 통해 자세한 레시피를 확인할 수 있습니다.

### demo

[https://sorate7624.github.io/korean-food-recipe/](https://sorate7624.github.io/korean-food-recipe/)

![korean-food-recipe](./korean-food-recipe.png)

## 설치 방법

아래 단계를 따라 프로젝트를 설치하세요.

1. 프로젝트를 클론합니다.

   ```bash
   git clone https://github.com/sorate7624/korean-food-recipe.git
   ```

2. 프로젝트 디렉토리로 이동합니다.

   ```bash
   cd korean-food-recipe
   ```

3. 종속성을 설치합니다.

   ```bash
   npm install
   ```

4. 프로젝트를 실행합니다.
   ```bash
   npm run dev
   ```

## 기술 스택

프로젝트의 기술 스택은 다음과 같습니다.

### Development

<div style="display: flex">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
  <br/>
  <img src="https://img.shields.io/badge/font awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white">
  <img src="https://img.shields.io/badge/react infinite scroll component-008000?style=for-the-badge&logo=reactinfinitescrollcomponent&logoColor=white">
  <img src="https://img.shields.io/badge/react responsive carousel-FF4785?style=for-the-badge&logo=reactresponsivecarousel&logoColor=white">
</div>

### Environment

<div style="display: flex">
  <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

### Config

<div style="display: flex">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/postcss-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white">
  <img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</div>

## 폴더 구조

프로젝트의 주요 폴더 구조는 다음과 같습니다.

- `dist/`: 정적 파일들을 담고 있는 폴더입니다. `index.html` 파일이 여기에 위치합니다.
- `public/`: 정적 파일들을 담고 있는 폴더입니다.
- `src/`: 프로젝트의 소스 코드를 담고 있는 폴더입니다. `main.jsx` 파일이 여기에 위치합니다.
  - `components/`: 프로젝트에서 사용되는 컴포넌트 파일들을 담고 있는 폴더입니다.
- `tailwind.config.cjs`: tailwind 설정 파일입니다.
- `vite.config.js`: vite 설정 파일입니다.

## 업데이트 내역

- 0.1.0
  - assets 폴더 제거 및 캡처 이미지 추가
- 0.0.7
  - 이전 결과값과 이후 결과 값 비교하여 업데이트 처리(비동기 결과 값 디버깅)
- 0.0.6
  - infinite scroll 기능 추가 및 모바일 UI 수정
- 0.0.5
  - App.jsx 구조 변경으로 인한 코드 수정
- 0.0.4
  - 필터 버튼 활성화 내용 추가
- 0.0.3
  - dist 파일 누락 건 추가
- 0.0.2
  - 모바일 UI 수정
- 0.0.1
  - 첫 출시

## 정보

최혜진 – sorate_@naver.com

[https://github.com/sorate7624/](https://github.com/sorate7624/)

## 기여 방법

1. (<https://github.com/sorate7624/korean-food-recipe/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요.
5. 풀리퀘스트를 보내주세요.
