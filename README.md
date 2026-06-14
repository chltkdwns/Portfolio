# 최상준 · 포트폴리오

HTML, CSS, JavaScript로 제작한 정적 개인 포트폴리오입니다.  
GitHub Actions를 통해 배포되며, 프로젝트 경험과 기술 스택을 빠르게 확인할 수 있도록 구성했습니다.

## 로컬 실행

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 으로 접속합니다.

## 구조

```
Portfolio/
├── index.html      # 페이지 구조
├── style.css       # 스타일
├── script.js       # 데이터 및 인터랙션
├── images/         # 이미지 에셋
└── backup/         # 이전 버전 백업
```

## 기술

- HTML5 / CSS3 / Vanilla JavaScript
- GitHub Actions (정적 배포)

## 백업

이전 버전은 `backup/` 폴더에 보관되어 있습니다.

- `backup/index.html`
- `backup/style.css`
- `backup/script.js`
- `backup/README.md`
