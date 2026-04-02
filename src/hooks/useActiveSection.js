import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const getSections = () =>
      sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const updateActiveSection = () => {
      const sections = getSections();

      if (!sections.length) {
        return;
      }

      const scrollAnchor = window.innerHeight * 0.28;
      let nextActiveSection = sections[0].id;

      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();

        if (top <= scrollAnchor) {
          nextActiveSection = section.id;
        }
      });

      setActiveSection(nextActiveSection);
    };

    let frameId = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
