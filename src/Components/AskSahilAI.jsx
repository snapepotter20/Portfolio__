import { useEffect, useMemo, useRef, useState } from "react";
import { FiArrowRight, FiCpu, FiMessageSquare, FiZap } from "react-icons/fi";
import { createAskSahilAIEngine } from "../lib/askSahilAI";

const starterQuestions = [
  "What makes Sahil a strong AI full-stack engineer?",
  "Tell me about Sahil's work at Bosch.",
  "What AI projects has Sahil built?",
  "Which backend technologies does Sahil use?",
];

export function AskSahilAI({ portfolioData }) {
  const engine = useMemo(() => createAskSahilAIEngine(portfolioData), [portfolioData]);
  const [input, setInput] = useState(starterQuestions[0]);
  const [messages, setMessages] = useState(() => [
    {
      id: 'intro',
      role: 'assistant',
      title: 'Ask Sahil AI',
      answer: "I can answer recruiter-style questions about Sahil's experience, AI work, projects, backend systems, and skills using the structured portfolio data on this site.",
      followUp: 'Try one of the suggestions below or type your own question.',
    },
  ]);
  const feedRef = useRef(null);

  useEffect(() => {
    feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const submitQuestion = (question) => {
    const trimmed = question.trim();

    if (!trimmed) {
      return;
    }

    const response = engine.answer(trimmed);

    setMessages((current) => [
      ...current,
      { id: `user-${current.length}`, role: 'user', answer: trimmed },
      { id: `assistant-${current.length}`, role: 'assistant', ...response },
    ]);
    setInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(input);
  };

  return (
    <section id="ask-ai" className="py-14">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan">Ask Sahil AI</p>
        <h2 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl">
          A recruiter-facing AI assistant built from portfolio and resume data.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/68">
          This feature demonstrates a lightweight retrieval-style assistant: it searches structured knowledge from Sahil's profile and returns focused answers without needing an external LLM API.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-panel">
          <div className="flex items-center gap-3 text-cyan">
            <FiCpu size={20} />
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">How It Works</p>
          </div>
          <ul className="mt-5 space-y-4 text-white/72">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan" />
              <span>It builds a local knowledge base from summary, experience, projects, skills, achievements, and contact details.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan" />
              <span>Questions are tokenized and matched against the most relevant section using keyword overlap and intent boosts.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan" />
              <span>The answer is assembled from structured portfolio data, which makes the output fast, deterministic, and deployment-safe.</span>
            </li>
          </ul>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/65 p-5">
            <div className="flex items-center gap-3 text-orange">
              <FiZap size={18} />
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">Suggested Questions</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {starterQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => submitQuestion(question)}
                  className="rounded-full border border-orange/20 bg-orange/10 px-4 py-2 text-sm text-orange transition hover:bg-orange hover:text-slate-950"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[34px] border border-white/10 bg-panel p-6 shadow-panel">
          <div className="flex items-center gap-3 text-cyan">
            <FiMessageSquare size={20} />
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">Assistant Output</p>
          </div>

          <div
            ref={feedRef}
            className="mt-5 h-[420px] space-y-4 overflow-y-auto rounded-[28px] border border-white/10 bg-slate-950/55 p-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === 'user' ? 'ml-auto max-w-[85%]' : 'max-w-[92%]'}
              >
                <div
                  className={message.role === 'user'
                    ? 'rounded-[24px] bg-cyan px-4 py-3 text-sm text-slate-950'
                    : 'rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/78'}
                >
                  {message.role === 'assistant' && message.title ? (
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-cyan">{message.title}</p>
                  ) : null}
                  <p className="leading-7">{message.answer}</p>
                  {message.role === 'assistant' && message.followUp ? (
                    <p className="mt-3 text-xs leading-6 text-white/50">{message.followUp}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Bosch, OrderCraft AI, skills, APIs, AI work..."
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
            >
              Ask
              <FiArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
