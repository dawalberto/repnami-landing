import React from 'react';
import { Download, Play, Shield, Timer, Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface LandingHeroProps {
  onOpenApp: () => void;
  onScrollToInstall: () => void;
  onScrollToDemo: () => void;
  isInstallable: boolean;
  onInstallPwa: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onOpenApp,
  onScrollToInstall,
  onScrollToDemo,
  isInstallable,
  onInstallPwa,
}) => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00FF87]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#00E5FF]/8 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Human unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-4">
              <span>Modo Entrenamiento Puro</span>
              <span aria-hidden="true">·</span>
              <span>100% Offline</span>
              <span aria-hidden="true">·</span>
              <span>Cero Publicidad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-['Space_Grotesk',sans-serif] max-w-2xl text-balance">
              Diseñado para levantar hierro. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] via-[#22c55e] to-[#00E5FF]">
                Cero distracciones.
              </span>{' '}
              Series al milímetro.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal">
              El diario y ejecutor de rutinas definitivo para el gimnasio. Sin suscripciones abusivas de 12€/mes, sin inicios de sesión obligatorios y sin menús lentos. Cronómetro automático con avisos de audio que <strong className="text-white font-medium">no detiene tu música</strong> y cálculo instantáneo de 1RM.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {isInstallable ? (
                <button
                  onClick={onInstallPwa}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-black bg-[#00FF87] hover:bg-[#00e578] shadow-[0_0_25px_rgba(0,255,135,0.4)] transition-all flex items-center justify-center gap-2.5 active:scale-95 whitespace-nowrap"
                >
                  <Download className="w-5 h-5 stroke-[2.5]" />
                  <span>Instalar App Gratis</span>
                </button>
              ) : (
                <button
                  onClick={onScrollToInstall}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-black bg-[#00FF87] hover:bg-[#00e578] shadow-[0_0_25px_rgba(0,255,135,0.4)] transition-all flex items-center justify-center gap-2.5 active:scale-95 whitespace-nowrap"
                >
                  <Download className="w-5 h-5 stroke-[2.5]" />
                  <span>Obtener en Móvil (PWA)</span>
                </button>
              )}

              <button
                onClick={onOpenApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white bg-zinc-800/90 hover:bg-zinc-700/90 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2.5 active:scale-95 whitespace-nowrap"
              >
                <Play className="w-4 h-4 fill-current text-[#00FF87]" />
                <span>Probar WebApp Ahora</span>
              </button>

              <button
                onClick={onScrollToDemo}
                className="w-full sm:w-auto px-4 py-3.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Ver demo táctil</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>
            </div>

            {/* Trust and Key Points Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">0€</div>
                <div className="text-xs text-zinc-400 mt-0.5">Gratis para siempre</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#00FF87] font-mono tabular-nums">100%</div>
                <div className="text-xs text-zinc-400 mt-0.5">Funciona sin internet</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">0</div>
                <div className="text-xs text-zinc-400 mt-0.5">Sin anuncios ni spam</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#00E5FF] font-mono tabular-nums">Ambient</div>
                <div className="text-xs text-zinc-400 mt-0.5">Respeta tu Spotify</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Live Tactile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative neon border frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <img
                  src="/src/assets/images/hero_app_showcase_1791648828209.jpg"
                  alt="WorkoutLog interfaz en smartphone sobre el suelo del gimnasio"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Floating Interactive Sample Card Inside Hero */}
                <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">Sesión Activa: Pierna & Espalda</span>
                    </div>
                    <span className="text-xs font-mono text-[#00FF87] font-bold">14:20 transcurrido</span>
                  </div>

                  <div className="bg-zinc-900/90 border border-white/10 rounded-lg p-2.5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-zinc-400">Sentadilla Trasera · Serie 3 de 4</div>
                      <div className="text-sm font-bold text-white font-mono mt-0.5">140 kg × 8 reps</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-zinc-400 uppercase font-mono">1RM Calculado</div>
                      <div className="text-xs font-extrabold text-[#00FF87] font-mono">177.3 kg (PR)</div>
                    </div>
                  </div>

                  {/* Rest Timer Visual simulation */}
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-zinc-300 font-mono">
                      <Timer className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>Descanso: <strong className="text-white">01:30</strong></span>
                    </div>
                    <span className="text-[11px] text-zinc-400">Audio listo · No corta música</span>
                  </div>
                </div>
              </div>

              {/* High-impact floating badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#00FF87] text-black font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PWA Nativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
