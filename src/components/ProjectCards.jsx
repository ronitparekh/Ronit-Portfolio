import { useRef } from "react";

export default function ProjectCard({ project, className }) {
  const cardRef = useRef(null);

  const emit = (name, detail) => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent(name, { detail }));
  };

  const updateProjectCursor = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    // cursor position relative to card
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // keep CTA inside safe bounds
    const padding = 24;
    const ctaWidth = 120;
    const ctaHeight = 40;

    x = Math.max(padding, Math.min(x, rect.width - ctaWidth - padding));
    y = Math.max(padding, Math.min(y, rect.height - ctaHeight - padding));

    // CursorDot expects screen-space center coordinates
    const centerX = rect.left + x + ctaWidth / 2;
    const centerY = rect.top + y + ctaHeight / 2;

    emit("cursorDot:projectMove", { x: centerX, y: centerY });
  };

  return (
    <a
      href="#"
      ref={cardRef}
      onMouseEnter={(e) => {
        emit("cursorDot:projectEnter", { label: "View project" });
        updateProjectCursor(e);
      }}
      onMouseLeave={() => emit("cursorDot:projectLeave")}
      onMouseMove={updateProjectCursor}
      className={`group relative overflow-visible rounded-3xl bg-[#0f0f0f] p-4
      shadow-[0_0_0_2px_rgba(255,255,255,0.07),0_20px_60px_rgba(0,0,0,0.8)]
      ${className}`}
    >
      {/* IMAGE FRAME */}
      <div className="relative h-full w-full overflow-hidden rounded-[10px] ">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale contrast-125 brightness-90
          transition duration-500 group-hover:grayscale-0 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* CORNER ARROW */}
      <span className="absolute bottom-2 left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black">
        <span className="relative h-7 w-7 overflow-hidden" aria-hidden="true">
          {/* default */}
          <svg
            className="absolute inset-0 h-7 w-7 transition-transform duration-300 group-hover:-translate-y-full"
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
            className="absolute inset-0 h-7 w-7 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
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
