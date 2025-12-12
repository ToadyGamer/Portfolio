"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { FiSend, FiMail, FiGithub, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#020A10] via-[#04141F] to-[#03141E] text-cyan-100 pt-24 pb-16">
        {/* halos */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-10 left-1/3 h-80 w-80 rounded-full bg-teal-400/25 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
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
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-50 flex items-center gap-2">
              <FiSend className="text-cyan-300" />
              Travailler ensemble ou discuter d&apos;un projet
            </h1>
            <p className="text-sm md:text-base text-cyan-100/80 max-w-3xl">
              Je suis intéressé par des projets concrets : outils métiers,
              plateformes web, jeux, intégration technique (API, BDD, scripts
              serveur). Si ton projet mélange logique métier et technique, on
              peut en parler.
            </p>
          </section>

          {/* CONTACT ONLY (no form) */}
          <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {/* MESSAGE SIMPLE */}
            <div
              className="
                rounded-3xl border border-cyan-400/20
                bg-slate-950/70 backdrop-blur-xl
                p-6 md:p-7
                shadow-[0_0_25px_rgba(0,255,255,0.18)]
                space-y-4
              "
            >
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-50">
                Me contacter
              </h2>

              <p className="text-sm text-cyan-100/80 leading-relaxed">
                Pour une question, une proposition ou une collaboration, contacte-moi
                directement par email.
              </p>

              <p className="text-sm text-cyan-100/80">
                Je lis chaque message et je réponds généralement sous{" "}
                <span className="text-cyan-300 font-semibold">24 à 48h</span>. 🙂🔥
              </p>

              <div className="h-px w-full bg-cyan-400/10" />
            </div>

            {/* INFOS DE CONTACT */}
            <div
              className="
                rounded-3xl border border-cyan-400/20
                bg-slate-950/70 backdrop-blur-xl
                p-6 md:p-7
                shadow-[0_0_25px_rgba(0,255,255,0.18)]
                space-y-5 text-sm
              "
            >
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-50">
                Mes informations
              </h2>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                      mt-0.5 flex h-9 w-9 items-center justify-center
                      rounded-xl border border-cyan-400/30
                      bg-cyan-500/10
                    "
                  >
                    <FiMail className="text-cyan-300" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">
                      Email
                    </p>
                    <a
                      href="mailto:floriancastellier@gmail.com"
                      className="text-sm text-cyan-100 hover:text-cyan-200 hover:underline break-all"
                    >
                      floriancastellier@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                      mt-0.5 flex h-9 w-9 items-center justify-center
                      rounded-xl border border-cyan-400/30
                      bg-cyan-500/10
                    "
                  >
                    <FiGithub className="text-cyan-300" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/ToadyGamer"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-cyan-100 hover:text-cyan-200 hover:underline"
                    >
                      ToadyGamer
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                      mt-0.5 flex h-9 w-9 items-center justify-center
                      rounded-xl border border-cyan-400/30
                      bg-cyan-500/10
                    "
                  >
                    <FiMapPin className="text-cyan-300" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">
                      Basé en
                    </p>
                    <p className="text-sm text-cyan-100/85">
                      France – Rhône-Alpes.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="
                  mt-4 rounded-2xl border border-cyan-400/25
                  bg-slate-950/80 px-4 py-4
                  text-xs text-cyan-100/80 space-y-2
                "
              >
                <p className="font-semibold text-cyan-50">
                  Types de projets qui m&apos;intéressent :
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Outils métiers / ERP / dashboards internes</li>
                  <li>Applications web avec vraie logique métier</li>
                  <li>Jeux / prototypes Unity avec un peu de complexité</li>
                  <li>Intégration API, scripts serveur, automatisations</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
