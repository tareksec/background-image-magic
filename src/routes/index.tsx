import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Infinity as InfinityIcon,
  MapPin,
  Pause,
  Settings,
  Sparkles,
  Square,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stillwork — Calm Productivity for Focused Minds" },
      {
        name: "description",
        content:
          "Stillwork is a calm productivity space with focus timers, quiet task tracking and no notifications. Just clarity.",
      },
      { property: "og:title", content: "Stillwork — Calm Productivity for Focused Minds" },
      {
        property: "og:description",
        content:
          "A calm productivity space designed to help you focus on what actually matters—nothing more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "Pricing", "Features", "Documents", "About Us"];

const tasks = [
  { title: "Client call on monday", cat: "Sales and marketing", pct: 75, due: "3 Days Left" },
  { title: "Hand off to dev for shipping", cat: "UI/UX Design", pct: 90, due: "1 Day Left" },
];

const tools = ["Notion", "Gmail", "Slack", "Drive", "Evernote"];

function Pin() {
  return (
    <div className="flex justify-center pb-3">
      <MapPin
        className="size-6 -rotate-12 fill-pin text-pin drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
        strokeWidth={1.5}
      />
    </div>
  );
}

function NoteCard({
  label,
  children,
  delay,
}: {
  label: string;
  children: React.ReactNode;
  delay: string;
}) {
  return (
    <div className="group animate-rise" style={{ animationDelay: delay }}>
      <Pin />
      <p className="pb-3 text-center text-sm font-semibold text-foreground">{label}</p>
      <div className="relative">
        <div className="absolute -right-2 -top-2 h-full w-full rotate-2 rounded-2xl border border-border bg-card/70" />
        <div className="relative rounded-2xl border border-border bg-card p-4 shadow-note transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-note-lift">
          {children}
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background px-4 pb-16 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <header className="flex h-[68px] items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <InfinityIcon className="size-6 text-accent" strokeWidth={2.5} />
            <span className="text-lg font-semibold tracking-tight text-foreground">Stillwork</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="/"
                className="text-sm font-medium text-nav-link transition-colors duration-150 hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-secondary"
          >
            Sign in
          </a>
        </header>

        <main
          className="hero-panel mt-4 overflow-hidden rounded-[32px] px-6 pb-20 pt-16 sm:px-12"
          style={{ ["--hero-image" as string]: `url(${heroBg.url})` }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 py-1 pl-1 pr-4 backdrop-blur-sm">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                New
              </span>
              <span className="text-xs font-medium tracking-wide text-foreground/80">
                No notifications. No pressure. Just clarity.
              </span>
            </div>

            <h1 className="animate-rise mt-7 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Calm{" "}
              <span className="inline-flex size-10 translate-y-1 items-center justify-center rounded-xl bg-card text-base font-semibold text-accent-foreground shadow-note sm:size-12 lg:size-14">
                01
              </span>{" "}
              productivity for focused minds
            </h1>

            <p className="animate-rise mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-muted-foreground sm:text-lg">
              A calm productivity space designed to help you focus on what actually
              matters—nothing more.
            </p>

            <div className="animate-rise mt-8">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[15px] font-semibold text-primary-foreground shadow-note transition-all duration-200 hover:-translate-y-0.5 hover:shadow-note-lift active:scale-[0.98]"
              >
                Start calmly <Sparkles className="size-4" />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-12">
            <NoteCard label="Daily Task assignments" delay="120ms">
              <ul className="space-y-4">
                {tasks.map((t) => (
                  <li key={t.title} className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">{t.title}</p>
                    <p className="text-[11px] text-muted-foreground">{t.cat}</p>
                    <div
                      className="h-1.5 w-full overflow-hidden rounded-full bg-accent-soft"
                      role="progressbar"
                      aria-valuenow={t.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${t.title} progress`}
                    >
                      <div className="h-full rounded-full bg-accent" style={{ width: `${t.pct}%` }} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[10px] font-medium text-muted-foreground">
                        <Clock className="size-3" /> {t.due}
                      </span>
                      <span className="flex -space-x-2">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="size-5 rounded-full border-2 border-card bg-accent-soft"
                          />
                        ))}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </NoteCard>

            <NoteCard label="Pomodoro Timer" delay="260ms">
              <div className="mb-3 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-medium text-primary-foreground">
                  Focus
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-medium text-muted-foreground">
                  Break
                </span>
              </div>
              <div className="flex flex-col items-center py-2">
                <div className="relative size-32">
                  <svg viewBox="0 0 100 100" className="size-full -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="var(--accent-soft)"
                      strokeWidth="7"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeDasharray="276"
                      strokeDashoffset="90"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-semibold text-foreground">31:47</span>
                    <span className="text-[10px] text-muted-foreground">Time to focus</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 rounded-full bg-secondary px-4 py-2">
                  <button aria-label="Pause timer" className="text-foreground/70 hover:text-foreground">
                    <Pause className="size-4" />
                  </button>
                  <button aria-label="Stop timer" className="text-foreground/70 hover:text-foreground">
                    <Square className="size-4" />
                  </button>
                  <button aria-label="Timer settings" className="text-foreground/70 hover:text-foreground">
                    <Settings className="size-4" />
                  </button>
                </div>
              </div>
            </NoteCard>

            <NoteCard label="Integration with all your tools" delay="400ms">
              <div className="grid grid-cols-2 gap-3 py-2">
                {tools.map((tool, i) => (
                  <div
                    key={tool}
                    className={`flex items-center gap-2 rounded-xl border border-border bg-card p-2 shadow-note ${
                      i % 2 === 1 ? "translate-y-2" : ""
                    }`}
                  >
                    <span className="flex size-7 items-center justify-center rounded-lg bg-secondary text-[10px] font-bold text-accent-foreground">
                      {tool.slice(0, 2)}
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </NoteCard>
          </div>
        </main>
      </div>
    </div>
  );
}
