"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import {
  FiLayers,
  FiCpu,
  FiSmartphone,
  FiCode,
  FiBox,
  FiDatabase,
} from "react-icons/fi";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#030914] via-[#041827] to-[#031621] text-cyan-100 pt-30 pb-16">
        {/* halos / glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
        </div>

        <div
          className={`
            relative z-10 container mx-auto px-6 space-y-10
            transition-all duration-700
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {/* Header */}
          <header className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-50">
              Projets principaux & techniques 🛠️
            </h1>
            <p className="text-sm md:text-base text-cyan-100/80 max-w-2xl">
              Je travaille autant sur des projets concrets utilisés en boutique
              (ERP, outils internes) que sur des projets techniques comme un
              jeu de cartes multijoueur, un logiciel d&apos;étiquetage ou un mod
              Minecraft avec scripts serveur. Cette page donne une vue d&apos;ensemble.
            </p>
          </header>

          {/* SECTION: Projets majeurs */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-50 flex items-center gap-2">
              <FiBox />
              Projets majeurs
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* ERP Phone Relax */}
              <Link
                href="https://pro-relax-site.vercel.app"
                className="
                  group rounded-2xl border border-cyan-400/20
                  bg-slate-950/50 backdrop-blur-xl
                  overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.25)]
                  transition-all duration-300
                  hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]
                  hover:translate-y-[-2px] hover:scale-[1.01]
                "
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src="/images/prorelax_picture.png"
                    alt="ERP Phone Relax"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-cyan-50">
                    <FiLayers className="text-cyan-300" />
                    ERP Phone Relax – Gestion de boutique
                  </h3>
                  <p className="text-sm text-cyan-100/85">
                    Application métier sur mesure pour le magasin Phone Relax :
                    gestion du stock, ventes, factures PDF, imports Excel,
                    exports, caisse, suivi des réparations, multi-magasins et
                    rôles utilisateurs. Utilisé en conditions réelles.
                  </p>
                  <p className="text-xs text-cyan-200/80">
                    Stack : Next.js, React, TypeScript, Node.js, Express, MySQL,
                    jsPDF, XLSX. Objectif : remplacer Excel et logiciels génériques
                    par une solution adaptée au terrain.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      ERP complet
                    </span>
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      Gestion stock & caisse
                    </span>
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      PDF & Excel
                    </span>
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      API REST
                    </span>
                  </div>
                </div>
              </Link>

              {/* Minecard */}
              <Link
                href="https://store.steampowered.com/"
                className="
                  group rounded-2xl border border-cyan-400/20
                  bg-slate-950/50 backdrop-blur-xl
                  overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.25)]
                  transition-all duration-300
                  hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]
                  hover:translate-y-[-2px] hover:scale-[1.01]
                "
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src="/images/minecard_picture.png"
                    alt="Minecard – Jeu de cartes en ligne"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-cyan-50">
                    <FiCpu className="text-cyan-300" />
                    Minecard – Jeu de cartes multijoueur
                  </h3>
                  <p className="text-sm text-cyan-100/85">
                    Jeu de cartes en 1v1 en ligne : decks personnalisés, effets
                    de cartes, système de tours par tours, UI 3D, shaders et FX,
                    synchronisation des états entre host et client.
                  </p>
                  <p className="text-xs text-cyan-200/80">
                    Stack : Unity (URP), C#, Netcode for GameObjects, système
                    de deckbuilder, board 3D, shaders custom (foil, auras),
                    UI personnalisée.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      Multijoueur 1v1
                    </span>
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      Deckbuilder
                    </span>
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      Shaders & FX
                    </span>
                    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                      Unity / C#
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* SECTION: Projets techniques & prototypes */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-50 flex items-center gap-2">
              <FiCode />
              Projets techniques & prototypes
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Logiciel d'étiquetage (Electron) */}
              <div
                className="
                  rounded-2xl border border-cyan-400/20
                  bg-slate-950/40 backdrop-blur-xl
                  p-5 shadow-[0_0_20px_rgba(0,255,255,0.18)]
                  space-y-3 transition-all duration-300
                  hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                  hover:translate-y-[-2px] hover:scale-[1.01]
                "
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-50">
                  <FiSmartphone className="text-cyan-300" />
                  Logiciel d&apos;étiquetage – Electron
                </h3>
                <p className="text-sm text-cyan-100/85">
                  Application de génération d&apos;étiquettes pour Phone Relax :
                  gestion d&apos;un fond d&apos;étiquette, placement des champs (prix,
                  modèle, capacité, etc.), presets réutilisables et export en PDF.
                </p>
                <p className="text-xs text-cyan-200/80">
                  Développé avec Electron, HTML5 Canvas, html2canvas et jsPDF,
                  avec une interface pensée pour créer rapidement des planches
                  d&apos;étiquettes pour plusieurs appareils à la fois.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Electron
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Canvas / PDF
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Outil interne boutique
                  </span>
                </div>
              </div>

              {/* Prototype VR */}
              <div
                className="
                  rounded-2xl border border-cyan-400/20
                  bg-slate-950/40 backdrop-blur-xl
                  p-5 shadow-[0_0_20px_rgba(0,255,255,0.18)]
                  space-y-3 transition-all duration-300
                  hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                  hover:translate-y-[-2px] hover:scale-[1.01]
                "
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-50">
                  <FiSmartphone className="text-cyan-300" />
                  Prototype VR – Téléphone + arme custom
                </h3>
                <p className="text-sm text-cyan-100/85">
                  Prototype de jeu VR dans une salle réelle, où le téléphone
                  sert d&apos;écran (type Google Cardboard) et une arme physique
                  est trackée via microcontrôleur et capteur MPU6050.
                </p>
                <p className="text-xs text-cyan-200/80">
                  Travail sur Unity XR, calibration de la salle, gestion de la
                  distance aux murs, et communication entre Arduino et Unity
                  (HID / clavier / autres pistes).
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Unity XR
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Arduino Pro Micro
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    MPU6050
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Prototype VR
                  </span>
                </div>
              </div>

              {/* Mod Minecraft + script sauvegarde SQL OVH */}
              <div
                className="
                  rounded-2xl border border-cyan-400/20
                  bg-slate-950/40 backdrop-blur-xl
                  p-5 shadow-[0_0_20px_rgba(0,255,255,0.18)]
                  space-y-3 transition-all duration-300
                  hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                  hover:translate-y-[-2px] hover:scale-[1.01]
                "
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-50">
                  <FiDatabase className="text-cyan-300" />
                  Mod Minecraft & scripts serveur
                </h3>
                <p className="text-sm text-cyan-100/85">
                  Création d&apos;un mod Minecraft en Java avec arbre de compétences
                  (PV, armure, etc.) et intégration dans un environnement de
                  jeu existant. En parallèle, mise en place de scripts de
                  sauvegarde SQL pour un serveur OVH.
                </p>
                <p className="text-xs text-cyan-200/80">
                  Scripts d&apos;automatisation pour sauvegarder régulièrement les
                  bases MySQL d&apos;un serveur OVH (mysqldump, compression, envoi
                  vers un stockage externe, cron). Objectif : sécuriser les
                  données de production sans dépendre d&apos;outils tiers.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Java / Modding Minecraft
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Scripts bash
                  </span>
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Sauvegardes SQL OVH
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="pt-4">
            <div
              className="
                rounded-2xl border border-cyan-400/25
                bg-slate-950/60 backdrop-blur-xl
                p-6 shadow-[0_0_25px_rgba(0,255,255,0.25)]
                space-y-3 text-sm
              "
            >
              <p className="text-cyan-100/90">
                Tous ces projets ont un point commun : ils répondent à un besoin
                réel (terrain, technique ou expérimental). Je cherche à garder
                un bon équilibre entre qualité du code, contraintes pratiques
                et possibilités d&apos;évolution.
              </p>
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2 text-sm text-cyan-300
                  hover:text-cyan-100 hover:underline
                "
              >
                Discuter d&apos;un projet ou d&apos;une idée →
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
