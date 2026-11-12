import React, { useState } from 'react';
import { Play, Video, Smartphone, Sparkles, CheckCircle2, ChevronRight, Layers, FileText, Flame, Timer } from 'lucide-react';

interface ShowcaseTab {
  id: string;
  label: string;
  title: string;
  description: string;
  tag: string;
  videoPlaceholderNotice: string;
  previewType: 'workout' | 'catalog' | 'rm' | 'diary';
}

const TABS: ShowcaseTab[] = [
  {
    id: 'workout',
    label: 'Sesión en Vivo',
    title: 'Flujo de ejecución en vivo con checklist y cronómetro',
    description: 'Comprueba el diseño ultra-rápido de series. Un toque marca la repetición completada, calcula el tonelaje acumulado e inicia la cuenta atrás sin desviar tu atención.',
    tag: 'Entrenamiento en vivo',
    videoPlaceholderNotice: 'Coloca aquí tu clip: public/assets/videos/demo_workout_live.mp4',
    previewType: 'workout',
  },
  {
    id: 'catalog',
    label: 'Catálogo & Técnica',
    title: 'Biblioteca de ejercicios con soporte para vídeos y técnica',
    description: 'Catálogo ordenado por grupos musculares (Pecho, Espalda, Piernas, Hombro, Brazos). Cada ejercicio incluye soporte para previews de vídeo de YouTube o archivos locales.',
    tag: 'Catálogo de ejercicios',
    videoPlaceholderNotice: 'Coloca aquí tu clip: public/assets/videos/demo_catalog.mp4',
    previewType: 'catalog',
  },
  {
    id: 'rm',
    label: 'Radar de 1RM',
    title: 'Historial y evolución de tu fuerza máxima',
    description: 'Gráficos e insignias automáticas con tus repeticiones máximas. WorkoutLog calcula tu 1RM estimado en cada entrenamiento y te alerta cuando superas tus marcas.',
    tag: 'Detección de récords',
    videoPlaceholderNotice: 'Coloca aquí tu clip: public/assets/videos/demo_rm_radar.mp4',
    previewType: 'rm',
  },
  {
    id: 'diary',
    label: 'Diario de Notas',
    title: 'Anotaciones técnicas y sensaciones por ejercicio',
    description: 'Registra ajustes de altura, ángulos de banco, sensaciones de articulaciones y comentarios para la próxima sesión sin salir del flujo de entrenamiento.',
    tag: 'Notas de progresión',
    videoPlaceholderNotice: 'Coloca aquí tu clip: public/assets/videos/demo_diary.mp4',
    previewType: 'diary',
  },
];

