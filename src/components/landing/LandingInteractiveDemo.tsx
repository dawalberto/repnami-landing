import React, { useState, useEffect, useRef } from 'react';
import { Check, Flame, Play, Plus, RotateCcw, Volume2, VolumeX, Zap, Timer } from 'lucide-react';
import { playTimerFinishBeep, triggerTimerVibration } from '../../utils/audioBeep';

export const LandingInteractiveDemo: React.FC = () => {
  const [weight, setWeight] = useState(100);
  const [reps, setReps] = useState(8);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [completedSets, setCompletedSets] = useState<number[]>([1]); // Set 1 is already checked
  const [isResting, setIsResting] = useState(false);
  const [restSecondsLeft, setRestSecondsLeft] = useState(90);
  const [showPrToast, setShowPrToast] = useState(false);

  const timerRef = useRef<any>(null);

  // Real Brzycki 1RM formula calculation
  const calculated1RM = reps > 0 && reps < 37
    ? Math.round(weight * (36 / (37 - reps)) * 10) / 10
    : weight;

  const totalVolume = completedSets.length * weight * reps;

  // Countdown timer logic
  useEffect(() => {
    if (isResting) {
      timerRef.current = setInterval(() => {
        setRestSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsResting(false);
            if (soundEnabled) {
              playTimerFinishBeep();
              triggerTimerVibration();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isResting, soundEnabled]);

  const handleCompleteCurrentSet = () => {
    const nextSetNumber = (completedSets[completedSets.length - 1] || 0) + 1;
    if (nextSetNumber <= 4) {
      setCompletedSets((prev) => [...prev, nextSetNumber]);
    }

    // Trigger haptic and PR toast
    triggerTimerVibration();
    setShowPrToast(true);
    setTimeout(() => setShowPrToast(false), 3000);

    // Start 90s rest timer
    setRestSecondsLeft(90);
    setIsResting(true);

    if (soundEnabled) {
      // Test beep to let them hear the ambient tone right away
      playTimerFinishBeep();
    }
  };

  const handleResetDemo = () => {
    setIsResting(false);
    setCompletedSets([1]);
    setRestSecondsLeft(90);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="demo-interactiva" className="py-20 md:py-28 bg-[#121214] border-b border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-[#00FF87]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-2">
            Pruébalo ahora mismo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Siente la velocidad táctil en tus manos
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Ajusta los kilos y las repeticiones. Pulsa el botón de completar serie. Observa cómo calcula tu 1RM al vuelo y activa el descanso con audio sin tocar nada más.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="max-w-2xl mx-auto bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)] relative">
          {/* Header of the exercise */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Ejercicio de prueba</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Press de Banca con Barra
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  soundEnabled
                    ? 'bg-[#00FF87]/10 border-[#00FF87]/40 text-[#00FF87]'
                    : 'bg-zinc-900 border-white/10 text-zinc-500'
                }`}
                title={soundEnabled ? 'Audio activado' : 'Audio silenciado'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="hidden sm:inline">{soundEnabled ? 'Sonido ON' : 'Mute'}</span>
              </button>

              <button
                onClick={handleResetDemo}
                className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Reiniciar simulador"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Weight & Reps Adjuster */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {/* Weight Control */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-4">
              <div className="text-xs text-zinc-400 font-mono flex items-center justify-between">
                <span>PESO DE LA SERIE</span>
                <span className="text-[#00FF87]">Carga</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() => setWeight((w) => Math.max(20, w - 5))}
                  className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-black text-lg flex items-center justify-center transition-colors active:scale-95"
                >
                  -
                </button>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
                  {weight} <span className="text-sm font-normal text-zinc-400">kg</span>
                </div>
                <button
                  onClick={() => setWeight((w) => w + 5)}
                  className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-black text-lg flex items-center justify-center transition-colors active:scale-95"
                >
                  +
                </button>
              </div>
            </div>

            {/* Reps Control */}
            <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-4">
              <div className="text-xs text-zinc-400 font-mono flex items-center justify-between">
                <span>REPETICIONES</span>
                <span className="text-[#00E5FF]">Intensidad</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() => setReps((r) => Math.max(1, r - 1))}
                  className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-black text-lg flex items-center justify-center transition-colors active:scale-95"
                >
                  -
                </button>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
                  {reps} <span className="text-sm font-normal text-zinc-400">reps</span>
                </div>
                <button
                  onClick={() => setReps((r) => r + 1)}
                  className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-black text-lg flex items-center justify-center transition-colors active:scale-95"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Real-time calculated indicators */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00FF87]" />
              <span className="text-xs text-zinc-300">1RM Estimado (Fórmula Brzycki):</span>
            </div>
            <div className="text-base sm:text-lg font-black text-[#00FF87] font-mono tabular-nums">
              {calculated1RM} kg
            </div>
          </div>

          {/* Series Checklist representation */}
          <div className="space-y-2 mb-6">
            {[1, 2, 3, 4].map((setNum) => {
              const isDone = completedSets.includes(setNum);
              return (
                <div
                  key={setNum}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                    isDone
                      ? 'bg-[#00FF87]/10 border-[#00FF87]/30 text-white'
                      : 'bg-zinc-900/40 border-white/5 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-zinc-400">Serie {setNum}</span>
                    <span className="text-sm font-mono font-medium">
                      {weight} kg × {reps} reps
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isDone ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00FF87]">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Completada</span>
                      </span>
                    ) : (
                      <span className="text-xs text-zinc-500 font-mono">Pendiente</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Giant Tactile Button */}
          <button
            onClick={handleCompleteCurrentSet}
            disabled={completedSets.length >= 4}
            className={`w-full py-4 rounded-xl font-black text-base tracking-wide uppercase transition-all shadow-lg flex items-center justify-center gap-3 active:scale-98 ${
              completedSets.length >= 4
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                : 'bg-[#00FF87] hover:bg-[#00e578] text-black shadow-[0_0_30px_rgba(0,255,135,0.35)]'
            }`}
          >
            <Check className="w-5 h-5 stroke-[3]" />
            <span>
              {completedSets.length >= 4 ? 'Todas las series completadas' : 'Completar serie actual'}
            </span>
          </button>

          {/* PR Toast Banner */}
          {showPrToast && (
            <div className="mt-4 p-3 bg-emerald-500/15 border border-emerald-500/40 rounded-xl text-emerald-400 text-xs font-bold flex items-center justify-between animate-bounce">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-400 fill-current" />
                <span>¡Nuevo Récord Personal! 1RM estimado: {calculated1RM} kg</span>
              </div>
              <span className="text-[11px] font-mono">Registrado en Historial</span>
            </div>
          )}

          {/* Live Rest Timer Countdown Bar */}
          {isResting && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00E5FF]">
                  <Timer className="w-4 h-4" />
                  <span>Descansando para la siguiente serie</span>
                </div>
                <div className="text-lg font-black font-mono text-white tabular-nums">
                  {formatTimer(restSecondsLeft)}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00E5FF] to-[#00FF87] transition-all duration-1000 ease-linear"
                  style={{ width: `${(restSecondsLeft / 90) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between mt-3 text-xs">
                <button
                  onClick={() => setRestSecondsLeft((s) => s + 30)}
                  className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono transition-colors"
                >
                  +30s
                </button>
                <span className="text-zinc-500">Pitirá suavemente al llegar a 00:00</span>
                <button
                  onClick={() => setIsResting(false)}
                  className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono transition-colors"
                >
                  Saltar
                </button>
              </div>
            </div>
          )}

          {/* Bottom Volume Ticker */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
            <span>Volumen acumulado:</span>
            <span className="font-mono text-white font-bold tabular-nums">{totalVolume.toLocaleString()} kg</span>
          </div>
        </div>
      </div>
    </section>
  );
};
