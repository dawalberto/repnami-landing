import React from 'react';
import { Dumbbell, Download, Play, ShieldCheck, Zap } from 'lucide-react';

interface LandingNavbarProps {
  onOpenApp: () => void;
  onScrollToInstall: () => void;
  onScrollToSection: (id: string) => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({
  onOpenApp,
  onScrollToInstall,
  onScrollToSection,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0D0D0D]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-lg font-black tracking-wider text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#00FF87] text-black flex items-center justify-center font-black shadow-[0_0_15px_rgba(0,255,135,0.4)] group-hover:scale-105 transition-transform">
            <Dumbbell className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-extrabold uppercase text-white font-['Space_Grotesk',sans-serif]">
            Workout<span className="text-[#00FF87]">Log</span>
          </span>
        </a>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <button
            onClick={() => onScrollToSection('funcionalidades')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Características
          </button>
          <button
            onClick={() => onScrollToSection('demo-interactiva')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Demo en vivo
          </button>
          <button
            onClick={() => onScrollToSection('historia')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Por qué existe
          </button>
          <button
            onClick={() => onScrollToSection('comparativa')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Comparativa
          </button>
          <button
            onClick={() => onScrollToSection('faq')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Preguntas
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenApp}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-black bg-[#00FF87] hover:bg-[#00e578] rounded-xl shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all transform active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Abrir WebApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};
