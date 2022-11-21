# Ex-Finder - 피실험자 모집 서비스

## | 프로젝트 기획 의도

현재 GIST에서 Google Docs로 접수되는 피실험자 모집 글을 한 곳으로 모으고, 모집자의 관리 편의성, 피실험자의 명확한 신청 과정으로 참여도 증진을 위한 플랫폼을 개발하고자 했다.

## | About Code

해당 레퍼지토리는 Ex-Finder 프로젝트에서 사용된 프론트엔드 코드를 담고있다.

- **React** 라이브러리를 사용했다.
- 언어로는 변수들의 타입 관리에 이점을 가지는 **Typescript**를 선택했다.
- 전역 상태 관리로 Context API를 사용했다.
- CSS는 CSS-in-JS 라이브러리 중 하나인 **Styled Components**를 사용했다.
- 중복되거나 다소 복잡한 구조를 가지는 components를 리팩토링하여 재사용성과 가독성, 유지보수에 편리한 방향으로 코드를 작성하고자 했다.

## | 서비스 기능

### 1. 메인 페이지

피실험자 모집글 목록 페이지, 마이페이지, 로그인 페이지, 피실험자 모집글 작성 페이지로 갈 수 있다.
<img src="https://user-images.githubusercontent.com/58902772/203003608-16460464-4902-46b3-9ee8-4bfbf7ab5de7.png" />

### 2. 피실험자 모집글 목록 페이지

현재 등록되어 있는 피실험자 모집글 목록을 볼 수 있으며, 피실험자 모집글을 작성할 수 있다.
<img src="https://user-images.githubusercontent.com/58902772/203003644-824cfac5-c311-4dd2-9c14-6d56a13cab27.png"/>

### 3. 피실험자 모집글 작성 페이지

피실험자 모집글 작성에 필요한 정보들을 기입할 수 있다. 실험제목, 실험분야, 실험위치, 실험기간, 실험보상, 피실험자 성별과 나이, 실험 세부 내용, 그리고 실험 가능 시간 테이블을 입력할 수 있다.
<img src="https://user-images.githubusercontent.com/58902772/203003647-e396d536-d08a-475b-bf39-007196045011.png" />
<img src="https://user-images.githubusercontent.com/58902772/203003675-dbc85efb-3c5a-4234-a4d3-cd11258cd236.png" />

### 4. 로그인 페이지

웹사이트에 로그인을 할 수 있다.
<img src="https://user-images.githubusercontent.com/58902772/203003679-8774da1b-f406-4e3c-a157-5cc53aaf6529.png" />

### 5. 마이페이지

사용자의 기본 정보, 참여한 실험 목록, 작성한 실험글 목록을 볼 수 있다.
<img src="https://user-images.githubusercontent.com/58902772/203003686-ced630b0-00f5-4f54-b49b-3ba01f86c9fc.png" />

### 6. 개발하지 못한 기능
