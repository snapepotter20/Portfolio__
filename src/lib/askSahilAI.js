const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "about", "be", "by", "for", "from",
  "how", "i", "in", "is", "it", "me", "my", "of", "on", "or", "that", "the",
  "to", "what", "with", "you", "your"
]);

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s+.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token && !STOP_WORDS.has(token));
}

function countMatches(queryTokens, haystackTokens) {
  const haystack = new Set(haystackTokens);
  return queryTokens.reduce((score, token) => score + (haystack.has(token) ? 1 : 0), 0);
}

function buildKnowledgeBase(portfolioData) {
  const knowledge = [
    {
      id: 'summary',
      type: 'summary',
      title: 'Professional Summary',
      tokens: tokenize([portfolioData.summary, portfolioData.hero.title, portfolioData.hero.description, ...portfolioData.focusAreas].join(' ')),
      answer: `${portfolioData.name} is an AI full-stack engineer focused on shipping production software with Java, Python, Spring Boot, React.js, FastAPI, and LLM integrations. The core positioning is building useful AI-powered products on top of strong backend systems and scalable frontend experiences.`,
      followUp: 'A strong follow-up question is: tell me about AI integrations or production backend impact.'
    },
    ...portfolioData.experience.map((role) => ({
      id: `experience-${role.title}`,
      type: 'experience',
      title: `${role.title} at ${role.company}`,
      tokens: tokenize([role.title, role.company, role.period, role.type, ...role.stack, ...role.highlights].join(' ')),
      answer: `${role.title} at ${role.company} (${role.period}): ${role.highlights.join(' ')}`,
      followUp: `Relevant stack here includes ${role.stack.join(', ')}.`
    })),
    ...portfolioData.projects.map((project) => ({
      id: `project-${project.title}`,
      type: 'project',
      title: project.title,
      tokens: tokenize([project.title, project.description, ...project.tags, ...project.outcomes].join(' ')),
      answer: `${project.title}: ${project.description} Key outcomes: ${project.outcomes.join(' ')}`,
      followUp: project.backendSource ? 'This project has both frontend and backend repositories in the portfolio.' : 'This project currently links from the portfolio as a single public repo.'
    })),
    ...portfolioData.skillGroups.map((group) => ({
      id: `skills-${group.title}`,
      type: 'skills',
      title: group.title,
      tokens: tokenize([group.title, ...group.items].join(' ')),
      answer: `${group.title}: ${group.items.join(', ')}.`,
      followUp: 'You can ask about LLM engineering, backend architecture, or frontend and cloud skills specifically.'
    })),
    {
      id: 'achievements',
      type: 'achievements',
      title: 'Achievements',
      tokens: tokenize(portfolioData.achievements.join(' ')),
      answer: `Key achievements include: ${portfolioData.achievements.join(' ')}`,
      followUp: 'These are helpful when a recruiter asks about problem-solving depth or competitive benchmarks.'
    },
    {
      id: 'contact',
      type: 'contact',
      title: 'Contact',
      tokens: tokenize([portfolioData.contact.email, portfolioData.contact.phone, portfolioData.links.linkedin, portfolioData.links.github].join(' ')),
      answer: `You can reach ${portfolioData.name} at ${portfolioData.contact.email} or ${portfolioData.contact.phone}. The portfolio also links to LinkedIn, GitHub, LeetCode, and the latest resume.`,
      followUp: 'If a recruiter asks for more detail, the resume and LinkedIn links are the best next step.'
    },
  ];

  return knowledge;
}

function createFallbackAnswer(portfolioData) {
  return {
    title: 'General Overview',
    answer: `${portfolioData.name} is positioned as an AI full-stack engineer with experience in Java, Python, Spring Boot, React.js, FastAPI, LLM integrations, and production backend systems. Try asking about experience, projects, skills, AI work, or contact details.`,
    followUp: 'Examples: What AI projects has Sahil built? What did Sahil do at Bosch? What backend technologies does Sahil use?'
  };
}

export function askSahilAI(query, portfolioData, knowledgeBase) {
  const trimmed = query.trim();

  if (!trimmed) {
    return {
      title: 'Ask Something Specific',
      answer: 'Try a recruiter-style question such as: What makes Sahil a strong AI full-stack engineer? or Tell me about OrderCraft AI.',
      followUp: 'The assistant works best when the question mentions a topic like AI, Bosch, projects, APIs, skills, or contact.'
    };
  }

  const normalized = normalize(trimmed);
  const queryTokens = tokenize(trimmed);

  const intentBoosts = [
    { check: /bosch|bijak|experience|worked|role|roles|job/.test(normalized), type: 'experience', boost: 3 },
    { check: /project|codepilot|ordercraft|weather|portfolio/.test(normalized), type: 'project', boost: 3 },
    { check: /skill|stack|technology|technologies|tools|llm|rag|ai|backend|frontend/.test(normalized), type: 'skills', boost: 2 },
    { check: /contact|email|phone|linkedin|github|resume/.test(normalized), type: 'contact', boost: 4 },
    { check: /achievement|leetcode|kick start|dsa/.test(normalized), type: 'achievements', boost: 3 },
  ];

  const ranked = knowledgeBase
    .map((item) => {
      const tokenScore = countMatches(queryTokens, item.tokens);
      const boost = intentBoosts.reduce((total, rule) => {
        return total + (rule.check && rule.type === item.type ? rule.boost : 0);
      }, 0);

      return { ...item, score: tokenScore + boost };
    })
    .sort((a, b) => b.score - a.score);

  const topMatch = ranked[0];

  if (!topMatch || topMatch.score <= 0) {
    return createFallbackAnswer(portfolioData);
  }

  return {
    title: topMatch.title,
    answer: topMatch.answer,
    followUp: topMatch.followUp,
  };
}

export function createAskSahilAIEngine(portfolioData) {
  const knowledgeBase = buildKnowledgeBase(portfolioData);

  return {
    knowledgeBase,
    answer(query) {
      return askSahilAI(query, portfolioData, knowledgeBase);
    },
  };
}
