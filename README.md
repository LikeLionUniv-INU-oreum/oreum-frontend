# ⛰️ [오름]: 대학생활 커리어 네비게이션
> **멋쟁이사자처럼 인천대학교 14기 미니 해커톤 프로젝트 (프론트엔드)** <br />
> 막막한 취업 준비 과정을 산맥 등반에 비유하여, 사용자 맞춤형 통계와 성취도를 직관적으로 시각화한 동기부여 서비스 <br/>

## 🔗 Links
- [소개 자료](https://drive.google.com/file/d/1PSVO96uw7UohAeXVdN6iKzYTZn_i9GnI/view?usp=sharing)
- [배포 링크](https://www.oreumm.site)
- [백엔드 레포지토리](https://github.com/LikeLionUniv-INU-oreum/oreum-backend)
  
<br/>

## 💡 프로젝트 기획 의도
- **기획 의도**: 대학생들이 취업을 준비하며 겪는 "내 스펙이 다른 사람들에 비해 어느 정도일까?"라는 막막함을 해결하고자 기획했습니다. 희망 직무와 학년을 기준으로 평균 데이터와 내 기록을 비교하고, 달성도를 고도와 깃발 등 게임적인 요소로 시각화하여 지속적인 동기부여를 제공합니다.
- **개발 기간**: 2026.06.29 ~ 2026.07.13 (2주)

<br/>

## 🛠 Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

## 🔥 Trouble Shooting (핵심 문제 해결 경험)
### 1. [Architecture] 브라우저 알림창을 단일 통합 모달 컴포넌트로 리팩토링
- **문제 상황**: 학적 변경, 직무 설정, 비밀번호 변경 등의 상호작용에서 기본 `alert`를 사용하면 UI/UX가 저해됨. 각각의 기능을 별도의 모달로 만들 경우 코드 중복과 상태 관리의 복잡도 증가 예상.
- **해결 방안**: `isOpen`과 `type` 상태를 객체로 관리하는 통합 모달 컴포넌트를 설계. 하나의 모달 껍데기 안에서 조건부 렌더링을 통해 내용물만 교체하도록 최적화하고, `styled-components`의 Keyframes를 활용해 등장 애니메이션 추가.
- **결과**: 불필요한 컴포넌트 중복 생성을 막아 코드 복잡도를 낮추고, 서비스 전반에 걸쳐 통일된 UI/UX를 제공함.

### 2. [Network] 서버 통신 응답 구조 최적화
- **문제 상황**: 백엔드 API 연동 성공 시에도 후속 로직이 실행되지 않는 문제 발생.
- **해결 방안**: Axios가 반환하는 Response 객체의 구조를 파악. 성공 데이터 접근 시 `.data` 추출 과정을 명시하고, 에러 핸들링 시 옵셔널 체이닝(`error?.response?.data?.message`)을 적용하여 서버의 실제 에러 메시지를 안전하게 파싱함.
- **결과**: 프론트-백 간의 데이터 규격 불일치 문제 해결. 서버에서 받아오는 메시지를 올바르게 띄워줌.

### 2. [Network] 누락 정보 로컬 스토리지 활용
- **문제 상황**: 코스 리뷰 페이지의 명세서에 희망 직무 정보가 누락되어 해당 페이지 정보 불러오기 불가능.
- **해결 방안**: 정보 입력 페이지에서 받아오는 희망 직무 정보를 `currentJobId`, `currenJobName`이라는 변수로 로컬 스토리지에 저장. 이후 필요한 페이지에서 활용. 
- **결과**: 서버 호출 최소화, 기존 데이터를 효율적으로 재활용함.

<br/>

## ⚡ 주요 기능 (Key Features)

### 1. 나의 학년/직무 비교 통계 대시보드
- 사용자의 현재 스펙을 희망 직무 평균과 비교하는 동적 그래프 구현.
- 누적 데이터를 바탕으로 현재 고도, 수집한 깃발 등 데이터 시각화 제공.

### 2. 사용자 설정 및 프로필 관리 시스템
- 현재 비밀번호 확인 프로세스를 포함한 안전한 정보 변경(직무, 학적, 비밀번호) 폼 구현.
- 변경된 데이터를 즉각적으로 fetch하여 화면에 새로고침 없이 렌더링.

<br/>

## 📂 Folder Structure
```text
📦 src
 ┣ 📂 api         # Axios 인스턴스 및 비동기 통신 함수
 ┣ 📂 assets      # 로고, 아이콘, 이미지 등 정적 리소스
 ┣ 📂 components  # 재사용 가능한 UI
 ┣ 📂 pages       # 라우터에 연결되는 페이지 컴포넌트
 ┗ 📂 styles      # 전역 스타일
```

<br />

© 2026 LikeLion INU. All rights reserved.
