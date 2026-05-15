"use client";

import { useCallback, useRef, type ReactNode } from "react";

export function BenefitCarousel({ children }: { children: ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector(".benefit-card");
    const distance = card ? card.getBoundingClientRect().width + 22 : 280;
    carousel?.scrollBy({ left: direction * distance, behavior: "smooth" });
  }, []);

  return (
    <div className="benefit-carousel-wrap">
      <button
        className="carousel-button prev"
        type="button"
        aria-label="Benefício anterior"
        onClick={() => scrollByCard(-1)}
      >
        ‹
      </button>
      <div
        ref={carouselRef}
        className="benefit-carousel"
        data-carousel
        aria-label="Benefícios da Odinni"
      >
        {children}
      </div>
      <button
        className="carousel-button next"
        type="button"
        aria-label="Próximo benefício"
        onClick={() => scrollByCard(1)}
      >
        ›
      </button>
    </div>
  );
}
