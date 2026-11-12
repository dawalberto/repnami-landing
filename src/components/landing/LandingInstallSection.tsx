import React, { useState } from 'react';
import { Download, Play, Smartphone, Apple, Chrome, Share2, PlusSquare, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface LandingInstallSectionProps {
  onOpenApp: () => void;
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  onInstallPwa: () => void;
}

export const LandingInstallSection: React.FC<LandingInstallSectionProps> = ({
  onOpenApp,
  isInstallable,
  isInstalled,
  isIOS,
  onInstallPwa,
}) => {
  const [activePlatform, setActivePlatform] = useState<'ios' | 'android' | 'desktop'>('ios');

  return (
    <section id="descargar" className="py-20 md:py-32 bg-[#121214] border-b border-white/5 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00FF87]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-2">
            Instalación Inmediata
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Llévatela al gimnasio en 10 segundos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            WorkoutLog es una Progressive Web App (PWA) de última generación. No ocupa gigas en la memoria ni exige descargas lentas de tiendas de aplicaciones. Se instala al instante.
          </p>
        </div>

        {/* High Conversion Action Box */}
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Direct Instant Action */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00FF87] bg-[#00FF87]/10 px-3 py-1 rounded-full border border-[#00FF87]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sin descargas pesadas · PWA Standalone</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Instala o abre en cualquier dispositivo
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Tus rutinas, catálogo de ejercicios y récords guardados localmente. Al añadirla a tu pantalla de inicio, se ejecuta a pantalla completa como una aplicación 100% nativa.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {isInstallable ? (
                  <button
                    onClick={onInstallPwa}
                    className="px-6 py-4 rounded-xl font-black text-black bg-[#00FF87] hover:bg-[#00e578] shadow-[0_0_25px_rgba(0,255,135,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>Instalar Aplicación Ahora</span>
                  </button>
                ) : (
                  <button
                    onClick={onOpenApp}
                    className="px-6 py-4 rounded-xl font-black text-black bg-[#00FF87] hover:bg-[#00e578] shadow-[0_0_25px_rgba(0,255,135,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span>Lanzar WebApp en Pantalla Completa</span>
                  </button>
                )}

                <button
                  onClick={onOpenApp}
                  className="px-5 py-4 rounded-xl font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Probar sin instalar</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </button>
              </div>

              {isInstalled && (
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00FF87] pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>WorkoutLog ya está instalado en este dispositivo.</span>
                </div>
              )}
            </div>

            {/* Step-by-step Installation Guide Card */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-5 sm:p-6">
              {/* Platform Switcher */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <button
                  onClick={() => setActivePlatform('ios')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    activePlatform === 'ios'
                      ? 'bg-white text-black'
                      : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                  }`}
                >
                  <Apple className="w-3.5 h-3.5" />
                  <span>iPhone / iPad</span>
                </button>

                <button
                  onClick={() => setActivePlatform('android')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    activePlatform === 'android'
                      ? 'bg-[#00FF87] text-black'
                      : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android</span>
                </button>

                <button
                  onClick={() => setActivePlatform('desktop')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    activePlatform === 'desktop'
                      ? 'bg-[#00E5FF] text-black'
                      : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                  }`}
                >
                  <Chrome className="w-3.5 h-3.5" />
                  <span>PC / Mac</span>
                </button>
              </div>

              {/* Instructions based on platform */}
              {activePlatform === 'ios' && (
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      1
                    </div>
                    <div className="text-zinc-300">
                      Abre este enlace en <strong className="text-white">Safari</strong> en tu iPhone.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      2
                    </div>
                    <div className="text-zinc-300 flex items-center gap-1.5 flex-wrap">
                      <span>Toca el icono de</span>
                      <strong className="text-white inline-flex items-center gap-1 bg-zinc-800 px-1.5 py-0.5 rounded">
                        <Share2 className="w-3 h-3 text-[#00E5FF]" /> Compartir
                      </strong>
                      <span>en la barra inferior.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      3
                    </div>
                    <div className="text-zinc-300">
                      Selecciona <strong className="text-white">«Añadir a pantalla de inicio»</strong> y pulsa Añadir.
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-lg text-zinc-400 text-[11px] border border-white/5 mt-2">
                    ✓ Aparecerá un icono en tu pantalla y se abrirá sin barra de navegación de Safari.
                  </div>
                </div>
              )}

              {activePlatform === 'android' && (
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      1
                    </div>
                    <div className="text-zinc-300">
                      Abre este enlace en <strong className="text-white">Google Chrome</strong>.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      2
                    </div>
                    <div className="text-zinc-300">
                      Toca el menú de <strong className="text-white">tres puntos (⋮)</strong> en la esquina superior.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      3
                    </div>
                    <div className="text-zinc-300">
                      Pulsa en <strong className="text-white">«Instalar aplicación»</strong> o «Añadir a pantalla de inicio».
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-lg text-zinc-400 text-[11px] border border-white/5 mt-2">
                    ✓ Se sincroniza con tu lanzador de aplicaciones y tiene icono oficial en alta resolución.
                  </div>
                </div>
              )}

              {activePlatform === 'desktop' && (
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      1
                    </div>
                    <div className="text-zinc-300">
                      En Chrome, Edge o Brave en tu ordenador, pulsa el icono de <strong className="text-white">Instalar</strong> a la derecha de la barra de direcciones.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 font-bold text-white flex items-center justify-center shrink-0 font-mono">
                      2
                    </div>
                    <div className="text-zinc-300">
                      Disfruta de WorkoutLog como una aplicación de escritorio independiente con atajos de teclado y ventana limpia.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
