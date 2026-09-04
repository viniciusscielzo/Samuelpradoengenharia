"use client";

import { useEffect, useState } from "react";

const navItems = ["Início", "Projetos", "Engenharia", "Sobre", "Contato"];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Samuel Prado Engenharia Civil — início">
          <span>SAMUEL PRADO</span><small>ENGENHARIA CIVIL</small>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          {navItems.map((item, index) => (
            <a key={item} href={index === 0 ? "#inicio" : index === 1 ? "#projeto" : index === 2 ? "#engenharia" : "#contato"} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contato">Falar com Samuel</a>
        <button className={`menu-button ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu"><span /><span /></button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" aria-hidden="true" /><div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Samuel Prado · Engenharia Civil</p>
          <h1>Engenharia que<br />transforma projetos<br />em <em>patrimônio.</em></h1>
          <p className="hero-copy">Projetos, construção e residências de alto padrão desenvolvidos para quem valoriza arquitetura, conforto e excelência em cada detalhe.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#projeto">Conheça nossos projetos <b>↗</b></a>
            <a className="button button-ghost" href="#contato">Fale com Samuel</a>
          </div>
        </div>
        <p className="hero-signature">Projetos pensados para atravessar gerações.</p>
        <a className="scroll-cue" href="#engenharia" aria-label="Rolar para a próxima seção"><span>Explore</span><i /></a>
      </section>

      <section className="institutional" id="engenharia">
        <div className="institutional-copy reveal">
          <p className="eyebrow dark"><span /> Mais do que construir</p>
          <h2>Projetamos espaços para<br />serem vividos, admirados<br />e <em>valorizados.</em></h2>
          <div className="body-copy">
            <p>Cada projeto nasce da combinação entre engenharia, arquitetura, funcionalidade e atenção aos detalhes.</p>
            <p>Da concepção à execução, buscamos soluções que transformem cada residência em um patrimônio único, pensado para proporcionar conforto, segurança e valorização ao longo do tempo.</p>
          </div>
          <a className="text-link" href="#projeto">Conheça nossa engenharia <span>→</span></a>
        </div>
        <div className="editorial-image reveal">
          <img src="/images/detalhe-arquitetonico.png" alt="Detalhe arquitetônico com escada em concreto, madeira e paisagismo" />
          <div className="image-caption"><span>Precisão</span><b>+</b><span>Estética</span><b>+</b><span>Excelência</span></div>
          <span className="image-index">01 / 03</span>
        </div>
      </section>

      <section className="featured" id="projeto">
        <div className="featured-heading reveal">
          <p className="eyebrow"><span /> Projeto em destaque</p>
          <h2>Residência Alto Padrão<br /><em>Águas de Lindóia · SP</em></h2>
        </div>
        <div className="project-frame reveal">
          <div className="project-photo"><img src="/images/residencia-hero.png" alt="Residência contemporânea de alto padrão com piscina e iluminação noturna" /></div>
          <div className="project-card">
            <p>Residência contemporânea</p>
            <ul>
              <li><span>233 m²</span><small>de construção</small></li><li><span>282 m²</span><small>de terreno</small></li>
              <li><span>4 suítes</span><small>privacidade e conforto</small></li><li><span>Área gourmet integrada</span></li><li><span>Piscina com borda infinita</span></li>
            </ul>
            <a className="text-link light" href="#contato">Ver projeto <span>→</span></a>
          </div>
        </div>
        <div id="contato" className="preview-end reveal"><span>Samuel Prado · Engenharia Civil</span><p>Projetar. Construir. Permanecer.</p></div>
      </section>
    </main>
  );
}
