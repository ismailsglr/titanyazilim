import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#teknolojiler", label: "Teknolojiler" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#anasayfa" className="flex items-center gap-2">
          <span className="gradient-text text-2xl font-black tracking-[0.15em]">
            TITAN
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-foreground-muted transition hover:bg-secondary/60 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#iletisim"
          className="hidden rounded-full px-5 py-2 text-sm font-medium btn-primary-neon lg:inline-flex"
        >
          Teklif Al
        </a>

        <button
          aria-label="Menüyü aç"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border/60 p-2 text-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-foreground-muted hover:bg-secondary/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#iletisim"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full px-4 py-3 text-center text-sm font-medium btn-primary-neon"
              >
                Teklif Al
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
