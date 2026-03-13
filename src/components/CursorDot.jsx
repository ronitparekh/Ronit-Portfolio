import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const rafRef = useRef(0);
  const leaveTimerRef = useRef(null);

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

    const measurePillTargetSize = () => {
      const labelEl = labelRef.current;
      if (!labelEl) return null;

      // Label span includes padding via Tailwind classes, so rect already
      // reflects the “desired” pill content size.
      const rect = labelEl.getBoundingClientRect();
      // Add a small buffer so the border never feels tight on one side
      // due to subpixel rounding during the animated lerp.
      const bufferX = 6;
      const bufferY = 6;
      const w = Math.ceil(rect.width + bufferX);
      const h = Math.ceil(rect.height + bufferY);

      // Keep some sane minimums to avoid tiny pills.
      return { w: Math.max(88, w), h: Math.max(36, h) };
    };

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
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
      }

      modeRef.current = "project";
      dotEl.dataset.mode = "project";

      textRef.current = e?.detail?.label || "View project";
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
      dotEl.dataset.mode = "projectLeave";
      sizeTargetRef.current = { w: 12, h: 12 };
      targetRef.current.x = mouseRef.current.x;
      targetRef.current.y = mouseRef.current.y;

      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = setTimeout(() => {
        dotEl.dataset.mode = "dot";
        leaveTimerRef.current = null;
      }, 560);
    };

    const tick = () => {
      if (labelRef.current && labelRef.current.textContent !== textRef.current) {
        labelRef.current.textContent = textRef.current;
      }

      if (modeRef.current === "project") {
        const measured = measurePillTargetSize();
        if (measured) sizeTargetRef.current = measured;
      }

      if (prefersReducedMotion) {
        currentRef.current.x = targetRef.current.x;
        currentRef.current.y = targetRef.current.y;
      } else {
        const follow = modeRef.current === "project" ? 0.12 : 0.22;
        currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, follow);
        currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, follow);
      }

      const shrinking =
        sizeTargetRef.current.w < sizeCurrentRef.current.w ||
        sizeTargetRef.current.h < sizeCurrentRef.current.h;
      const sizeSpeed = prefersReducedMotion ? 1 : shrinking ? 0.12 : 0.22;
      sizeCurrentRef.current.w = lerp(sizeCurrentRef.current.w, sizeTargetRef.current.w, sizeSpeed);
      sizeCurrentRef.current.h = lerp(sizeCurrentRef.current.h, sizeTargetRef.current.h, sizeSpeed);

      dotEl.style.width = `${Math.round(sizeCurrentRef.current.w)}px`;
      dotEl.style.height = `${Math.round(sizeCurrentRef.current.h)}px`;

      const x = currentRef.current.x;
      const y = currentRef.current.y;

      dotEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    window.addEventListener("cursorDot:projectEnter", onProjectEnter);
    window.addEventListener("cursorDot:projectMove", onProjectMove);
    window.addEventListener("cursorDot:projectLeave", onProjectLeave);

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

      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-9999 grid place-items-center rounded-full border border-transparent transition-opacity duration-200"
      style={{ willChange: "transform" }}
    >
      <span
        ref={labelRef}
        className="select-none px-6 text-base font-medium text-white opacity-0 transition-opacity duration-500 whitespace-nowrap"
      />
      <style>
        {`
          [data-mode]{
            transition: background-color 520ms ease, border-color 520ms ease, box-shadow 520ms ease;
          }
          [data-mode="dot"]{
            background-color: #fff;
          }
          [data-mode="project"]{
            background-color: rgba(18,18,18,0.45);
            border-color: rgba(255,255,255,0.55);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 14px 36px rgba(0,0,0,0.55);
          }
          [data-mode="projectLeave"]{
            background-color: rgba(18,18,18,0.45);
            border-color: rgba(255,255,255,0.55);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 14px 36px rgba(0,0,0,0.55);
          }
          [data-mode="project"]::before{
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            background: radial-gradient(140% 160% at 30% 20%, rgba(255,255,255,0.16), rgba(255,255,255,0) 60%);
            opacity: 1;
            pointer-events: none;
          }
          [data-mode="projectLeave"]::before{
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            background: radial-gradient(140% 160% at 30% 20%, rgba(255,255,255,0.16), rgba(255,255,255,0) 60%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 520ms ease;
          }
          [data-mode="project"] span{
            opacity: 1;
          }
          [data-mode="projectLeave"] span{
            opacity: 0;
            transition: opacity 160ms ease;
          }
        `}
      </style>
    </div>
  );
}
