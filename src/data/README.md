# 프로젝트 데이터 관리 가이드 📚

이 파일은 웹사이트의 프로젝트 정보를 관리합니다.

## 📄 파일 설명

### `projects.json`
모든 프로젝트 정보가 저장된 파일입니다. 이 파일만 수정하면 웹사이트의 프로젝트 내용이 자동으로 업데이트됩니다!

---

## 🎯 프로젝트 추가하기

### 1단계: projects.json 파일 열기

`src/data/projects.json` 파일을 텍스트 에디터(VS Code 권장)로 엽니다.

### 2단계: 새 프로젝트 추가

`projects` 배열 마지막에 다음 형식으로 추가하세요:

```json
{
  "id": 7,
  "title": "프로젝트 이름",
  "category": "Product",
  "period": "2025.01 ~ 2025.03",
  "description": "프로젝트 설명 (한 문장으로)",
  "role": "내가 맡은 역할",
  "stack": ["기술1", "기술2", "기술3"],
  "links": {
    "github": "https://github.com/username/repo",
    "demo": "https://demo-url.com"
  },
  "featured": false
}
```

### 3단계: 각 필드 설명

| 필드 | 설명 | 예시 | 필수 여부 |
|------|------|------|----------|
| `id` | 고유 번호 (순차적으로 증가) | 7 | ✅ 필수 |
| `title` | 프로젝트 제목 | "AI 학습 도우미" | ✅ 필수 |
| `category` | 카테고리 (아래 참고) | "Product" | ✅ 필수 |
| `period` | 기간 | "2025.01 ~ 2025.03" | ✅ 필수 |
| `description` | 한 줄 설명 | "학생들의 학습..." | ✅ 필수 |
| `role` | 담당 역할 | "프론트엔드, 기획" | ✅ 필수 |
| `stack` | 사용 기술 (배열) | ["React", "Node.js"] | ✅ 필수 |
| `links.github` | GitHub 링크 | "https://github.com/..." | ✅ 필수 |
| `links.demo` | 데모 링크 | "https://demo.com" | ❌ 선택 |
| `featured` | 대표 프로젝트 여부 | true 또는 false | ✅ 필수 |

---

## 📑 카테고리 종류

프로젝트 카테고리는 다음 중 하나를 선택하세요:

- `"Product"` - 실제 제품/서비스
- `"Hackathon"` - 해커톤 프로젝트
- `"Education"` - 교육 관련 프로젝트
- `"Experiment"` - 실험/연구 프로젝트

**새 카테고리를 추가하려면:**
```json
"categories": ["All", "Product", "Hackathon", "Education", "Experiment", "새카테고리"],
```

---

## ⭐ 대표 프로젝트 설정

홈페이지에 표시할 대표 프로젝트를 선택하는 방법:

### 방법 1: featured 필드 사용 (권장)
```json
{
  "id": 1,
  "title": "AI 학습 도우미",
  "featured": true    // ⭐ 대표 프로젝트로 표시
}
```

### 방법 2: featuredProjectIds 배열 수정
```json
"featuredProjectIds": [1, 2, 3, 4],
```

**주의:** 대표 프로젝트는 **최대 4개**를 권장합니다 (2x2 그리드).

---

## 📝 실제 예시

### 예시 1: 기본 프로젝트

```json
{
  "id": 7,
  "title": "Todo 앱",
  "category": "Product",
  "period": "2024.12",
  "description": "간단한 할일 관리 웹 앱",
  "role": "풀스택 개발",
  "stack": ["React", "Node.js", "MongoDB"],
  "links": {
    "github": "https://github.com/myname/todo-app",
    "demo": "https://my-todo-app.vercel.app"
  },
  "featured": false
}
```

### 예시 2: GitHub만 있는 프로젝트

```json
{
  "id": 8,
  "title": "알고리즘 스터디",
  "category": "Education",
  "period": "2024.01 ~ 2024.06",
  "description": "매일 알고리즘 문제 풀이 및 정리",
  "role": "문제 풀이, 코드 리뷰",
  "stack": ["Python", "Java", "Algorithm"],
  "links": {
    "github": "https://github.com/myname/algorithm-study"
  },
  "featured": false
}
```

### 예시 3: 해커톤 프로젝트

```json
{
  "id": 9,
  "title": "2025 서울 해커톤 - 스마트 시티",
  "category": "Hackathon",
  "period": "2025.03",
  "description": "IoT 센서를 활용한 스마트 시티 솔루션",
  "role": "팀장, 백엔드 개발",
  "stack": ["Express", "PostgreSQL", "IoT", "WebSocket"],
  "links": {
    "github": "https://github.com/team/smart-city",
    "demo": "https://demo.smart-city.com"
  },
  "featured": true
}
```

---

## ⚠️ 주의사항

### JSON 문법 규칙

1. **쉼표 주의**
   ```json
   // ✅ 올바름
   {
     "id": 1,
     "title": "프로젝트"
   }
   
   // ❌ 틀림 (마지막 쉼표)
   {
     "id": 1,
     "title": "프로젝트",
   }
   ```

2. **큰따옴표 사용**
   ```json
   // ✅ 올바름
   "title": "AI 학습 도우미"
   
   // ❌ 틀림
   'title': 'AI 학습 도우미'
   ```

3. **배열 항목 사이 쉼표**
   ```json
   // ✅ 올바름
   {
     "id": 1,
     "title": "프로젝트 1"
   },
   {
     "id": 2,
     "title": "프로젝트 2"
   }
   ```

4. **링크 필드**
   - GitHub 링크는 필수입니다
   - Demo 링크가 없으면 `"demo"` 필드를 아예 삭제하세요
   
   ```json
   // Demo가 있을 때
   "links": {
     "github": "#",
     "demo": "#"
   }
   
   // Demo가 없을 때
   "links": {
     "github": "#"
   }
   ```

---

## 🔄 변경사항 적용하기

### 1. 파일 저장
JSON 파일을 수정한 후 **반드시 저장**하세요 (Ctrl+S 또는 Cmd+S).

### 2. 개발 서버에서 확인
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 확인

### 3. 문제 발생 시
- JSON 문법 오류: [JSONLint](https://jsonlint.com/)에서 검증
- 브라우저 콘솔(F12)에서 에러 확인

---

## 🚀 배포 전 체크리스트

프로젝트를 추가/수정한 후 배포 전에 확인하세요:

- [ ] JSON 문법이 올바른가요?
- [ ] 모든 필수 필드가 채워졌나요?
- [ ] GitHub 링크가 정확한가요?
- [ ] 대표 프로젝트가 4개 이하인가요?
- [ ] 로컬에서 정상 작동하나요?

### 배포 명령어
```bash
npm run build
git add .
git commit -m "Update projects data"
git push
```

---

## 💡 팁

1. **VS Code 사용 시**
   - JSON 자동 포맷: `Shift + Alt + F` (Windows) 또는 `Shift + Option + F` (Mac)
   - JSON 오류 실시간 확인 가능

2. **프로젝트 순서**
   - 최신 프로젝트를 위에 배치하세요
   - `id`는 변경하지 말고 계속 증가시키세요

3. **이미지 추가** (향후)
   - 현재는 이미지 없음
   - 추가 원하시면 개발자에게 문의

---

## 📞 문의

JSON 파일 수정 중 문제가 생기면:
1. 원본 파일을 백업해두세요
2. 개발자에게 연락하세요
3. Git에서 이전 버전 복구 가능

**Happy Coding! 🎉**

