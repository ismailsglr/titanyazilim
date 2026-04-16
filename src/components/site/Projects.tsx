import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-gsap-reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  {
    img: p1,
    title: "Nova Analytics",
    desc: "Gerçek zamanlı veri görselleştirme paneli ve raporlama platformu.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    img: p2,
    title: "FinPay Mobile",
    desc: "Yeni nesil dijital cüzdan ve ödeme uygulaması.",
    tags: ["React Native", "Stripe", "AWS"],
  },
  {
    img: p3,
    title: "Lumio Commerce",
    desc: "Ölçeklenebilir e-ticaret altyapısı ve headless storefront.",
    tags: ["Next.js", "Shopify", "Vercel"],
  },
  {
    img: p4,
    title: "Sage AI Assistant",
    desc: "Kurumsal müşteri destek için RAG tabanlı yapay zeka asistanı.",
    tags: ["Python", "OpenAI", "Pinecone"],
  },
  {
    img: p5,
    title: "Atlas Cloud",
    desc: "Çok bulutlu altyapı izleme ve maliyet optimizasyon platformu.",
    tags: ["Go", "Docker", "Kubernetes"],
  },
  {
    img: p6,
    title: "Helix ERP",
    desc: "KOBİ'ler için modern, modüler kurumsal kaynak planlama sistemi.",
    tags: [".NET", "React", "Azure"],
  },
];

export function Projects() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="projeler" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
            Projelerimiz
          </span>
          <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Hayata geçirdiğimiz <span className="gradient-text">ürünler</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-2xl glass-card glass-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <a
                  href="#iletisim"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-card/80 px-4 py-2 text-xs font-medium text-foreground opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100"
                >
                  Detay
                  <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-neon-purple/20 bg-secondary/50 px-2.5 py-1 text-[11px] text-foreground-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
