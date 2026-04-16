import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { HlsVideo } from "./HlsVideo";

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
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <HlsVideo
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, hsl(var(--neon-purple) / 0.35), transparent 55%), radial-gradient(ellipse at 70% 80%, hsl(var(--neon-cyan) / 0.25), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-card/40 px-4 py-1.5 text-xs text-foreground-muted backdrop-blur-md">
            <Sparkles size={14} className="text-neon-cyan" />
            <span>Premium Yazılım Ajansı</span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]"
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
