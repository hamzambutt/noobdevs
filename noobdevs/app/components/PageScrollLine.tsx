"use client";

import { useEffect, useRef, useState } from "react";

interface PathSegment {
  id: string;
  d: string;
  startY: number;
  endY: number;
}

export default function PageScrollLine() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  const [segments, setSegments] = useState<PathSegment[]>([]);
  const segmentRefs = useRef<{ [key: string]: SVGPathElement | null }>({});

  const calculateSegments = () => {
    if (!containerRef.current) return;
    const W = containerRef.current.clientWidth || window.innerWidth;
    const cx = W / 2;
    const lateralAmp = Math.min(W * 0.08, 64);

    const getCardEdges = (id: string, fbTop: number, fbBottom: number) => {
      const el = document.getElementById(id);
      if (!el) return { top: fbTop, bottom: fbBottom };
      const r = el.getBoundingClientRect();
      return {
        top: window.scrollY + r.top,
        bottom: window.scrollY + r.bottom,
      };
    };

    // The line starts precisely at the bottom edge of the Tech Stack Marquee bar
    const marqueeEl = document.getElementById("tech-marquee");
    const yMarqueeBottom = marqueeEl
      ? window.scrollY + marqueeEl.getBoundingClientRect().bottom
      : 520;

    const aboutEdges = getCardEdges("about-card", 1000, 1800);
    const capsEdges = getCardEdges("capabilities-card", 2100, 3100);
    const projEdges = getCardEdges("projects-card", 3400, 4400);
    const teamEdges = getCardEdges("team-card", 4700, 5700);
    const contactEdges = getCardEdges("contact-card", 6000, 6800);

    const segs: PathSegment[] = [];

    // Helper to generate a graceful S-curve between two points
    const makeArc = (
      yStart: number,
      yEnd: number,
      direction: "left" | "right" | "center" = "center"
    ) => {
      const midY = (yStart + yEnd) / 2;
      const xOffset =
        direction === "left"
          ? cx - lateralAmp
          : direction === "right"
          ? cx + lateralAmp
          : cx;
      const bow = (yEnd - yStart) * 0.45;

      return `M ${cx} ${yStart} C ${cx} ${yStart + bow}, ${xOffset} ${midY - bow / 2}, ${xOffset} ${midY} C ${xOffset} ${midY + bow / 2}, ${cx} ${yEnd - bow}, ${cx} ${yEnd}`;
    };

    // 1. Tech Marquee Bottom -> About Card Top
    segs.push({
      id: "marquee-to-about",
      d: makeArc(yMarqueeBottom, aboutEdges.top, "left"),
      startY: yMarqueeBottom - window.innerHeight * 0.8,
      endY: aboutEdges.top - window.innerHeight * 0.65,
    });

    // 2. About Card Bottom -> Capabilities Card Top
    segs.push({
      id: "about-to-caps",
      d: makeArc(aboutEdges.bottom, capsEdges.top, "right"),
      startY: aboutEdges.bottom - window.innerHeight * 0.8,
      endY: capsEdges.top - window.innerHeight * 0.65,
    });

    // 3. Capabilities Card Bottom -> Projects Card Top
    segs.push({
      id: "caps-to-proj",
      d: makeArc(capsEdges.bottom, projEdges.top, "left"),
      startY: capsEdges.bottom - window.innerHeight * 0.8,
      endY: projEdges.top - window.innerHeight * 0.65,
    });

    // 4. Projects Card Bottom -> Team Card Top
    segs.push({
      id: "proj-to-team",
      d: makeArc(projEdges.bottom, teamEdges.top, "right"),
      startY: projEdges.bottom - window.innerHeight * 0.8,
      endY: teamEdges.top - window.innerHeight * 0.65,
    });

    // 5. Team Card Bottom -> Contact Card Top
    segs.push({
      id: "team-to-contact",
      d: makeArc(teamEdges.bottom, contactEdges.top, "left"),
      startY: teamEdges.bottom - window.innerHeight * 0.8,
      endY: contactEdges.top - window.innerHeight * 0.65,
    });

    setSegments(segs);
  };

  useEffect(() => {
    calculateSegments();
    const onResize = () => calculateSegments();
    window.addEventListener("resize", onResize);
    const obs = new ResizeObserver(() => calculateSegments());
    if (document.body) obs.observe(document.body);
    return () => {
      window.removeEventListener("resize", onResize);
      obs.disconnect();
    };
  }, []);

  // Update strokeDashoffset on scroll for each segment
  useEffect(() => {
    segments.forEach((seg) => {
      const path = segmentRefs.current[seg.id];
      if (path) {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
      }
    });

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;

        segments.forEach((seg) => {
          const path = segmentRefs.current[seg.id];
          if (!path) return;

          const len = path.getTotalLength();
          if (len <= 0) return;

          const span = Math.max(1, seg.endY - seg.startY);
          const progress = Math.min(
            Math.max((currentY - seg.startY) / span, 0),
            1
          );

          path.style.strokeDashoffset = `${len * (1 - progress)}`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [segments]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <svg
        className="h-full w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="masterCardLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#f43f5e" stopOpacity="1" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {segments.map((seg) => (
          <path
            key={seg.id}
            ref={(node) => {
              segmentRefs.current[seg.id] = node;
            }}
            d={seg.d}
            fill="none"
            stroke="url(#masterCardLineGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter:
                "drop-shadow(0 0 6px rgba(239,68,68,0.75)) drop-shadow(0 0 2px rgba(244,63,94,0.95))",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
