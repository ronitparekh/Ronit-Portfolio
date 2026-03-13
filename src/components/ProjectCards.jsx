import { useRef } from "react";

export default function ProjectCard({ project, className }) {
  const cardRef = useRef(null);

  const imageFit = project?.imageFit === "contain" ? "contain" : "cover";
  const imagePosition = project?.imagePosition === "top" ? "top" : "center";

  const emit = (name, detail) => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent(name, { detail }));
  };

  const updateProjectCursor = (e) => {
    emit("cursorDot:projectMove", { x: e.clientX, y: e.clientY });
  };

  const warmProject = () => {
    if (!project?.wakeUrl) return;

    fetch(project.wakeUrl, {
      method: "GET",
      cache: "no-store",
      mode: "cors",
    }).catch(() => {});
  };

  return (
    <a
      href={project?.link || "#"}
      ref={cardRef}
      onMouseEnter={(e) => {
        warmProject();
        emit("cursorDot:projectEnter", { label: "View project" });
        updateProjectCursor(e);
      }}
      onFocus={warmProject}
      onMouseLeave={() => emit("cursorDot:projectLeave")}
      onMouseMove={updateProjectCursor}
      className={`group relative block h-full overflow-visible bg-[#0f0f0f] p-5 border-white/10 rounded-[20px]
      shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]
      ${className}`}
    >
      {/* IMAGE FRAME */}
      <div
        className={`relative w-full overflow-hidden rounded-[10px] aspect-16/10 md:aspect-auto md:h-full ${
          imageFit === "contain" ? "bg-black/40 p-3" : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`h-full w-full grayscale contrast-125 brightness-90 transition duration-500 group-hover:grayscale-0 group-hover:brightness-95 ${
            imageFit === "contain" ? "object-contain" : "object-cover"
          } ${imagePosition === "top" ? "object-top" : "object-center"}`}
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
