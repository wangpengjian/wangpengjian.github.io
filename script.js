const translations = {
  zh: {
    metaDescription: '王鹏鉴 - 专注 React、TypeScript、前端工程化和 AI 产品落地的前端工程师。',
    pageTitle: '王鹏鉴 | 前端工程师',
    'nav.projects': '项目',
    'nav.skills': '能力',
    'nav.contact': '联系',
    'hero.eyebrow': '前端工程师 · AI 产品构建者',
    'hero.title': '用 React、TypeScript 和 AI 工作流打造更精致的 Web 产品。',
    'hero.text': '我关注可复用前端系统、开发者工具和全栈 AI 应用，把复杂的技术信息转化为清晰、可使用的产品体验。',
    'hero.primaryAction': '查看 AI 项目',
    'hero.secondaryAction': 'GitHub 主页',
    'hero.metricReact': '可复用 UI 与 Hooks 架构',
    'hero.metricTs': '类型安全的前端库和工程工具',
    'hero.metricAi': 'OpenAI 与 GitHub API 产品流程',
    'projects.eyebrow': '精选项目',
    'projects.title': '适合面试展示的项目',
    'projects.openRepo': '查看仓库',
    'projects.repoPolish.type': 'AI 全栈应用',
    'projects.repoPolish.desc': '一个 AI 驱动的 GitHub 作品集与 README 优化工具，可以分析仓库、识别展示短板，并生成更适合招聘和面试场景的项目文案。',
    'projects.repoPolish.point1': 'React + Vite 前端',
    'projects.repoPolish.point2': 'Node.js + Express API',
    'projects.repoPolish.point3': 'GitHub REST API 与可选 OpenAI 生成',
    'projects.repoPolish.point4': '内置演示数据，方便评审直接体验',
    'projects.myHooks.type': '前端工程化',
    'projects.myHooks.desc': '一个 TypeScript React Hooks 业务库，覆盖可复用业务逻辑、文档、演示、测试和前端工程化流程。',
    'projects.myHooks.point1': 'pnpm workspace',
    'projects.myHooks.point2': 'dumi 文档与示例',
    'projects.myHooks.point3': 'Jest 测试配置',
    'projects.myHooks.point4': 'webpack 与 gulp 构建流程',
    'projects.site.type': '作品集系统',
    'projects.site.name': '个人站点',
    'projects.site.desc': '一个聚焦项目亮点、技术栈和面试叙事的 GitHub Pages 作品集入口。',
    'projects.site.point1': 'GitHub Pages 静态部署',
    'projects.site.point2': '响应式布局',
    'projects.site.point3': '项目优先的信息架构',
    'skills.eyebrow': '核心能力',
    'skills.title': '我能为前端团队带来的价值',
    'skills.arch.title': '前端架构',
    'skills.arch.desc': 'React、TypeScript、可复用 Hooks、组件边界和可维护 UI 系统。',
    'skills.workflow.title': '工程化流程',
    'skills.workflow.desc': '测试、Lint、文档、构建链路和面向包的前端研发流程。',
    'skills.ai.title': 'AI 产品集成',
    'skills.ai.desc': '结合 OpenAI 与 GitHub API，把 AI 能力落到真实用户流程中。',
    'contact.eyebrow': '联系',
    'contact.title': '一起做点真正有用的东西。'
  },
  en: {
    metaDescription: '王鹏鉴 - Frontend engineer portfolio focused on React, TypeScript, engineering tooling, and practical AI products.',
    pageTitle: '王鹏鉴 | Frontend Engineer',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Frontend Engineer · AI Product Builder',
    'hero.title': 'Building polished web products with React, TypeScript, and practical AI workflows.',
    'hero.text': 'I focus on reusable frontend systems, developer tooling, and full-stack AI applications that turn technical data into clear product experiences.',
    'hero.primaryAction': 'View AI Project',
    'hero.secondaryAction': 'GitHub Profile',
    'hero.metricReact': 'Reusable UI and hooks architecture',
    'hero.metricTs': 'Typed frontend libraries and tooling',
    'hero.metricAi': 'OpenAI and GitHub API product flows',
    'projects.eyebrow': 'Selected Work',
    'projects.title': 'Interview-ready projects',
    'projects.openRepo': 'Open repository',
    'projects.repoPolish.type': 'AI Full-Stack App',
    'projects.repoPolish.desc': 'An AI-powered GitHub portfolio and README curator that analyzes repositories, extracts presentation gaps, and generates recruiter-friendly project copy.',
    'projects.repoPolish.point1': 'React + Vite frontend',
    'projects.repoPolish.point2': 'Node.js + Express API',
    'projects.repoPolish.point3': 'GitHub REST API and optional OpenAI generation',
    'projects.repoPolish.point4': 'Deterministic demo fallback for reviewer-friendly demos',
    'projects.myHooks.type': 'Frontend Engineering',
    'projects.myHooks.desc': 'A TypeScript React Hooks library for reusable business logic, with documentation, demos, tests, and a frontend engineering workflow.',
    'projects.myHooks.point1': 'pnpm workspace',
    'projects.myHooks.point2': 'dumi documentation',
    'projects.myHooks.point3': 'Jest test setup',
    'projects.myHooks.point4': 'webpack and gulp build workflow',
    'projects.site.type': 'Portfolio System',
    'projects.site.name': 'Personal Site',
    'projects.site.desc': 'A focused GitHub Pages portfolio that presents project strengths, technical stack, and interview-ready engineering narratives.',
    'projects.site.point1': 'Static GitHub Pages deployment',
    'projects.site.point2': 'Responsive layout',
    'projects.site.point3': 'Project-first information architecture',
    'skills.eyebrow': 'Capabilities',
    'skills.title': 'What I bring to frontend teams',
    'skills.arch.title': 'Frontend Architecture',
    'skills.arch.desc': 'React, TypeScript, reusable hooks, component boundaries, and maintainable UI systems.',
    'skills.workflow.title': 'Engineering Workflow',
    'skills.workflow.desc': 'Testing, linting, documentation, build pipelines, and package-oriented frontend workflows.',
    'skills.ai.title': 'AI Product Integration',
    'skills.ai.desc': 'Practical OpenAI and GitHub API integrations that support real user workflows.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s build something useful.'
  }
};

const storageKey = 'portfolio-language';
const buttons = document.querySelectorAll('[data-lang]');
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const dictionary = translations[language] || translations.zh;

  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = dictionary.pageTitle;
  metaDescription.setAttribute('content', dictionary.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    element.textContent = dictionary[key] || '';
  });

  buttons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem(storageKey, language);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem(storageKey) || 'zh');
