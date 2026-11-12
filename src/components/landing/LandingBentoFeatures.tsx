import React from 'react';
import {
  Activity,
  CheckCircle,
  Database,
  Dumbbell,
  FileSpreadsheet,
  Flame,
  HardDriveDownload,
  Lock,
  Music2,
  Repeat,
  Sparkles,
  Timer,
  TrendingUp,
  Volume2,
  WifiOff,
} from 'lucide-react';

export const LandingBentoFeatures: React.FC = () => {
  return (
    <section id="funcionalidades" className="py-20 md:py-32 bg-[#0A0A0A] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-2">
            Puntos Fuertes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Todo lo que necesitas para rendir. <br />
            Nada de lo que te sobra.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Cada herramienta fue diseñada para resolver los dolores de cabeza reales de los levantadores en el gimnasio.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Card 1 (Span 2): Live Training Execution Mode */}
          <div className="lg:col-span-2 rounded-2xl bg-[#141416] border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#00FF87]/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FF87]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00FF87]/15 text-[#00FF87] flex items-center justify-center border border-[#00FF87]/30">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                  Modo Sesión Activa
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Checklist táctil para dedos con magnesio
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
                Ejecuta tu rutina serie a serie con botones gigantes y sensibles. Marca tus repeticiones efectivas, visualiza el volumen total levantado en kilogramos y controla la duración en directo.
              </p>
            </div>

            {/* Interactive Preview Mockup Strip */}
            <div className="mt-8 bg-zinc-950/80 rounded-xl border border-white/10 p-4 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>SERIE 1 · PRESS MILITAR</span>
                <span className="text-[#00FF87] font-bold">4 × 65 kg · RPE 8.5</span>
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                <div className="bg-[#00FF87] h-full w-3/4 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                <span>Progreso: 3 de 4 series</span>
                <span className="text-white font-mono font-medium">Volumen acumulado: 3.480 kg</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 (Span 1): Smart Ambient Rest Timer */}
          <div className="rounded-2xl bg-[#141416] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#00E5FF]/40 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/src/assets/images/feature_smart_timer_1791648839210.jpg"
                alt="Temporizador digital en el gimnasio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-[#00E5FF] font-bold flex items-center gap-1.5">
                <Timer className="w-3.5 h-3.5" />
                <span>Timer inteligente</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white">
                Pitidos suaves sin pausar tu música
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Utiliza la API de audio ambiental para sonar con 3 tonos suaves al terminar el descanso, <strong className="text-white">sin silenciar ni pausar jamás Spotify</strong>. Funciona incluso si bloqueas la pantalla.
              </p>
            </div>
          </div>

          {/* Bento Card 3 (Span 1): Automated 1RM Radar */}
          <div className="rounded-2xl bg-[#141416] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#00FF87]/40 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/src/assets/images/feature_pr_strength_1791648850536.jpg"
                alt="Barra olímpica y discos para récord de fuerza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-[#00FF87] font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span>Radar de RMs</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white">
                Cálculo instantáneo de récords
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Aplica las fórmulas científicas Brzycki y Epley para detectar nuevos récords personales (PR) al completar series pesadas y los archiva con su fecha exacta.
              </p>
            </div>
          </div>

          {/* Bento Card 4 (Span 2): Exercise Diary & Technique Notes */}
          <div className="lg:col-span-2 rounded-2xl bg-[#141416] border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#00E5FF]/40 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/15 text-[#00E5FF] flex items-center justify-center border border-[#00E5FF]/30">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                  Diario Técnico & Memoria
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                El diario del ejercicio: olvídate de adivinar ajustes de máquinas
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
                ¿Qué clavija usas en el jalón al pecho? ¿Sentiste molestia en el manguito rotador con agarre ancho? Guarda notas técnicas por ejercicio para recordar sensaciones exactas y progresar sin dolor.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-zinc-950/70 border border-white/10 rounded-xl p-3 text-xs">
                <div className="font-mono text-zinc-400 mb-1">Nota técnica guardada:</div>
                <div className="text-zinc-200">"Prensa 45º: Colocar pies a mitad de plataforma para enfocar cuádriceps sin doblar lumbares."</div>
              </div>
              <div className="bg-zinc-950/70 border border-white/10 rounded-xl p-3 text-xs">
                <div className="font-mono text-zinc-400 mb-1">Ajuste de máquina:</div>
                <div className="text-zinc-200">"Polea alta: Altura nivel 6, agarre neutro cerrado. La semana pasada 55kg se movieron fácil."</div>
              </div>
            </div>
          </div>

          {/* Bento Card 5 (Span 1): 100% Offline & Private */}
          <div className="rounded-2xl bg-[#141416] border border-white/10 p-7 flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30 mb-4">
                <WifiOff className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                100% Offline en sótanos sin cobertura
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                No necesitas 4G, 5G ni WiFi. Todo se procesa y guarda localmente en la base de datos de tu dispositivo (IndexedDB).
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>Cero rastreo o venta de datos</span>
            </div>
          </div>

          {/* Bento Card 6 (Span 2): Full Data Portability & JSON Backups */}
          <div className="lg:col-span-2 rounded-2xl bg-[#141416] border border-white/10 p-7 sm:p-8 flex flex-col justify-between group hover:border-[#00FF87]/40 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00FF87]/15 text-[#00FF87] flex items-center justify-center border border-[#00FF87]/30 mb-4">
                  <HardDriveDownload className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Copias de seguridad JSON: tus datos son tuyos
                </h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
                  Exporta e importa tus ejercicios, rutinas y récords en un archivo limpio con un solo clic. Si cambias de teléfono o de navegador, recuperas todo en 2 segundos.
                </p>
              </div>

              <div className="shrink-0 bg-zinc-950 border border-white/10 rounded-xl p-4 font-mono text-xs text-zinc-300">
                <div className="text-[#00FF87] font-bold mb-1">backup-workoutlog.json</div>
                <div className="text-zinc-500">· 100% Abierto</div>
                <div className="text-zinc-500">· Sin bloqueo propietario</div>
                <div className="text-zinc-500">· Importable en 1 click</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
