import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: {
    selector?: string;
    y?: number;
    stagger?: number;
    delay?: number;
    duration?: number;
  } = {},
) {
  const ref = useRef<T | null>(null);
  const { selector = ".reveal", y = 40, stagger = 0.1, delay = 0, duration = 0.9 } = options;

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const targets = ref.current.querySelectorAll(selector);
    if (!targets.length) return;

    gsap.set(targets, { opacity: 1, filter: "none" });

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: isMobile ? 20 : y,
        duration: isMobile ? 0.5 : duration,
        delay,
        stagger: isMobile ? 0.05 : stagger,
        ease: "power3.out",
        clearProps: "filter,transform",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [selector, y, stagger, delay, duration]);

  return ref;
}
