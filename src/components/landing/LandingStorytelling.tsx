import React from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, Dumbbell, Sparkles, VolumeX, Zap } from 'lucide-react';

export const LandingStorytelling: React.FC = () => {
  return (
    <section id="historia" className="py-20 md:py-32 bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-3">
            <span>Nacida en la sala de pesas</span>
            <span aria-hidden="true">·</span>
            <span>Historia y Filosofía</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-['Space_Grotesk',sans-serif]">
            Entrenar pesado ya es bastante duro. <br />
            Tu teléfono no debería ser un estorbo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Hicimos WorkoutLog porque estábamos hartos de las aplicaciones de fitness modernas: caras, lentas y diseñadas para retener tu atención en lugar de ayudarte a levantar hierro.
          </p>
        </div>

        {/* Narrative Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase: Documentary Gym Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl group">
              <img
                src="/src/assets/images/story_athlete_training_1791648860437.jpg"
                alt="Atleta descansando entre series en el gimnasio con WorkoutLog"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#00FF87] font-bold">
                  Sin pérdidas de tiempo
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  "Un toque rápido con magnesio en las manos y te olvidas del teléfono hasta que suena el pitido."
                </p>
              </div>
            </div>
          </div>

          {/* Chapters & Story Progression */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            {/* Act 1 */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    01. El calvario habitual: anuncios y menús laberínticos
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    Terminas una serie extenuante de sentadilla libre a RPE 9. Tienes 3 minutos antes de la siguiente. Desbloqueas el móvil y te encuentras un banner emergente: <em className="text-zinc-300">«¡Desbloquea el análisis de hipertrofia por 11,99€ al mes!»</em>. Entre descartar pop-ups y buscar la serie, se te pasa el descanso y tu música en Spotify se detiene por el reproductor de la app.
                  </p>
                </div>
              </div>
            </div>

            {/* Act 2 */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-[#00FF87]/20 shadow-[0_0_30px_rgba(0,255,135,0.05)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00FF87]/15 text-[#00FF87] flex items-center justify-center shrink-0 border border-[#00FF87]/30">
                  <Zap className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    02. La experiencia WorkoutLog: un toque táctil y descanso automático
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    Un botón gigante, pensado para dedos cansados. Lo pulsas, la serie se marca en verde y el temporizador arranca de fondo. Nuestro sistema de audio inteligente emite 3 tonos discretos al terminar <strong className="text-white">sin pausar jamás tu podcast o playlist</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Act 3 */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/15 text-[#00E5FF] flex items-center justify-center shrink-0 border border-[#00E5FF]/30">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    03. Sobrecarga progresiva garantizada sesión tras sesión
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    Sabes exactamente qué peso moviste hace 7 días, qué sensaciones tuviste y a qué altura ajustaste el banco. Si bates tu récord de 1RM, el radar te lo avisa con una insignia. Sin hojas de cálculo que no cargan y sin perder tiempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
