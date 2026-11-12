import React from 'react';
import { Dumbbell, Download, Play, Heart } from 'lucide-react';

interface LandingFooterProps {
  onOpenApp: () => void;
  onScrollToTop: () => void;
  onScrollToSection: (id: string) => void;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({
  onOpenApp,
  onScrollToTop,
  onScrollToSection,
}) => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00FF87] text-black flex items-center justify-center font-black">
              <Dumbbell className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-white text-lg tracking-wider uppercase font-['Space_Grotesk',sans-serif]">
                Workout<span className="text-[#00FF87]">Log</span>
              </span>
              <p className="text-xs text-zinc-500">Planificador y ejecutor de rutinas de fuerza</p>
            </div>
          </div>

          {/* Nav links mirror */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
            <button
              onClick={() => onScrollToSection('funcionalidades')}
              className="hover:text-white transition-colors"
            >
              Características
            </button>
            <button
              onClick={() => onScrollToSection('demo-interactiva')}
              className="hover:text-white transition-colors"
            >
              Demo en vivo
            </button>
            <button
              onClick={() => onScrollToSection('historia')}
              className="hover:text-white transition-colors"
            >
              Historia
            </button>
            <button
              onClick={() => onScrollToSection('comparativa')}
              className="hover:text-white transition-colors"
            >
              Comparativa
            </button>
            <button
              onClick={() => onScrollToSection('descargar')}
              className="hover:text-white transition-colors"
            >
              Instalación
            </button>
            <button
              onClick={() => onScrollToSection('faq')}
              className="hover:text-white transition-colors"
            >
              Preguntas
            </button>
          </div>

          {/* Quick Action */}
          <button
            onClick={onOpenApp}
            className="px-4 py-2 text-xs font-bold text-black bg-[#00FF87] hover:bg-[#00e578] rounded-xl transition-all flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Abrir WebApp</span>
          </button>
        </div>

        {/* Bottom copyright & open web commitment */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <p>© {new Date().getFullYear()} WorkoutLog. Creado con foco en el entrenamiento natural de fuerza.</p>
          <div className="flex items-center gap-1 text-zinc-500">
            <span>100% Offline-First</span>
            <span>·</span>
            <span>Progressive Web App</span>
            <span>·</span>
            <span>Privacidad local garantizada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
