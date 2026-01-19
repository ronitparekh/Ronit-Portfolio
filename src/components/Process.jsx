import { MousePointerClick, Lightbulb, Wrench, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

const steps = [
  {
    step: "1",
    title: "Clarify",
    desc: "I start by understanding the business problem, user requirements, and technical constraints. This includes defining clear goals, identifying edge cases, and aligning on expected outcomes before writing any code.",
    icon: MousePointerClick,
  },
  {
    step: "2",
    title: "Plan",
    desc: "I design the system architecture, database structure, and API flow. This step focuses on choosing the right technologies, planning scalability, and ensuring the frontend and backend work seamlessly together.",
    icon: Lightbulb,
  },
  {
    step: "3",
    title: "Develop",
    desc: "I develop clean, maintainable code using modern frameworks. This includes building responsive UIs, secure backend APIs, authentication flows, and integrating third-party services when required.",
    icon: Wrench,
  },
  {
    step: "4",
    title: "Deliver",
    desc: "I test, optimize, and deploy the application, ensuring performance, security, and reliability. Post-deployment, I provide documentation and support to ensure smooth usage and future scalability.",
    icon: Rocket,
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const cardsWrapRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const cardsWrapEl = cardsWrapRef.current;
    if (!sectionEl || !cardsWrapEl) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (prefersReducedMotion) {
      const cards = cardsWrapEl.querySelectorAll("[data-process-card]");
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "none";
        card.style.willChange = "auto";
      });
      return;
    }

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const ease = 0.12; // smoothing factor

    let rafId = null;
    let currentProgress = 0;
    let targetProgress = 0;
    let sectionTop = 0;
    let sectionHeight = 0;

    const cards = Array.from(
      cardsWrapEl.querySelectorAll("[data-process-card]")
    );

    const animate = () => {
      rafId = null;
      currentProgress = currentProgress + (targetProgress - currentProgress) * ease;

      const n = Math.max(1, cards.length);
      const active = Math.round(currentProgress * (n - 1));

      for (let i = 0; i < n; i++) {
        const card = cards[i];
        const start = i / n;
        const local = clamp((currentProgress - start) * n, 0, 1);
        const distance = Math.abs(i - active);

        const baseOpacity = 0.25 + local * 0.75;
        const focusFactor = 1 - Math.min(distance, 3) * 0.12;
        const opacity = clamp(baseOpacity * focusFactor, 0.18, 1);

        const translateY = (1 - local) * 16 + Math.min(distance, 3) * 3;
        const scale = 0.985 + local * 0.015 - Math.min(distance, 3) * 0.006;

        card.style.opacity = opacity.toFixed(3);
        card.style.transform = `translate3d(0, ${translateY.toFixed(
          2
        )}px, 0) scale(${scale.toFixed(3)})`;
        card.style.willChange = "transform, opacity";
      }

      if (Math.abs(targetProgress - currentProgress) > 0.001) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const kick = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(animate);
    };

    const recalc = () => {
      const rect = sectionEl.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      sectionHeight = sectionEl.offsetHeight;
    };

    const onScroll = () => {
      const viewportH = window.innerHeight || 1;
      const scrollRange = Math.max(1, sectionHeight - viewportH);
      const scrollWithin = window.scrollY - sectionTop;
      targetProgress = clamp(scrollWithin / scrollRange, 0, 1);
      kick();
    };

    recalc();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative border border-white/10 rounded-4xl py-20"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen px-6 py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl">

        {/* Section heading */}
        <div className="mb-20 text-center">
          {/*pill */}
                    <div className="mb-6 inline-flex items-center gap-3 bg-[#121212] px-4 py-2 text-sm font-medium text-white rounded-[20px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                        {/* circle + dot icon */}
                        <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                            <span className="relative h-3 w-3 rounded-full border border-white">
                                <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white" />
                            </span>
                        </span>
                        How It Works
                    </div>

          <h2 className="mb-4 font-satoshi text-[42px] font-normal tracking-tight md:text-[56px]">
            Process <span className="text-white/50">Is Everything</span>
          </h2>

          <p className="mx-auto max-w-xl text-sm font-normal text-white/60 md:text-base">
            Simple, streamlined process is what gets you results
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsWrapRef}>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                data-process-card
                className="relative w-80 bg-[#0f0f0f] p-8 min-h-90  border-white/10 rounded-[20px]
                         shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]"
              >
                {/* Step number */}
                <div className="absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white/70 border border-white/10">
                  {item.step}
                </div>

                {/* Icon */}
                <item.icon className="mb-6 h-6 w-6 text-white/80" />

                {/* Title */}
                <h3 className="mb-3 text-lg font-medium text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-white/10" />

                {/* Step pill */}
                <span className="inline-flex rounded-full bg-black px-3 py-1.5 text-xs text-white/60 border border-white/10">
                  Step {item.step}
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
