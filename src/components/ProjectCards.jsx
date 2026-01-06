import { useEffect, useRef, useState } from "react";

export default function ProjectCard({ project, className }) {
  const cardRef = useRef(null);
  const ctaRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);

  // 🔁 Smooth follow loop (runs once)
  useEffect(() => {
    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.15;
      current.current.y += (mouse.current.y - current.current.y) * 0.15;

      if (ctaRef.current) {
        ctaRef.current.style.transform = `
          translate3d(${current.current.x}px, ${current.current.y}px, 0)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    // cursor position relative to card
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // keep CTA inside safe bounds
    const padding = 24;
    const ctaWidth = 120;
    const ctaHeight = 40;

    x = Math.max(padding, Math.min(x, rect.width - ctaWidth - padding));
    y = Math.max(padding, Math.min(y, rect.height - ctaHeight - padding));

    mouse.current.x = x;
    mouse.current.y = y;
  };

  return (
    <a
      href="#"
      ref={cardRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-visible rounded-4xl bg-[#0f0f0f] p-4
      shadow-[0_0_0_2px_rgba(255,255,255,0.07),0_20px_60px_rgba(0,0,0,0.8)]
      ${className}`}
    >
      {/* IMAGE FRAME */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale contrast-125 brightness-90
          transition duration-500 group-hover:grayscale-0 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* FLOATING CTA */}
      <div
        ref={ctaRef}
        className={`
          pointer-events-none absolute z-20
          transition-opacity duration-300 ease-out
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{ top: 0, left: 0 }}
      >
        <div className="
          rounded-full
          bg-white/40
          backdrop-blur-md
          px-5 py-2
          text-sm font-medium text-black
          shadow-lg
          whitespace-nowrap
        ">
          View project
        </div>
      </div>

      {/* CORNER ARROW */}
      <span className="absolute bottom-2 left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black">
        <span className="relative h-6 w-6 overflow-hidden" aria-hidden="true">
          {/* default */}
          <svg
            className="absolute inset-0 h-6 w-6 transition-transform duration-400 group-hover:-translate-y-full"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* hover replacement (slides up into place) */}
          <svg
            className="absolute inset-0 h-6 w-6 translate-y-full transition-transform duration-400 group-hover:translate-y-0"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </a>
  );
}