export const LandingMediaShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('workout');
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section id="capturas" className="py-20 md:py-32 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-2">
            Capturas y Vídeos Reales
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Una interfaz oscura, táctil y sin distracciones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Explora las pantallas principales de la aplicación. Diseñadas para una lectura instantánea bajo las luces del gimnasio.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="p-1.5 bg-zinc-900 border border-white/10 rounded-xl flex items-center gap-1">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#00FF87] text-black shadow-[0_0_15px_rgba(0,255,135,0.3)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Showcase Display */}
        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Information Side */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
                {activeTab.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 leading-tight">
                {activeTab.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {activeTab.description}
              </p>

              {/* Developer / User Slot Callout */}
              <div className="mt-8 p-4 rounded-xl bg-zinc-900/90 border border-dashed border-white/20 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#00FF87] font-bold mb-1">
                  <Video className="w-4 h-4" />
                  <span>Espacio listo para tu clip o captura:</span>
                </div>
                <div className="text-zinc-400 break-all">{activeTab.videoPlaceholderNotice}</div>
              </div>
            </div>

            {/* Media / Mockup Visual Preview Side */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl border border-white/15 bg-zinc-900 p-4 sm:p-6 shadow-inner overflow-hidden">
                {/* Simulated Phone / Tablet Screen inside */}
                <div className="rounded-xl border border-white/10 bg-[#0D0D0D] p-5 shadow-2xl min-h-[380px] flex flex-col justify-between">
                  {/* Mock Screen Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="font-bold text-white uppercase tracking-wider font-mono">
                      WorkoutLog App
                    </span>
                    <span className="text-[#00FF87] font-mono">En vivo · 60 FPS</span>
                  </div>

                  {/* Render based on selected preview type */}
                  {activeTab.previewType === 'workout' && (
                    <div className="py-4 space-y-3">
                      <div className="bg-zinc-900 border border-[#00FF87]/30 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-white">Press Inclinado con Mancuernas</span>
                          <span className="text-xs font-mono text-[#00FF87] bg-[#00FF87]/10 px-2 py-0.5 rounded">Serie 2/3</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono my-3">
                          <div className="bg-zinc-950 p-2 rounded">
                            <div className="text-zinc-500 text-[10px]">PESO</div>
                            <div className="text-white font-bold text-sm">34 kg</div>
                          </div>
                          <div className="bg-zinc-950 p-2 rounded">
                            <div className="text-zinc-500 text-[10px]">REPS</div>
                            <div className="text-white font-bold text-sm">10 reps</div>
                          </div>
                          <div className="bg-zinc-950 p-2 rounded">
                            <div className="text-zinc-500 text-[10px]">RPE</div>
                            <div className="text-[#00E5FF] font-bold text-sm">8.5</div>
                          </div>
                        </div>
                        <div className="w-full py-2.5 rounded-lg bg-[#00FF87] text-black font-extrabold text-xs text-center uppercase tracking-wider shadow">
                          ✓ Completar Serie (Descanso 02:00)
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-white/5 text-xs">
                        <span className="text-zinc-400">Próximo: Aperturas en polea</span>
                        <span className="text-zinc-500 font-mono">3 series × 12 reps</span>
                      </div>
                    </div>
                  )}

                  {activeTab.previewType === 'catalog' && (
                    <div className="py-4 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-zinc-900 border border-white/10 rounded-xl p-3">
                          <div className="h-20 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 mb-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                            <Play className="w-6 h-6 text-[#00FF87]" />
                          </div>
                          <div className="text-xs font-bold text-white">Dominadas Pronas</div>
                          <div className="text-[10px] text-[#00FF87] mt-0.5">Espalda · Con vídeo</div>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 rounded-xl p-3">
                          <div className="h-20 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 mb-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                            <Play className="w-6 h-6 text-[#00FF87]" />
                          </div>
                          <div className="text-xs font-bold text-white">Peso Muerto Rumano</div>
                          <div className="text-[10px] text-[#00FF87] mt-0.5">Isquios / Glúteo · Vídeo</div>
                        </div>
                      </div>
                      <div className="p-3 bg-zinc-900/50 rounded-lg border border-white/5 text-xs text-zinc-400 text-center">
                        +80 ejercicios precargados y añade tus propios ejercicios ilimitados
                      </div>
                    </div>
                  )}

                  {activeTab.previewType === 'rm' && (
                    <div className="py-4 space-y-3">
                      <div className="bg-zinc-900 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Flame className="w-4 h-4 text-[#00FF87]" />
                            <span className="text-xs font-bold text-white">Press de Banca · 1RM Histórico</span>
                          </div>
                          <span className="text-xs font-bold font-mono text-[#00FF87]">132.5 kg</span>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-xs font-mono text-zinc-400">
                            <span>120 kg × 3 reps</span>
                            <span className="text-white">1RM: 130.0 kg</span>
                          </div>
                          <div className="flex justify-between text-xs font-mono text-zinc-400">
                            <span>115 kg × 5 reps (PR)</span>
                            <span className="text-[#00FF87] font-bold">1RM: 132.5 kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-zinc-400 text-center font-mono">
                        Fórmulas combinadas: Brzycki, Epley y Lander
                      </div>
                    </div>
                  )}

                  {activeTab.previewType === 'diary' && (
                    <div className="py-4 space-y-2.5">
                      <div className="bg-zinc-900 border border-white/10 rounded-xl p-3.5 text-xs">
                        <div className="flex items-center justify-between text-zinc-400 font-mono mb-1">
                          <span>Sentadilla Búlgara con Mancuernas</span>
                          <span>Hace 4 días</span>
                        </div>
                        <p className="text-zinc-200 mt-1">
                          "Colocar el banco a 40cm de altura para evitar tensión en rodilla. Mancuernas de 26kg completadas con buen ritmo."
                        </p>
                      </div>
                      <div className="bg-zinc-900 border border-white/10 rounded-xl p-3.5 text-xs">
                        <div className="flex items-center justify-between text-zinc-400 font-mono mb-1">
                          <span>Remo con Barra en Punta</span>
                          <span>Hace 6 días</span>
                        </div>
                        <p className="text-zinc-200 mt-1">
                          "Agarre neutro con barra T. Carga 70kg limpia. Subir a 72.5kg en la próxima sesión."
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Mock Screen Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span>Modo Standalone / PWA</span>
                    <span className="text-[#00FF87]">✓ Sin latencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
