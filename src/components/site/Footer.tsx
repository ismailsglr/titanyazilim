import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-card/30 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="gradient-text text-2xl font-black tracking-[0.15em]">
              TITAN
            </span>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted">
              Modern teknolojilerle markanızı dijital çağa taşıyan premium bir
              yazılım stüdyosu. Fikrinizi gerçeğe dönüştürelim.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Sosyal medya"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground-muted transition hover:border-neon-cyan/60 hover:text-neon-cyan"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Hizmetler"
            links={["Web Geliştirme", "Mobil Uygulama", "Backend & API", "Yapay Zeka"]}
          />
          <FooterCol
            title="Hızlı Linkler"
            links={["Hakkımızda", "Projeler", "İletişim", "Kariyer"]}
          />
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 text-center text-xs text-foreground-muted">
          © {new Date().getFullYear()} Titan Yazılım. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-foreground-muted transition hover:text-neon-cyan"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
