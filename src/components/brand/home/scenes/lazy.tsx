"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { ScenePlaceholder } from "./frame";

/**
 * A product scene that loads when it comes within ~800px of the viewport: until then its place is held by an
 * empty frame of the same size. The scenes are decorative (each also has its section's text beside it), so the
 * page's first load carries neither their markup nor their code (Motion, the scene kit).
 */
export function lazyScene(load: () => Promise<ComponentType>) {
  const Real = dynamic(load, { ssr: false, loading: () => <ScenePlaceholder /> });
  return function LazyScene() {
    const ref = useRef<HTMLDivElement>(null);
    const [near, setNear] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el || typeof IntersectionObserver === "undefined") return;
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setNear(true);
            io.disconnect();
          }
        },
        { rootMargin: "800px 0px" },
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return near ? <Real /> : <ScenePlaceholder innerRef={ref} />;
  };
}
