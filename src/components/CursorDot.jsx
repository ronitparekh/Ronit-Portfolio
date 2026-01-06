import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const rafRef = useRef(0);

  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);

  const modeRef = useRef("dot");
  const textRef = useRef("View project");

  const sizeCurrentRef = useRef({ w: 12, h: 12 });
  const sizeTargetRef = useRef({ w: 12, h: 12 });

  useEffect(() => {
    const dotEl = dotRef.current;
    if (!dotEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hasFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!hasFinePointer) {
      dotEl.style.display = "none";
      return;
    }

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (modeRef.current !== "project") {
        targetRef.current.x = e.clientX;
        targetRef.current.y = e.clientY;
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        dotEl.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      visibleRef.current = false;
      dotEl.style.opacity = "0";
    };

    const onProjectEnter = (e) => {
      modeRef.current = "project";
      dotEl.dataset.mode = "project";

      textRef.current = e?.detail?.label || "View project";
      sizeTargetRef.current = { w: 120, h: 40 };
    };

    const onProjectMove = (e) => {
      const x = e?.detail?.x;
      const y = e?.detail?.y;
      if (typeof x === "number" && typeof y === "number") {
        targetRef.current.x = x;
        targetRef.current.y = y;
      }
    };

    const onProjectLeave = () => {
      modeRef.current = "dot";
      dotEl.dataset.mode = "dot";
      sizeTargetRef.current = { w: 12, h: 12 };
      targetRef.current.x = mouseRef.current.x;
      targetRef.current.y = mouseRef.current.y;
    };

    const tick = () => {
      const speed = prefersReducedMotion ? 1 : 0.18;
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, speed);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, speed);

      const sizeSpeed = prefersReducedMotion ? 1 : 0.22;
      sizeCurrentRef.current.w = lerp(sizeCurrentRef.current.w, sizeTargetRef.current.w, sizeSpeed);
      sizeCurrentRef.current.h = lerp(sizeCurrentRef.current.h, sizeTargetRef.current.h, sizeSpeed);

      dotEl.style.width = `${sizeCurrentRef.current.w}px`;
      dotEl.style.height = `${sizeCurrentRef.current.h}px`;

      // center dot on cursor
      const x = currentRef.current.x;
      const y = currentRef.current.y;
      dotEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

      if (labelRef.current) {
        labelRef.current.textContent = textRef.current;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    window.addEventListener("cursorDot:projectEnter", onProjectEnter);
    window.addEventListener("cursorDot:projectMove", onProjectMove);
    window.addEventListener("cursorDot:projectLeave", onProjectLeave);

    // start hidden until first move
    dotEl.style.opacity = "0";
    dotEl.dataset.mode = "dot";
    targetRef.current.x = mouseRef.current.x;
    targetRef.current.y = mouseRef.current.y;
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);

      window.removeEventListener("cursorDot:projectEnter", onProjectEnter);
      window.removeEventListener("cursorDot:projectMove", onProjectMove);
      window.removeEventListener("cursorDot:projectLeave", onProjectLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-9999 grid place-items-center rounded-full transition-opacity duration-200"
      style={{ willChange: "transform" }}
    >
      <span
        ref={labelRef}
        className="select-none px-5 text-sm font-medium text-black opacity-0 transition-opacity duration-200 whitespace-nowrap"
      />
      <style>
        {`
          [data-mode="dot"]{
            background: #fff;
          }
          [data-mode="project"]{
            background: rgba(255,255,255,0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.35);
          }
          [data-mode="project"] span{
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}
