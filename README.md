# <strong>Elice Team04 Project - Cocktailer</strong>

<div align="center">
<img src="https://i.postimg.cc/XYkG4Nxz/cocktail-title.png" width="800" height="400" alt="cocktail-title">
</div>

# <strong>서비스 소개</strong>

### <strong>칵테일의 천국 - 칵테일러 (COCKTAILER) 🍸 </strong>

#### 모든 칵테일의 레시피와 칵테일을 사랑하는 사람들이 모인 장소입니다.

<br/>
매일 달라지는 칵테일 레시피를 추천 받고 싶어 하는 사람
<br/>
나만의 레시피를 공유하고 싶은 사람
<br/>
칵테일을 주제로 다양한 사람들과 소통하고 싶은 사람
<br/>

[칵테일러](https://www.cocktailer.p-e.kr/) <<< 여기로 모이세요! 🖐
<br/>

# <strong>결과물</strong>

<img src="https://media.discordapp.net/attachments/1051429000888713260/1058040844965396591/image.png" width="800"/>

[4분 데모 동영상!](https://youtu.be/w7ak3pRqzkI)

# <strong>Description</strong>

다양한 칵테일 레시피들을 하나의 사이트에 모여있어 한번에 접근 가능하도록 하는 웹 사이트 입니다. 웹 및 모바일 환경에 최적화 되어 있으며 쉽게 사이트에 접속이 가능합니다.

### 클라이언트 주요 기능

- 사용자는 회원가입 및 로그인이 가능하고 자동 로그인, 본인인증, 바텐더 인증을 할 수 있습니다.
- 다양한 카테고리별 칵테일 레시피를 확인 할 수 있고 나만의 레시피 등록, 수정, 삭제 할 수 있습니다.
- 다양한 사람들과 칵테일에 대한 정보를 교환하며 댓글, 대댓글, 댓글 채택을 할 수 있습니다.
- 나의 기분, 날씨 등등 다양한 요소를 고려하여 칵테일을 추천 받을 수 있습니다.
- react-hook-form을 이용해 로그인 / 회원가입 검증을 처리하였습니다.
- chart.js 를 활용하여 칵테일 재료들을 시각화 하였습니다.
- redux-toolkit을 활용하여 로그인/회원가입, 칵테일 레시피 등록, 칵고리즘 기능을 수행하였습니다.

### 서버 주요 기능

- 사용자가 회원가입 시 랜덤 닉네님 생성을 합니다.
- 회원가입 시 전화번호 인증과 이메일 중복을 확인 합니다.
- 게시물 댓글과 대댓글을 달고 댓글을 채택할 수 있습니다.
- 프론트 단에서 이미지를 s3에 업로드 한 후 키 값을 이용해 서버에 저장하여 다시 내려줍니다.
- 알고리즘을 이용하여 사용자에 맞는 칵테일을 추천해줍니다.

### TEST 계정

- ID : elice14@gmail.com
- PW : Test1234!

## <strong>API Document</strong>

[POSTMAN API Doc](https://documenter.getpostman.com/view/23971901/2s8Z6sbw3T)

# <strong>Skills</strong>

## FRONT

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white" />
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white" />

## BACK

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white" />
<img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=Redis&logoColor=white" />

<br/>

# <strong>Member</strong>

| 이름   | 담당 역할   | 담당 업무                                     |
| ------ | ----------- | --------------------------------------------- |
| 손종훈 | 프론트엔드  | 메인 페이지, 칵고리즘 페이지                  |
| 서아름 | 프론트엔드  | 칵플로우 게시물, 댓글 crud                    |
| 오현석 | 프론트엔드  | 로그인, 회원가입, 마이페이지                  |
| 한세은 | 프론트엔드  | 칵테일 레시피 crud, 좋아요, 카카오톡 공유하기 |
| 김건우 | 백엔드 | 유저, 메인                                    |
| 오인국 | 백엔드      | 칵고리즘, 칵시피                              |
<br/>

# <strong>Architecture</strong>

### <strong>infra</strong>

<img src="https://i.postimg.cc/j2zzVyFW/inf.jpg" width="800" />

### <strong>stack</strong>

<img src="https://i.postimg.cc/DyJ9G0bS/agsd.jpg" width="800" />

# <strong>주요 화면</strong>

<table>
  <tr>
    <td><strong>메인 페이지</strong></td>
    <td><strong>로그인 페이지</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292054-b00bbaa5-8b37-4b42-86ab-f08a01289115.jpg" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292061-ba7ae60e-6f07-475f-82e8-97418aaad318.jpg" height="400"/></td>
  </tr>

 <tr>
    <td><strong>회원가입 페이지</strong></td>
    <td><strong>마이 페이지</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292062-eaac2a39-228c-4e11-98d6-65d41f959522.jpg" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292065-c785d820-be01-468c-b238-aa6daa389792.jpg" height="400"/></td>
  </tr>
 
  <tr>
    <td><strong>칵시피 페이지</strong></td>
    <td><strong>칵시피 상세 페이지</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/211293968-97eae3f8-5e87-4e22-84fa-02d03a81b5cb.jpg" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292076-3ffa8930-2244-459d-9f3e-aa2c1ec4c3cf.jpg" height="400"/></td>
  </tr>
 
 <tr>
    <td><strong>칵플로우 페이지</strong></td>
    <td><strong>칵플로우 상세 페이지</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292079-65cf7a32-f538-4666-b9c4-cba1e012c147.jpg" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292085-fb228463-7ddc-4e73-a31e-750eb1cdfdca.jpg" height="400"/></td>
  </tr>
  
  <tr>
    <td><strong>칵고리즘 페이지</strong></td>
    <td><strong>칵고리즘 결과 페이지</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/211292084-b9efda66-1319-46ab-9dc7-ac0206392f99.jpg" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/211293993-dbf84ecf-6568-4991-8112-8f8cbadfb557.jpg" height="400"/></td>
  </tr>
  
</table>

<br/>
<hr/>

## <strong>Commit Convention</strong>

| option           | content                                               |
| ---------------- | ----------------------------------------------------- |
| Feat             | 새로운 기능을 추가할 경우                             |
| Fix              | 버그를 고친 경우                                      |
| Design           | CSS 등 사용자 UI 디자인 변경                          |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야하는 경우                |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                    |
| Chore            | 진짜 자잘한 변경(오타, 줄 변경 등)                    |
| Setting          | 개발 환경을 설정하는 경우                             |

<br/>
<hr/>

## <strong>실행 방법</strong>

1. 리포지터리를 클론 받습니다.

```bash
git clone <repository address>
```

2. Backend 폴더와 Frontend 폴더 둘 다 들어가 아래 명령어로 필요한 패키지들을 설치합니다. (최상위 경로에서 yarn 하면 설치가 안됩니다.)

```bash
yarn
```

3. Backend 폴더와 Frontend 폴더 둘 다 아래 명령어로 프로젝트를 실행합니다.

```bash
yarn dev
```

4. Backend 폴더와 Frontend 폴더 둘 다 아래 명령어로 프로젝트를 빌드합니다.

```bash
yarn build
```

- Backend .env 파일

```json
# PORT
PORT=

# MODE
NODE_ENV=

# DB
MONGO_URL=
MONGO_URL_COMPASS=
REDIS_USERNAME=
REDIS_PW=
REDIS_URL=
REDIS_PORT=

# AWS S3
S3_ID=
S3_SECRET=

# TOKEN
ACCESS_KEY=
ACCESS_EXPIRE=
ACCESS_EXPIRE_AUTO=
REFRESH_EXPIRE=
COOKIE_EXPIRE=

# SENS
SENS_ID=
SENS_ACCESS_KEY=
SENS_SECRET_KEY=
SENS_FROM=

# GMAIL
GMAIL_ID=
GMAIL_PW=
```

- Frontend .env 파일

```json
VITE_APP_KAKAO=
```
