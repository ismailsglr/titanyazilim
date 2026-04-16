import {
  Layout,
  Database,
  Smartphone,
  Server,
  Cloud,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-gsap-reveal";

type Category = {
  icon: LucideIcon;
  title: string;
  items: string[];
  color: string;
};

const categories: Category[] = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript"],
    color: "neon-purple",
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", ".NET", "Python", "GraphQL"],
    color: "neon-cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
    color: "neon-blue",
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    color: "neon-purple",
  },
  {
    icon: Cloud,
    title: "DevOps",
    items: ["Docker", "AWS", "Vercel", "GitHub Actions"],
    color: "neon-cyan",
  },
  {
    icon: PenTool,
    title: "Tasarım",
    items: ["Figma", "Adobe XD", "Framer", "Spline"],
    color: "neon-blue",
  },
];

export function Technologies() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <section id="teknolojiler" className="relative py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
            Teknolojiler
          </span>
          <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Modern</span> teknoloji yığınımız
          </h2>
          <p className="reveal mt-5 text-foreground-muted">
            Her projeye en uygun aracı seçer, sürdürülebilir ve test edilmiş
            stack'ler kullanırız.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="reveal rounded-2xl glass-card glass-card-hover p-7"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      background: `hsl(var(--${c.color}) / 0.15)`,
                      border: `1px solid hsl(var(--${c.color}) / 0.3)`,
                    }}
                  >
                    <Icon size={18} style={{ color: `hsl(var(--${c.color}))` }} />
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground-muted"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background: `hsl(var(--${c.color}))`,
                          boxShadow: `0 0 8px hsl(var(--${c.color}))`,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
