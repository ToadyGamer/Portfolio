"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import {
  FiUser,
  FiCode,
  FiCpu,
  FiLayers,
  FiTool,
  FiArrowDown,
} from "react-icons/fi";
import Image from "next/image";

const timeline = [
  {
    title: "Phone Relax – Développeur & Technicien",
    subtitle:
      "Développement complet d’un ERP métier + réparations téléphones, PC, consoles, trottinettes et diagnostics avancés.",
    image: "/images/phonerelax_picture.png",
    tech: ["Next.js", "React", "Node.js", "MySQL", "TailwindCSS"],
    side: "left",
    icon: <FiCpu />,
  },
  {
    title: "Licence RPIS – ISITECH Lyon",
    subtitle:
      "Gestion de projet, architecture applicative, développement métier, travail en équipe et mise en production.",
    image: "/images/isitech_picture.png",
    tech: ["Gestion projet", "Méthodes Agiles", "UML", "Java", "PHP", "SQL", "APIs", "Docker", "Unity", "C#"],
    side: "right",
    icon: <FiLayers />,
  },
  {
    title: "Lidl – Équipier polyvalent",
    subtitle:
      "Rigueur, autonomie, gestion de caisse, rythme élevé, responsabilité et formation de nouveaux équipiers.",
    image: "/images/lidl_picture.png",
    tech: ["Rigueur", "Organisation", "Relation client", "Formateur"],
    side: "left",
    icon: <FiTool />,
  },
  {
    title: "BTS SIO SLAM – Vernon",
    subtitle:
      "Apprentissage poussé du développement logiciel, POO, bases de données, API et projets encadrés.",
    image: "/images/saintadjutor_picture.png",
    tech: ["Java", "PHP", "SQL", "HTML/CSS", "Gestion BDD", "APIs", "Docker"],
    side: "right",
    icon: <FiCode />,
  },
  {
    title: "Bac S – Spécialité Informatique (Gisors)",
    subtitle:
      "Premiers projets, premières lignes de code, découverte des logiques informatiques.",
    image: "/images/louisemichel_picture.png",
    tech: ["Informatique", "Logique", "Sciences"],
    side: "left",
    icon: <FiCode />,
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#030813] via-[#071424] to-[#0A1C32] text-cyan-100 pt-24 pb-16">
        {/* halos */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-12 left-1/4 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
        </div>

        <div
          className={`
            relative z-10 container mx-auto px-6 space-y-10
            transition-all duration-700
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {/* HEADER */}
          <section className="space-y-4">
            <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase">
              À propos
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-50 flex items-center gap-2">
              <FiUser className="text-cyan-300" />
              Qui je suis & comment je travaille
            </h1>
            <p className="text-sm md:text-base text-cyan-100/80 max-w-3xl">
              Je construis des outils utilisés dans la vraie vie : ERP métier,
              applications web, scripts serveur, jeux Unity. Voici mon parcours,
              du plus récent au plus ancien.
            </p>
          </section>

          {/* TIMELINE */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-50">
              Mon parcours
            </h2>

            <div className="relative mt-4">
              {/* TRAIT + FLÈCHE */}
              <div className="hidden md:flex flex-col items-center absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                <FiArrowDown className="rotate-180 text-cyan-300 text-2xl mb-2 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]" />
                <div className="w-px flex-1 bg-gradient-to-b from-cyan-400/70 via-cyan-400/40 to-cyan-400/20" />
              </div>

              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <div key={index} className="relative md:py-4">
                    {/* POINT */}
                    <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2">
                      <div className="h-3 w-3 rounded-full bg-cyan-400 border border-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    </div>

                    {/* CARD */}
                    <div
                      className={`md:w-1/2 ${
                        item.side === "left"
                          ? "md:pr-10 md:text-right"
                          : "md:ml-auto md:pl-10 md:text-left"
                      }`}
                    >
                      <div
                        className="
                          relative rounded-2xl border border-cyan-400/20
                          bg-slate-950/60 backdrop-blur-xl
                          p-5 shadow-[0_0_20px_rgba(0,255,255,0.15)]
                          transition-all duration-300
                          hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                          hover:translate-y-[-2px]
                          space-y-4
                        "
                      >
                        {/* IMAGE */}
                        <div className="relative h-32 w-full overflow-hidden rounded-xl">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover opacity-90"
                          />
                        </div>

                        {/* TITRE */}
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-50">
                          <span className="text-cyan-300 text-xl">
                            {item.icon}
                          </span>
                          {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-sm text-cyan-100/85">
                          {item.subtitle}
                        </p>

                        {/* TECHNO */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.tech.map((t, i) => (
                            <span
                              key={i}
                              className="
                                text-[11px] px-2 py-1 rounded-md
                                bg-cyan-500/10 border border-cyan-400/20
                                text-cyan-200
                              "
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ligne mobile */}
              <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/70 via-cyan-400/40 to-cyan-400/20" />
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
