"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiGrid, FiUser, FiMail } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Accueil", icon: FiHome },
  { href: "/projects", label: "Projets", icon: FiGrid },
  { href: "/about", label: "À propos", icon: FiUser },
  { href: "/contact", label: "Contact", icon: FiMail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP NAVBAR (top) */}
      <header className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <nav
          className="
            px-6 py-3 rounded-2xl
            bg-slate-900/60 backdrop-blur-2xl
            border border-cyan-400/20
            shadow-[0_0_25px_rgba(0,255,255,0.15)]
          "
        >
          <ul className="flex items-center gap-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      group flex items-center gap-3
                      px-4 py-2 rounded-xl
                      border
                      ${
                        isActive
                          ? "border-cyan-400/60 bg-cyan-500/15"
                          : "border-transparent bg-white/5"
                      }
                      hover:bg-cyan-500/10 hover:border-cyan-400/40
                      transition-all duration-300
                      hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]
                      hover:scale-[1.05]
                    `}
                  >
                    <span className="text-2xl text-cyan-300">
                      <Icon />
                    </span>

                    <span className="text-sm font-semibold text-cyan-100">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* MOBILE NAVBAR (bottom) */}
      <footer className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
        <nav
          className="
            mx-auto mb-3 px-6 py-2
            bg-slate-900/70 backdrop-blur-2xl
            border border-cyan-400/20
            shadow-[0_0_25px_rgba(0,255,255,0.35)]
            rounded-2xl
          "
        >
          <ul className="flex justify-between items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      flex flex-col items-center justify-center
                      px-3 py-1
                      ${
                        isActive
                          ? "text-cyan-400"
                          : "text-cyan-200/80"
                      }
                    `}
                  >
                    <span className="text-2xl">
                      <Icon />
                    </span>
                    <span className="text-[10px] mt-1">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </footer>
    </>
  );
}
