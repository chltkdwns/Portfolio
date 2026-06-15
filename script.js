// === 기술 스택 설명 데이터 ===
const skillData = {
  springboot: {
    title: "Spring Boot (Java)",
    desc: "REST API 서버 구현 및 JWT 인증 적용. 계층형 프로젝트 구조 설계와 예외 처리 경험이 있습니다.",
    icon: "images/skill/springboot.png",
    label: "Spring Boot",
  },
  jpa: {
    title: "JPA / Hibernate",
    desc: "엔티티 설계, 연관관계 매핑, 페이징·정렬·조회 쿼리 작성 경험. CMS형 게시판 구조 설계에 활용했습니다.",
    icon: "images/skill/springboot.png",
    label: "JPA",
  },
  mysql: {
    title: "MySQL",
    desc: "스키마 설계와 연관관계 매핑 경험. 페이징, 정렬, 조인 등 데이터 처리 구현이 가능합니다.",
    icon: "images/skill/mysql.png",
    label: "MySQL",
  },
  react: {
    title: "React",
    desc: "Hooks 기반 상태 관리, Axios API 연동, 에러/로딩 처리 및 SPA 라우팅 구현 경험이 있습니다.",
    icon: "images/skill/react.png",
    label: "React",
  },
  nextjs: {
    title: "Next.js",
    desc: "App Router 기반 페이지 구성, API 연동, 배포 환경 구성 경험이 있습니다.",
    icon: "images/skill/nextjs.png",
    label: "Next.js",
  },
  nodejs: {
    title: "Node.js",
    desc: "Express 기반 REST API 서버 제작, 미들웨어 구성 및 CORS 처리, 에러 핸들링 경험이 있습니다.",
    icon: "images/skill/nodejs.png",
    label: "Node.js",
  },
  javascript: {
    title: "JavaScript (ES6+)",
    desc: "비동기 처리(Promise, async/await), DOM 조작, 프론트/백엔드 전반에 사용합니다.",
    icon: "images/skill/javascript.png",
    label: "JavaScript",
  },
  github: {
    title: "Git / GitHub",
    desc: "브랜치 전략, Pull Request 기반 협업 경험. 충돌 해결 및 버전 관리 실무 경험이 있습니다.",
    icon: "images/skill/github.png",
    label: "Git / GitHub",
  },
  jenkins: {
    title: "Jenkins",
    desc: "GitHub 연동 CI/CD 파이프라인 구성. 빌드-테스트-배포 자동화 환경 구축 경험이 있습니다.",
    icon: "images/skill/jenkins.png",
    label: "Jenkins",
  },
  intellij: {
    title: "IntelliJ IDEA",
    desc: "Spring Boot 백엔드 개발에 활용. 디버깅, 코드 자동완성, 빌드 환경 세팅 경험이 있습니다.",
    icon: "images/skill/intelliJ.png",
    label: "IntelliJ",
  },
  vsc: {
    title: "VSCode",
    desc: "React, Node.js 환경에서의 프론트엔드 개발에 활용. 확장 기능 및 디버깅 도구를 사용합니다.",
    icon: "images/skill/vsc.png",
    label: "VSCode",
  },
};

const stackCategories = [
  {
    title: "주력 기술",
    desc: "가장 자신 있게 사용하는 백엔드 중심 기술",
    skills: ["springboot", "jpa", "mysql"],
  },
  {
    title: "사용 경험",
    desc: "프로젝트에서 실무적으로 다뤄본 기술",
    skills: ["react", "nextjs", "nodejs", "javascript"],
  },
  {
    title: "협업 및 개발 도구",
    desc: "협업과 개발 환경 구성에 사용하는 도구",
    skills: ["github", "jenkins", "intellij", "vsc"],
  },
];

