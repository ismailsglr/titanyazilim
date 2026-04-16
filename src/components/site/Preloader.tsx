import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / duration) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setHidden(true), 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="gradient-text text-6xl font-black tracking-[0.2em] sm:text-7xl">
          TITAN
        </h1>
        <div className="h-[2px] w-64 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full transition-[width] duration-100"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))",
              boxShadow: "0 0 20px hsl(var(--neon-purple) / 0.6)",
            }}
          />
        </div>
        <span className="text-xs tracking-[0.3em] text-muted-foreground">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
