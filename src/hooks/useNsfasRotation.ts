import { useEffect, useRef } from 'react';

export function useNsfasRotation() {
  const textPathRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    const textPath = textPathRef.current;
    if (!textPath) return;

    let offset = 0;
    let frameId: number;

    const rotate = () => {
      offset += 0.15;
      if (offset > 100) offset = 0;
      textPath.setAttribute('startOffset', `${offset}%`);
      frameId = requestAnimationFrame(rotate);
    };

    frameId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return textPathRef;
}