const featuredProject = {
  title: "세븐나이츠 길드 커뮤니티",
  period: "2025.10 — 진행 중",
  status: "개발 진행 중",
  intro: [
    "세븐나이츠 유저를 위한 길드 커뮤니티 서비스",
    "단순 게시판이 아니라 게임 플레이에 실제 도움이 되는 기능 제공",
    "사용자의 요구를 반영하며 지속적으로 확장 중인 프로젝트",
  ],
  github: "https://github.com/chltkdwns/sevenknights_community",
  tech: [
    "Spring Boot",
    "JPA",
    "MySQL",
    "Spring Security",
    "JWT",
    "React",
    "Git/GitHub",
  ],
  timeline: [
    {
      phase: "서비스 기획",
      status: "done",
      text: "길드원 협업 불편을 정리하고, 게임 플레이에 도움이 되는 커뮤니티 방향을 정했습니다.",
    },
    {
      phase: "인증·권한·CMS",
      status: "done",
      text: "회원가입/로그인, JWT 인증, 관리자 권한 분리, CMS 기반 동적 게시판을 구현했습니다.",
    },
    {
      phase: "커뮤니티·길드 기능",
      status: "done",
      text: "게시글·댓글 CRUD, 좋아요, 길드 공지, 방어덱 등록, Character/Skill Entity를 구현했습니다.",
    },
    {
      phase: "추천 공격덱",
      status: "active",
      text: "길드전 추천 공격덱 기능과 추천 로직 고도화를 개발 중입니다.",
    },
    {
      phase: "확장 기능",
      status: "planned",
      text: "OCR 점수 계산, 레이드 공략, 이벤트 효율 계산기 등을 순차적으로 추가할 예정입니다.",
    },
  ],
  completed: [
    "회원가입 / 로그인",
    "JWT 인증 및 권한 처리",
    "관리자 권한 분리",
    "CMS 기반 동적 게시판",
    "게시글 CRUD",
    "댓글 CRUD",
    "좋아요 기능",
    "게시글 작성자 권한 처리",
    "길드 공지 기능",
    "길드전 상대 방어덱 등록",
    "Character / Skill Entity 구성",
    "공격/방어 가이드 구조 설계",
  ],
  inProgress: ["길드전 추천 공격덱 기능", "추천 로직 고도화"],
  planned: [
    "OCR 기반 길드전 점수 계산",
    "레이드 공략 기능",
    "시나리오/이벤트 효율 계산기",
    "사용자 편의 기능 개선",
  ],
};

const teamProjects = [
  {
    id: "moodify",
    title: "Moodify",
    period: "2025.07 — 2025.08",
    members: "5명",
    summary: "사용자의 일기를 감정 분석하여 음악을 추천하는 서비스",
    tech: [
      "Spring Boot",
      "Spring Security",
      "JavaMailSender",
      "OAuth",
      "Thymeleaf",
    ],
    live: "https://moodf.xyz/",
    github: "https://github.com/songmikim/moodify",
    roles: [
      {
        section: null,
        items: [
          "이메일 인증 기반 회원가입 구현",
          "Spring Security 기반 로그인",
          "비밀번호 찾기 및 임시 비밀번호 발급",
          "BCrypt 암호화 및 Validator 구현",
          "JavaMailSender 기반 인증 메일 발송",
          "카카오/네이버 소셜 로그인 연동",
          "LoginSuccessHandler / LoginFailureHandler 구현",
        ],
      },
    ],
  },
  {
    id: "chulfudoc",
    title: "Chulfudoc",
    period: "2025.08 — 2025.09",
    members: "5명",
    summary: "웹캠 기반 넘어짐 감지 및 응급 알림 서비스",
    tech: ["Spring Boot", "React", "Redis", "Docker", "SweetAlert2"],
    live: "https://chulfudoc.xyz/",
    github: "https://github.com/koreait1",
    roles: [
      {
        section: "Backend",
        items: [
          "이메일 인증 기능 구현",
          "비밀번호 찾기 및 임시 비밀번호 발급",
          "아이디 찾기 기능",
          "회원 탈퇴 기능",
          "회원정보 수정 기능",
          "게시판 리스트 조회 수정",
          "Docker 설정 및 환경 변수 적용",
          "인증 정책 보완",
        ],
      },
      {
        section: "Frontend",
        items: [
          "회원 탈퇴 UI 구현",
          "SweetAlert2 기반 확인/완료 메시지",
          "자동 로그아웃 처리",
          "이메일 인증 UI 구현",
          "인증 재전송 및 타이머 구현",
          "Redis 기반 인증 만료 연동",
          "아이디 찾기 / 비밀번호 찾기 화면 구현",
          "회원정보 수정 UI 구현",
        ],
      },
    ],
  },
];

