"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiGlobe,
  FiSend,
} from "react-icons/fi";

type SectionId = "moi" | "parcours" | "projets" | "contact";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>("moi");
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<
    Record<SectionId, boolean>
  >({
    moi: false,
    parcours: false,
    projets: false,
    contact: false,
  });

  const moiRef = useRef<HTMLElement | null>(null);
  const parcoursRef = useRef<HTMLElement | null>(null);
  const projetsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);

    const sections: { id: SectionId; ref: React.RefObject<HTMLElement> }[] = [
      { id: "moi", ref: moiRef as React.RefObject<HTMLElement> },
      { id: "parcours", ref: parcoursRef as React.RefObject<HTMLElement> },
      { id: "projets", ref: projetsRef as React.RefObject<HTMLElement>},
      { id: "contact", ref: contactRef as React.RefObject<HTMLElement>},
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries: { id: SectionId; ratio: number }[] = [];

        entries.forEach((entry) => {
          const id = entry.target.getAttribute(
            "data-section-id"
          ) as SectionId | null;
          if (!id) return;

          if (entry.isIntersecting) {
            // Marque la section comme "déjà animée" une fois
            setVisibleSections((prev) =>
              prev[id]
                ? prev
                : {
                    ...prev,
                    [id]: true,
                  }
            );

            visibleEntries.push({
              id,
              ratio: entry.intersectionRatio ?? 0,
            });
          }
        });

        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.ratio - a.ratio);
          setActiveSection(visibleEntries[0].id);
        }
      },
      {
        threshold: 0.1, // plus sensible sur mobile
      }
    );

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section-id", id);
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const bgBase =
    "min-h-screen text-cyan-100 relative overflow-x-hidden overflow-y-auto transition-colors duration-700 ease-out";

  const bgBySection: Record<SectionId, string> = {
    moi: "bg-gradient-to-b from-[#030712] via-[#07111F] to-[#0A182E]",
    parcours: "bg-gradient-to-b from-[#030813] via-[#071424] to-[#0A1C32]",
    projets: "bg-gradient-to-b from-[#030914] via-[#041827] to-[#06273A]",
    contact: "bg-gradient-to-b from-[#020A10] via-[#04141F] to-[#03141E]",
  };

  return (
    <>
      <Navbar />

      <main className={`${bgBase} ${bgBySection[activeSection]} pt-32`}>
        {/* Nuée / halos dynamiques */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div
            className={`
              absolute rounded-full blur-3xl transition-all duration-700
              ${
                activeSection === "moi"
                  ? "top-10 left-1/3 h-80 w-80 bg-cyan-500/25"
                  : ""
              }
              ${
                activeSection === "parcours"
                  ? "top-16 left-1/4 h-80 w-80 bg-sky-500/25"
                  : ""
              }
              ${
                activeSection === "projets"
                  ? "top-1/4 left-1/4 h-96 w-96 bg-sky-500/25"
                  : ""
              }
              ${
                activeSection === "contact"
                  ? "top-1/3 left-1/2 h-80 w-80 bg-teal-400/25 -translate-x-1/2"
                  : ""
              }
            `}
          />
          <div
            className={`
              absolute rounded-full blur-[120px] transition-all duration-700
              ${
                activeSection === "moi"
                  ? "bottom-10 right-16 h-72 w-72 bg-blue-500/25"
                  : ""
              }
              ${
                activeSection === "parcours"
                  ? "bottom-10 right-1/3 h-72 w-72 bg-indigo-500/25"
                  : ""
              }
              ${
                activeSection === "projets"
                  ? "bottom-0 right-1/4 h-80 w-80 bg-indigo-500/25"
                  : ""
              }
              ${
                activeSection === "contact"
                  ? "bottom-4 right-10 h-72 w-72 bg-emerald-500/25"
                  : ""
              }
            `}
          />
        </div>

        <div
          className={`
            relative z-10 container mx-auto px-6 pb-16
            space-y-12
            transition-all duration-700
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {/* ====== SECTION MOI ====== */}
          <section id="moi" ref={moiRef} className="flex items-center">
            <div
              className={`
                w-full space-y-8 border border-cyan-400/15
                rounded-3xl bg-white/5 backdrop-blur-xl
                px-6 md:px-10 py-8
                shadow-[0_0_35px_rgba(0,255,255,0.08)]
                transition-all duration-700
                ${
                  visibleSections.moi
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase">
                  Moi
                </p>
              </div>

              <h1
                className="
                  text-4xl md:text-5xl lg:text-6xl font-extrabold
                  bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_25px_rgba(0,255,255,0.25)]
                "
              >
                Florian – Développeur orienté projet réel
              </h1>

              <p className="text-lg text-cyan-100/85 leading-relaxed max-w-2xl">
                <FiCode className="inline mr-2 text-cyan-300" />
                Je construis des applications complètes, du front au back :
                interfaces Next.js modernes, APIs Node.js, bases de données
                structurées et systèmes métiers concrets. En parallèle, je
                développe des jeux et prototypes techniques avec Unity.
              </p>

              <p className="text-sm text-cyan-100/70 max-w-2xl">
                <FiLayers className="inline mr-2 text-cyan-300" />
                Ce portfolio présente des projets que j&apos;ai vraiment conçus et
                utilisés : ERP pour une boutique, jeu de cartes multijoueur,
                expériences VR avec hardware custom. L&apos;objectif : montrer ce
                que je peux apporter sur un projet sérieux.
              </p>

              <div className="flex flex-wrap gap-3 pt-1 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1">
                  <FiCode /> Next.js / React / TypeScript
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1">
                  <FiDatabase /> Node.js / MySQL / APIs REST
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1">
                  <FiCpu /> Unity / Gameplay / Multijoueur
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1">
                  <FiGlobe /> Outils métiers & automatisation
                </span>
              </div>
            </div>
          </section>

          {/* Trait séparateur */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          {/* ====== SECTION PARCOURS (2 cartes) ====== */}
          <section id="parcours" ref={parcoursRef} className="flex items-center">
            <div
              className={`
                w-full space-y-6 border border-cyan-400/15
                rounded-3xl bg-white/5 backdrop-blur-xl
                px-6 md:px-10 py-8
                shadow-[0_0_35px_rgba(0,255,255,0.08)]
                transition-all duration-700
                ${
                  visibleSections.parcours
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase">
                  Mon parcours
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-100">
                  Mon parcours en 2 parties 🎓💼
                </h2>
                <p className="text-sm text-cyan-100/75 max-w-2xl">
                  Entre terrain et formation, je combine développement, gestion de
                  projet et expérience en boutique. Les cartes ci-dessous résument
                  mon parcours académique et mon parcours professionnel.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* Parcours académique (cliquable) */}
                <Link
                  href="/about"
                  className={`
                    group rounded-2xl border border-cyan-400/20
                    bg-slate-950/40 backdrop-blur-xl
                    overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.08)]
                    transition-all duration-700
                    ${
                      visibleSections.parcours
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }
                    hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                    hover:scale-[1.01] active:scale-[0.99]
                  `}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src="/images/isitech_picture.png"
                      alt="Parcours académique et formation"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-100">
                      <FiLayers className="text-cyan-300" />
                      Parcours académique – ISITECH Lyon
                    </h3>
                    <p className="text-sm text-cyan-100/80">
                      Licence / Bachelor en Responsable de Projets Informatiques à
                      ISITECH Lyon, avec une base en BTS SIO option SLAM.
                      Formation orientée gestion de projet et développement
                      (applications web & métiers), méthodes de conduite de projet,
                      travail en équipe et mise en production de solutions
                      concrètes.
                    </p>
                    <p className="text-xs text-cyan-200/70">
                      Objectif : devenir développeur capable de piloter un projet,
                      du besoin métier jusqu’au déploiement, en gardant un pied très
                      technique 👨‍💻.
                    </p>
                  </div>
                </Link>

                {/* Parcours professionnel (cliquable) */}
                <Link
                  href="/about"
                  className={`
                    group rounded-2xl border border-cyan-400/20
                    bg-slate-950/40 backdrop-blur-xl
                    overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.08)]
                    transition-all duration-700 delay-75
                    ${
                      visibleSections.parcours
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }
                    hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                    hover:scale-[1.01] active:scale-[0.99]
                  `}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src="/images/phonerelax_picture.png"
                      alt="Parcours professionnel et expériences"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-100">
                      <FiCpu className="text-cyan-300" />
                      Parcours pro – Magasin Phone Relax
                    </h3>
                    <p className="text-sm text-cyan-100/80">
                      Développement d’un ERP complet pour le magasin Phone Relax
                      (stocks, ventes, factures, caisse…) et réparation
                      multi-appareils : téléphones, tablettes, trottinettes,
                      PC fixes et portables, montres connectées, consoles. Recherche
                      de panne, diagnostic et remplacement de composants, y compris
                      sur du matériel atypique comme des contrôleurs de camions de
                      chantier 🔧.
                    </p>
                    <p className="text-xs text-cyan-200/70">
                      Objectif : lier développement logiciel sur mesure et réalité
                      terrain, en améliorant concrètement le quotidien de la
                      boutique.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="
                    inline-flex items-center gap-2 text-sm text-cyan-300
                    hover:text-cyan-200 hover:underline
                  "
                >
                  <FiGlobe />
                  Voir plus de détails sur mon parcours →
                </Link>
              </div>
            </div>
          </section>

          {/* Trait séparateur */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          {/* ====== SECTION PROJETS (2 projets) ====== */}
          <section id="projets" ref={projetsRef} className="flex items-center">
            <div
              className={`
                w-full space-y-6 border border-cyan-400/15
                rounded-3xl bg-white/5 backdrop-blur-xl
                px-6 md:px-10 py-8
                shadow-[0_0_35px_rgba(0,255,255,0.08)]
                transition-all duration-700
                ${
                  visibleSections.projets
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase">
                  Mes projets
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-100">
                  Mes 2 projets principaux 💼
                </h2>
                <p className="text-sm text-cyan-100/75 max-w-2xl">
                  Je mets en avant ici mes deux plus gros projets : un ERP
                  complet pour une boutique, et un jeu de cartes multijoueur.
                  Les cartes ci-dessous sont cliquables pour accéder à la page
                  du projet.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* ERP (cliquable) */}
                <Link
                  href="/projects"
                  className={`
                    group rounded-2xl border border-cyan-400/20
                    bg-slate-950/40 backdrop-blur-xl
                    overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.08)]
                    transition-all duration-700
                    ${
                      visibleSections.projets
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }
                    hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                    hover:scale-[1.01] active:scale-[0.99]
                  `}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src="/images/prorelax_picture.png"
                      alt="Aperçu ERP / Gestion de boutique"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-100">
                      <FiLayers className="text-cyan-300" />
                      ERP / Gestion de boutique
                    </h3>
                    <p className="text-sm text-cyan-100/80">
                      Application complète pour gérer une boutique de
                      réparation : stock, ventes, factures PDF, clients,
                      imports Excel, exports, caisse, etc. Construite avec
                      Next.js, React, Node.js et MySQL.
                    </p>
                    <p className="text-xs text-cyan-200/70">
                      Objectif : remplacer des outils génériques par une
                      solution sur mesure adaptée au terrain.
                    </p>
                  </div>
                </Link>

                {/* Minecard (cliquable) */}
                <Link
                  href="/projects"
                  className={`
                    group rounded-2xl border border-cyan-400/20
                    bg-slate-950/40 backdrop-blur-xl
                    overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.08)]
                    transition-all duration-700 delay-75
                    ${
                      visibleSections.projets
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }
                    hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                    hover:scale-[1.01] active:scale-[0.99]
                  `}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src="/images/minecard_picture.png"
                      alt="Aperçu Minecard"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-100">
                      <FiCpu className="text-cyan-300" />
                      Minecard – Jeu de cartes en ligne
                    </h3>
                    <p className="text-sm text-cyan-100/80">
                      Jeu de cartes multijoueur en ligne : decks personnalisés,
                      effets de cartes, tours par tours, synchro réseau,
                      shaders, UI custom. Développé avec Unity, C# et Netcode.
                    </p>
                    <p className="text-xs text-cyan-200/70">
                      Objectif : gérer des systèmes complexes, avec logique de
                      jeu et contraintes temps réel.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  href="/projects"
                  className="
                    inline-flex items-center gap-2 text-sm text-cyan-300
                    hover:text-cyan-200 hover:underline
                  "
                >
                  <FiGlobe />
                  Voir plus de détails sur mes projets →
                </Link>
              </div>
            </div>
          </section>

          {/* Trait séparateur */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          {/* ====== SECTION CONTACT ====== */}
          <section id="contact" ref={contactRef} className="flex items-center">
            <div
              className={`
                w-full space-y-6 border border-cyan-400/15
                rounded-3xl bg-white/5 backdrop-blur-xl
                px-6 md:px-10 py-8
                shadow-[0_0_35px_rgba(0,255,255,0.08)]
                transition-all duration-700
                ${
                  visibleSections.contact
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
                <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase">
                  Contact
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-cyan-100">
                Envie de travailler ensemble ? 🤝
              </h2>
              <p className="text-sm text-cyan-100/80 max-w-2xl">
                Je suis intéressé par des projets où je peux combiner technique,
                réflexion produit et logique métier : outils internes,
                plateformes web, jeux, systèmes un peu complexes.
              </p>

              <div
                className="
                  mt-3 rounded-2xl border border-cyan-400/25
                  bg-slate-950/60 backdrop-blur-xl
                  p-6 shadow-[0_0_25px_rgba(0,255,255,0.12)]
                  space-y-4 text-sm
                "
              >
                <p className="flex items-center gap-2 text-cyan-100/90">
                  <FiSend className="text-cyan-300" />
                  Tu peux me contacter ici :
                </p>
                <ul className="space-y-2">
                  <li>
                    📧 Email :{" "}
                    <a
                      href="mailto:floriancastellier@gmail.com"
                      className="text-cyan-300 hover:text-cyan-200 hover:underline"
                    >
                      floriancastellier@gmail.com
                    </a>
                  </li>
                  <li>
                    🧑‍💻 GitHub :{" "}
                    <a
                      href="https://github.com/ToadyGamer"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 hover:underline"
                    >
                      ToadyGamer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
