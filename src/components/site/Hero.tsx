import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const ctx = gsap.context(() => {
      const words = titleRef.current?.querySelectorAll(".word");
      if (words?.length) {
        gsap.set(words, { opacity: 1 });
        gsap.from(words, {
          opacity: 0,
          y: 40,
          filter: isMobile ? "none" : "blur(12px)",
          duration: isMobile ? 0.6 : 1,
          stagger: isMobile ? 0.04 : 0.08,
          ease: "power3.out",
          delay: 0.2,
        });
      }
      if (subRef.current) {
        gsap.from(subRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.9,
          ease: "power2.out",
        });
      }
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          opacity: 0,
          y: 16,
          duration: 0.7,
          delay: 1.1,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const titleParts = [
    { text: "Geleceğin", gradient: false },
    { text: "Yazılımını", gradient: false },
    { text: "Bugün", gradient: true },
    { text: "İnşa", gradient: false },
    { text: "Ediyoruz", gradient: false },
  ];

  return (
    <section
      id="anasayfa"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl animate-float"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-purple) / 0.4), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-cyan) / 0.35), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full opacity-40 blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-blue) / 0.4), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-card/40 px-4 py-1.5 text-xs text-foreground-muted backdrop-blur-md">
            <Sparkles size={14} className="text-neon-cyan" />
            <span>Premium Yazılım Ajansı</span>
          </div>

          <h1
            ref={titleRef}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {titleParts.map((p, i) => (
              <span key={i} className="word inline-block pr-3">
                {p.gradient ? <span className="gradient-text">{p.text}</span> : p.text}
              </span>
            ))}
          </h1>

          <p
            ref={subRef}
            className="mt-8 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg"
          >
            Kurumsal yazılım çözümleri, ölçeklenebilir web ve mobil uygulamalar,
            yapay zeka entegrasyonları ile markanızı dijital çağa taşıyoruz.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#projeler"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-primary-neon"
            >
              Projelerimiz
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-ghost-neon"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