const personalProjects = [
  {
    title: "Second_hand",
    period: "2025.04",
    members: "1명 (개인)",
    summary: "중고거래 게시판",
    problem: "사용자 간 중고 거래를 안전하고 편리하게 할 수 있는 플랫폼이 필요했습니다.",
    role: "기획·설계·풀스택 구현 (React, Spring Boot, AWS 배포)",
    features: [
      "게시글 CRUD",
      "JWT 인증",
      "이미지 업로드",
      "실시간 채팅",
    ],
    tech: ["React", "Spring Boot", "MySQL", "AWS EC2", "S3"],
    github: "https://github.com/chltkdwns/new_second_hand",
  },
  {
    title: "Chatbot AI",
    period: "2025.05 — 2025.07",
    members: "1명 (개인)",
    summary: "GPT 기반 AI 챗봇 시스템",
    problem: "사용자 입력에 자연스럽게 응답하는 챗봇 서비스 구조가 필요했습니다.",
    role: "프론트엔드(React), Node.js API 서버, 딥러닝 서버 연동 설계·구현",
    features: [
      "자연어 입력·응답 생성",
      "프론트-백-딥러닝 서버 분리 구조",
      "대화 로그 저장",
    ],
    tech: ["React", "Node.js", "Flask", "Python", "Hugging Face Transformers"],
    github: "https://github.com/chltkdwns/chatbot_fe",
  },
  {
    title: "Quick Draw! AI",
    period: "2025.05 — 2025.07",
    members: "1명 (개인)",
    summary: "그림 맞추기 AI 웹 게임",
    problem: "사용자가 그린 그림을 AI가 실시간으로 인식하는 인터랙티브 경험이 필요했습니다.",
    role: "React 프론트엔드, Canvas 드로잉, FastAPI 서버 연동 구현",
    features: [
      "Canvas 실시간 드로잉",
      "CNN 모델 기반 이미지 예측",
      "예측 결과 시각화",
    ],
    tech: ["React", "FastAPI", "TensorFlow", "Python"],
    github: "https://github.com/chltkdwns/quick_drawfe",
  },
];

// === 유틸 ===
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderTechTags(techList) {
  return techList
    .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
    .join("");
}

function renderActionLinks(project) {
  const links = [];
  if (project.live) {
    links.push(
      `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="link-btn">배포 사이트</a>`
    );
  }
  if (project.github) {
    links.push(
      `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="link-btn link-btn--primary">GitHub</a>`
    );
  }
  return links.join("");
}

function renderFeatures(features) {
  return `<ul class="feature-list">${features
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderStatusList(items, listClass) {
  return `<ul class="${listClass}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function timelineStatusLabel(status) {
  if (status === "done") return "완료";
  if (status === "active") return "진행 중";
  return "예정";
}

// === 렌더링 ===
function renderStack() {
  const container = document.getElementById("stack-groups");
  if (!container) return;

  container.innerHTML = stackCategories
    .map(
      (category) => `
      <div class="stack-group">
        <h3>${escapeHtml(category.title)}</h3>
        <p class="stack-group-desc">${escapeHtml(category.desc)}</p>
        <div class="stack-group-skills">
          <div class="skill-container">
            ${category.skills
              .map((key) => {
                const skill = skillData[key];
                return `
                  <button type="button" class="skill-item" data-skill="${key}" aria-expanded="false">
                    <img src="${skill.icon}" alt="" />
                    <span>${escapeHtml(skill.label)}</span>
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="skill-info" role="region" aria-live="polite">
            <h3 class="skill-info-title"></h3>
            <p class="skill-info-desc"></p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  bindSkillPanel(container);
}

function bindSkillPanel(container) {
  if (!container) return;

  let activeButton = null;

  const closeAllPanels = () => {
    container.querySelectorAll(".skill-info").forEach((panel) => {
      panel.classList.remove("is-open");
      panel.style.display = "none";
    });
    container.querySelectorAll(".skill-item").forEach((btn) => {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-expanded", "false");
    });
    activeButton = null;
  };

  const openPanel = (button, data) => {
    const group = button.closest(".stack-group");
    if (!group) return;

    const panel = group.querySelector(".skill-info");
    const title = group.querySelector(".skill-info-title");
    const desc = group.querySelector(".skill-info-desc");
    if (!panel || !title || !desc) return;

    title.textContent = data.title;
    desc.textContent = data.desc;
    panel.classList.add("is-open");
    panel.style.display = "block";
    button.classList.add("is-active");
    button.setAttribute("aria-expanded", "true");
    activeButton = button;
  };

  container.querySelectorAll(".skill-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const key = button.dataset.skill;
      const data = skillData[key];
      if (!data) return;

      const isSame = activeButton === button;
      closeAllPanels();
      if (isSame) return;

      openPanel(button, data);
    });
  });
}

