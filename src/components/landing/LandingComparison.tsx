import React from 'react';
import { Check, X, Minus, Dumbbell, ShieldCheck } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  workoutLog: string | boolean;
  subscriptionApps: string | boolean;
  notesApp: string | boolean;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Precio y suscripción',
    workoutLog: '100% Gratis sin trampas',
    subscriptionApps: '8€ – 15€ al mes',
    notesApp: 'Gratis',
    highlight: true,
  },
  {
    feature: 'Anuncios y pop-ups entre series',
    workoutLog: 'Cero. Jamás.',
    subscriptionApps: 'Frecuentes / Banners Pro',
    notesApp: 'Ninguno',
    highlight: true,
  },
  {
    feature: 'Cronómetro con audio sin pausar tu música',
    workoutLog: true,
    subscriptionApps: false,
    notesApp: false,
    highlight: true,
  },
  {
    feature: 'Cálculo y radar automático de 1RM',
    workoutLog: true,
    subscriptionApps: 'De pago tras muro',
    notesApp: false,
  },
  {
    feature: '100% Funcional sin internet ni cobertura',
    workoutLog: true,
    subscriptionApps: 'Falla o exige sync',
    notesApp: true,
  },
  {
    feature: 'Diario de ajustes técnicos por ejercicio',
    workoutLog: true,
    subscriptionApps: 'Notas simples',
    notesApp: 'Desordenado',
  },
  {
    feature: 'Exportación completa de datos (JSON libre)',
    workoutLog: true,
    subscriptionApps: false,
    notesApp: false,
  },
  {
    feature: 'Sin inicio de sesión obligatorio',
    workoutLog: true,
    subscriptionApps: false,
    notesApp: true,
  },
];

export const LandingComparison: React.FC = () => {
  return (
    <section id="comparativa" className="py-20 md:py-32 bg-[#0A0A0A] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-2">
            Comparativa Clara
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            ¿Por qué no usar otra app o el bloc de notas?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Comparamos la experiencia real en la sala de pesas. Sin letra pequeña ni rodeos.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[680px] bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-zinc-900/80 border-b border-white/10 p-5 text-sm font-bold text-white items-center">
              <div className="col-span-5 text-zinc-300">Característica</div>
              <div className="col-span-3 text-center text-[#00FF87] flex items-center justify-center gap-1.5 font-black uppercase tracking-wider">
                <Dumbbell className="w-4 h-4 stroke-[2.5]" />
                <span>WorkoutLog</span>
              </div>
              <div className="col-span-2 text-center text-zinc-400">Apps de Pago</div>
              <div className="col-span-2 text-center text-zinc-400">Bloc de Notas</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/5 text-sm">
              {COMPARISON_DATA.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-12 p-4 sm:p-5 items-center transition-colors ${
                    row.highlight ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <div className="col-span-5 text-zinc-200 font-medium">
                    {row.feature}
                  </div>

                  {/* WorkoutLog Column */}
                  <div className="col-span-3 flex items-center justify-center text-center">
                    {typeof row.workoutLog === 'boolean' ? (
                      row.workoutLog ? (
                        <div className="w-7 h-7 rounded-full bg-[#00FF87]/20 text-[#00FF87] flex items-center justify-center">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <X className="w-4 h-4 text-red-400" />
                      )
                    ) : (
                      <span className="font-bold text-[#00FF87] text-xs sm:text-sm">
                        {row.workoutLog}
                      </span>
                    )}
                  </div>

                  {/* Subscription Apps Column */}
                  <div className="col-span-2 flex items-center justify-center text-center">
                    {typeof row.subscriptionApps === 'boolean' ? (
                      row.subscriptionApps ? (
                        <Check className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )
                    ) : (
                      <span className="text-zinc-400 text-xs">{row.subscriptionApps}</span>
                    )}
                  </div>

                  {/* Notes App Column */}
                  <div className="col-span-2 flex items-center justify-center text-center">
                    {typeof row.notesApp === 'boolean' ? (
                      row.notesApp ? (
                        <Check className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )
                    ) : (
                      <span className="text-zinc-400 text-xs">{row.notesApp}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
