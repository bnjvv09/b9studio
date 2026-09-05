"use client";

import React, { useEffect, useRef, useCallback } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  const updateCursorVisibility = useCallback((visible: boolean) => {
    if (!cursorRef.current) return;
    isVisibleRef.current = visible;
    cursorRef.current.style.opacity = visible ? "1" : "0";
  }, []);

  const updateHoverState = useCallback((hovered: boolean) => {
    if (isHoveredRef.current === hovered) return;
    isHoveredRef.current = hovered;
    const dot = dotRef.current;
    if (!dot) return;

    if (hovered) {
      dot.className =
        "rounded-full transition-all duration-200 flex items-center justify-center w-9 h-9 bg-cyan-400/10 border border-cyan-400/60 shadow-sm shadow-cyan-400/20";
      dot.innerHTML =
        '<span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>';
    } else {
      dot.className =
        "rounded-full transition-all duration-200 flex items-center justify-center w-2.5 h-2.5 bg-cyan-400/90 shadow-sm shadow-cyan-400/50";
      dot.innerHTML = "";
    }
  }, []);

  useEffect(() => {
    // Solo habilitar en escritorio con puntero fino y hover
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;

    if (prefersReducedMotion || !hasFinePointer || !hasHover) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (!isVisibleRef.current) {
        updateCursorVisibility(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.getAttribute("role") === "button";

      updateHoverState(!!isInteractive);
    };

    const handleMouseLeave = () => {
      updateCursorVisibility(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [updateCursorVisibility, updateHoverState]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        top: 0,
        left: 0,
        opacity: 0,
        willChange: "transform",
      }}
    >
      <div
        ref={dotRef}
        className="rounded-full transition-all duration-200 flex items-center justify-center w-2.5 h-2.5 bg-cyan-400/90 shadow-sm shadow-cyan-400/50"
      />
    </div>
  );
};