function renderFeaturedProject() {
  const container = document.getElementById("featured-project");
  if (!container) return;

  const project = featuredProject;

  container.innerHTML = `
    <article class="featured-project" aria-labelledby="featured-title">
      <div class="featured-header">
        <div>
          <p class="featured-label">Featured Project · 메인 프로젝트</p>
          <h3 id="featured-title">${escapeHtml(project.title)}</h3>
          <p class="featured-period">${escapeHtml(project.period)}</p>
        </div>
        <span class="badge badge-in-progress">${escapeHtml(project.status)}</span>
      </div>

      <div class="status-overview" aria-label="프로젝트 진행 상태 요약">
        <span class="status-chip status-chip--done">완료 ${project.completed.length}개</span>
        <span class="status-chip status-chip--active">진행 중 ${project.inProgress.length}개</span>
        <span class="status-chip status-chip--planned">예정 ${project.planned.length}개</span>
      </div>

      <div class="featured-block featured-block--intro">
        <h4>프로젝트 소개</h4>
        <ul class="intro-list">
          ${project.intro.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>

      <h4 class="featured-subtitle">진행 타임라인</h4>
      <ol class="timeline">
        ${project.timeline
          .map(
            (item) => `
          <li class="timeline-item timeline-item--${item.status}">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <div class="timeline-head">
                <strong>${escapeHtml(item.phase)}</strong>
                <span class="timeline-badge">${timelineStatusLabel(item.status)}</span>
              </div>
              <p>${escapeHtml(item.text)}</p>
            </div>
          </li>
        `
          )
          .join("")}
      </ol>

      <div class="featured-status-grid">
        <div class="status-panel status-panel--done">
          <h4 class="featured-subtitle">구현 완료</h4>
          ${renderStatusList(project.completed, "check-list")}
        </div>
        <div class="status-panel status-panel--active">
          <h4 class="featured-subtitle">진행 중</h4>
          ${renderStatusList(project.inProgress, "active-list")}
        </div>
        <div class="status-panel status-panel--planned">
          <h4 class="featured-subtitle">예정 기능</h4>
          ${renderStatusList(project.planned, "planned-list")}
        </div>
      </div>

      <div class="featured-footer">
        <div>
          <span class="meta-label">사용 기술</span>
          <div class="tech-tags">${renderTechTags(project.tech)}</div>
        </div>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="link-btn link-btn--primary">GitHub 저장소</a>
      </div>
    </article>
  `;
}

function renderTeamProjectCard(project) {
  return `
    <article class="project-card project-card--compact">
      <h4>${escapeHtml(project.title)}</h4>
      <dl class="project-meta">
        <div class="project-meta-row">
          <dt>기간</dt>
          <dd>${escapeHtml(project.period)}</dd>
        </div>
        <div class="project-meta-row">
          <dt>인원</dt>
          <dd>${escapeHtml(project.members)}</dd>
        </div>
      </dl>
      <p class="project-summary">${escapeHtml(project.summary)}</p>
      <div class="tech-tags">${renderTechTags(project.tech)}</div>
      <button
        type="button"
        class="btn-detail"
        data-project-id="${escapeHtml(project.id)}"
        aria-haspopup="dialog"
      >
        자세히 보기
      </button>
    </article>
  `;
}

