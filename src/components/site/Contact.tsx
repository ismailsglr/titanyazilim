import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/use-gsap-reveal";

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Mesajınız iletildi", {
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
      });
    }, 800);
  };

  return (
    <section id="iletisim" className="relative py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
            İletişim
          </span>
          <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projeniz için <span className="gradient-text">konuşalım</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal space-y-6">
            <div className="rounded-2xl glass-card p-7">
              <div className="space-y-5">
                <ContactItem icon={Mail} label="E-posta" value="merhaba@titanyazilim.com" />
                <ContactItem icon={Phone} label="Telefon" value="+90 (212) 555 0 199" />
                <ContactItem icon={MapPin} label="Adres" value="Levent, İstanbul, Türkiye" />
              </div>

              <div className="mt-8 border-t border-border/40 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
                  Sosyal Medya
                </p>
                <div className="mt-4 flex gap-3">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Sosyal medya"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-secondary/40 text-foreground-muted transition hover:border-neon-cyan/60 hover:text-neon-cyan"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal rounded-2xl glass-card p-7 space-y-5"
          >
            <Field label="Ad Soyad" name="name" placeholder="Adınız" required />
            <Field
              label="E-posta"
              type="email"
              name="email"
              placeholder="ornek@firma.com"
              required
            />
            <div>
              <label className="text-xs font-medium text-foreground-muted">Mesaj</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Projeniz hakkında kısaca anlatın..."
                className="mt-2 w-full resize-none rounded-xl border border-border/60 bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground-muted/50 focus:border-neon-purple/60 focus:ring-2 focus:ring-neon-purple/20"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full px-7 py-3.5 text-sm font-semibold btn-primary-neon disabled:opacity-60"
            >
              {submitting ? "Gönderiliyor..." : "Gönder"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon-purple/30 bg-neon-purple/10">
        <Icon size={18} className="text-neon-purple" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-foreground-muted">{label}</p>
        <p className="mt-1 text-foreground">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-foreground-muted">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-border/60 bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground-muted/50 focus:border-neon-purple/60 focus:ring-2 focus:ring-neon-purple/20"
      />
    </div>
  );
}
