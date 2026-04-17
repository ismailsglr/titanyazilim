import aboutImg from "@/assets/about-team.jpg";
import { useScrollReveal } from "@/hooks/use-gsap-reveal";

const stats = [
  { value: "5+", label: "Yıllık Tecrübe" },
  { value: "100+", label: "Tamamlanan Proje" },
  { value: "30+", label: "Mutlu Müşteri" },
];

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hakkimizda" className="relative py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal relative mx-auto aspect-square w-full max-w-md">
            <div
              className="absolute inset-0 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, hsl(var(--neon-purple) / 0.5), transparent 70%)" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-full neon-border transition-transform duration-500 hover:scale-105">
              <img
                src={aboutImg}
                alt="Titan Yazılım holografik kod arayüzleri ile teknoloji vizyonu"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
              Hakkımızda
            </span>
            <h2 className="reveal mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Kod, vizyon ve <span className="gradient-text">tutku</span> ile
            </h2>
            <p className="reveal mt-6 text-base leading-relaxed text-foreground-muted">
              Titan Yazılım, 2019'dan bu yana kurumlara özel dijital ürünler
              tasarlayan ve geliştiren bir teknoloji stüdyosudur. Mühendislik
              titizliği ile tasarım hassasiyetini birleştirerek, ölçeklenebilir
              ve sürdürülebilir çözümler üretiyoruz.
            </p>
            <p className="reveal mt-4 text-base leading-relaxed text-foreground-muted">
              Startuplardan büyük kurumlara kadar geniş bir yelpazede;
              fikirden lansmanına, MVP'den enterprise platformlara
              ürünlerinizi hayata geçiriyoruz.
            </p>

            <div className="reveal mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl glass-card p-5 text-center"
                >
                  <div className="gradient-text text-3xl font-black sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-foreground-muted sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
