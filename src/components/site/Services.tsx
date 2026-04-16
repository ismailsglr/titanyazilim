import {
  Code2,
  Smartphone,
  Server,
  Cloud,
  Brain,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-gsap-reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Web Geliştirme",
    desc: "React, Next.js ve modern stack ile yüksek performanslı, SEO uyumlu web uygulamaları.",
    color: "neon-purple",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    desc: "React Native ve Flutter ile iOS & Android için tek kod tabanı, native deneyim.",
    color: "neon-cyan",
  },
  {
    icon: Server,
    title: "Backend & API",
    desc: "Node.js ve .NET ile ölçeklenebilir, güvenli ve sürdürülebilir backend mimarileri.",
    color: "neon-blue",
  },
  {
    icon: Cloud,
    title: "Bulut & DevOps",
    desc: "AWS, Docker ve CI/CD pipeline'ları ile sürekli teslim ve sıfır kesintili dağıtım.",
    color: "neon-purple",
  },
  {
    icon: Brain,
    title: "Yapay Zeka Entegrasyonu",
    desc: "LLM, RAG ve özel modellerle ürünlerinize akıllı otomasyon ve içgörü kazandırın.",
    color: "neon-cyan",
  },
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    desc: "Kullanıcı odaklı arayüz tasarımı, prototipleme ve tasarım sistemleri.",
    color: "neon-blue",
  },
];

export function Services() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <section id="hizmetler" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
            Hizmetlerimiz
          </span>
          <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Uçtan uca <span className="gradient-text">dijital çözümler</span>
          </h2>
          <p className="reveal mt-5 text-foreground-muted">
            Fikrinizden ürünlere; tasarımdan dağıtıma kadar her aşamada
            yanınızdayız.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="reveal group relative overflow-hidden rounded-2xl glass-card glass-card-hover p-7"
              >
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: `hsl(var(--${s.color}) / 0.5)` }}
                />
                <div
                  className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${s.color}) / 0.2), hsl(var(--${s.color}) / 0.05))`,
                    border: `1px solid hsl(var(--${s.color}) / 0.3)`,
                  }}
                >
                  <Icon size={22} style={{ color: `hsl(var(--${s.color}))` }} />
                </div>
                <h3 className="relative mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-foreground-muted">
                  {s.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