function renderProjectCard(project) {
  return `
    <article class="project-card">
      <h4>${escapeHtml(project.title)}</h4>
      <dl class="project-meta">
        <div class="project-meta-row">
          <dt>기간</dt>
          <dd>${escapeHtml(project.period)}</dd>
        </div>
        <div class="project-meta-row">
          <dt>인원</dt>
          <dd>${escapeHtml(project.members)}</dd>
        </div>
      </dl>
      <p class="project-summary">${escapeHtml(project.summary)}</p>
      <div class="project-role">
        <span class="meta-label">담당 역할</span>
        <p>${escapeHtml(project.role)}</p>
      </div>
      <div class="project-block">
        <span class="meta-label">해결한 문제</span>
        <p>${escapeHtml(project.problem)}</p>
      </div>
      <div class="project-block">
        <span class="meta-label">주요 기능</span>
        ${renderFeatures(project.features)}
      </div>
      <div class="project-block">
        <span class="meta-label">사용 기술</span>
        <div class="tech-tags">${renderTechTags(project.tech)}</div>
      </div>
      <div class="project-links">${renderActionLinks(project)}</div>
    </article>
  `;
}

function renderModalRoles(roles) {
  return roles
    .map((group) => {
      const title = group.section
        ? `<h4 class="modal-role-title">${escapeHtml(group.section)}</h4>`
        : `<h4 class="modal-role-title">담당 역할</h4>`;
      return `
        <div class="modal-role-group">
          ${title}
          <ul class="modal-role-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `;
    })
    .join("");
}

function renderProjects() {
  const teamContainer = document.getElementById("team-projects");
  const personalContainer = document.getElementById("personal-projects");

  if (teamContainer) {
    teamContainer.innerHTML = teamProjects.map(renderTeamProjectCard).join("");
  }
  if (personalContainer) {
    personalContainer.innerHTML = personalProjects.map(renderProjectCard).join("");
  }
}

// === 모달 ===
let lastFocusedElement = null;

function openProjectModal(projectId) {
  const project = teamProjects.find((item) => item.id === projectId);
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  if (!project || !modal || !modalContent) return;

  lastFocusedElement = document.activeElement;

  modalContent.innerHTML = `
    <h3 id="modal-title">${escapeHtml(project.title)}</h3>
    <p class="modal-summary">${escapeHtml(project.summary)}</p>
    <dl class="project-meta modal-meta">
      <div class="project-meta-row">
        <dt>기간</dt>
        <dd>${escapeHtml(project.period)}</dd>
      </div>
      <div class="project-meta-row">
        <dt>인원</dt>
        <dd>${escapeHtml(project.members)}</dd>
      </div>
    </dl>
    ${renderModalRoles(project.roles)}
    <div class="modal-block">
      <span class="meta-label">사용 기술</span>
      <div class="tech-tags">${renderTechTags(project.tech)}</div>
    </div>
    <div class="modal-links">${renderActionLinks(project)}</div>
  `;

  modal.hidden = false;
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) closeButton.focus();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  document.getElementById("team-projects")?.addEventListener("click", (e) => {
    const button = e.target.closest("[data-project-id]");
    if (button) openProjectModal(button.dataset.projectId);
  });

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-modal-close]")) closeProjectModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") closeProjectModal();
  });
}

// === 배경 전환 & 네비 ===
function initSectionObserver() {
  const background = document.querySelector(".background-layer");
  const sections = document.querySelectorAll(".snap-section");
  const navLinks = document.querySelectorAll(".main-nav a");
  const visibleSections = new Map();

  const updateActiveSection = () => {
    if (visibleSections.size === 0) return;

    const [activeId] = [...visibleSections.entries()].sort(
      (a, b) => b[1] - a[1]
    )[0];

    const activeSection = document.getElementById(activeId);
    if (!activeSection) return;

    const bg = activeSection.getAttribute("data-bg");
    if (bg) {
      background.style.backgroundImage = `url("${bg}")`;
    }

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });
      updateActiveSection();
    },
    { threshold: [0, 0.25, 0.5, 0.75] }
  );

  sections.forEach((sec) => observer.observe(sec));

  // 초기 로드 시 About 섹션 배경 적용
  const initialBg = document.querySelector("#about")?.getAttribute("data-bg");
  if (initialBg) {
    background.style.backgroundImage = `url("${initialBg}")`;
  }
}

// === 스크롤 ===
function scrollToSection(hash) {
  const target = document.querySelector(hash);
  if (!target) return;

  const headerHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
    10
  );

  window.scrollTo({
    top: target.offsetTop - headerHeight,
    behavior: "smooth",
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSection(href);
    });
  });
}

// === 초기화 ===
function initApp() {
  renderStack();
  renderFeaturedProject();
  renderProjects();
  initProjectModal();
  initSectionObserver();
  initSmoothScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
