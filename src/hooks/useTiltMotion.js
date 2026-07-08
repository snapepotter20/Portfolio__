import { useMemo, useState } from "react";

const defaultTransform = "perspective(1600px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";

export function useTiltMotion(intensity = 12) {
  const [transform, setTransform] = useState(defaultTransform);
  const [glow, setGlow] = useState({
    x: "50%",
    y: "50%",
    opacity: 0,
  });

  const handlers = useMemo(
    () => ({
      onPointerMove: (event) => {
        if (window.matchMedia("(pointer: coarse)").matches) {
          return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        const percentX = (event.clientX - bounds.left) / bounds.width;
        const percentY = (event.clientY - bounds.top) / bounds.height;
        const rotateY = (percentX - 0.5) * intensity;
        const rotateX = (0.5 - percentY) * intensity;

        setTransform(
          `perspective(1600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -6px, 0)`
        );
        setGlow({
          x: `${percentX * 100}%`,
          y: `${percentY * 100}%`,
          opacity: 1,
        });
      },
      onPointerLeave: () => {
        setTransform(defaultTransform);
        setGlow((current) => ({ ...current, opacity: 0 }));
      },
    }),
    [intensity]
  );

  return {
    transform,
    glow,
    handlers,
  };
}
