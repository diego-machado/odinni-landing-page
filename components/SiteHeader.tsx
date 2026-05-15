"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const mobileDrawerPanelId = "site-mobile-drawer-panel";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const collapse = () => {
      setMenuOpen(false);
    };
    mq.addEventListener("change", collapse);
    return () => mq.removeEventListener("change", collapse);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-header-wrap">
      {menuOpen && (
        <button
          type="button"
          className="mobile-drawer-backdrop"
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      )}
      <header className="site-header">
        <a className="brand brand-header-logo" href="#hero" aria-label="Odinni">
          <Image
            src="/assets/logo.png"
            alt=""
            width={200}
            height={52}
            className="brand-header-logo-img"
            priority
            sizes="(max-width: 760px) 120px, 180px"
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#how-it-works">Como funciona</a>
          <a href="#pricing">Planos</a>
          <a href="#footer">Contato</a>
        </nav>
        <a className="nav-cta" href="#pricing">
          Testar grátis
        </a>
        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls={mobileDrawerPanelId}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            aria-hidden="true"
            className="menu-button-icon"
          >
            <rect x="1" y="2" width="22" height="2" rx="1" />
            <rect x="1" y="8" width="22" height="2" rx="1" />
            <rect x="1" y="14" width="22" height="2" rx="1" />
          </svg>
        </button>
      </header>
      <div
        id={mobileDrawerPanelId}
        className="mobile-drawer"
        hidden={!menuOpen}
      >
        <nav aria-label="Navegação principal">
          <a href="#how-it-works" onClick={closeMenu}>
            Como funciona
          </a>
          <a href="#pricing" onClick={closeMenu}>
            Planos
          </a>
          <a href="#footer" onClick={closeMenu}>
            Contato
          </a>
        </nav>
        <a
          href="#pricing"
          className="mobile-drawer-cta"
          onClick={closeMenu}
        >
          Testar grátis
        </a>
      </div>
    </div>
  );
}
