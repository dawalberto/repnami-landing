import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Es completamente gratis o habrá suscripciones sorpresa?',
    answer:
      'Es 100% gratuita. Sin suscripciones mensuales, sin compras integradas, sin límites artificiales de rutinas ni ejercicios bloqueados tras muros de pago.',
  },
  {
    question: '¿El pitido del descanso interrumpe mi música en Spotify o podcasts?',
    answer:
      'No. WorkoutLog utiliza la API de audio del navegador configurada en modo "ambient". El sintetizador emite 3 tonos armónicos suaves por encima del sonido ambiente sin pausar ni silenciar tu reproductor de música.',
  },
  {
    question: '¿Realmente funciona en el sótano del gimnasio sin wifi ni cobertura?',
    answer:
      'Totalmente. Al ser una PWA (Progressive Web App) con Service Worker e IndexedDB, todos los recursos y datos se ejecutan localmente en tu dispositivo. Puedes entrenar en modo avión sin problemas.',
  },
  {
    question: '¿Cómo paso mis datos a un móvil nuevo o evito perderlos?',
    answer:
      'Dispones de un sistema de copias de seguridad con 1 clic. Puedes descargar tu archivo JSON de backup en cualquier momento y guardarlo en iCloud, Google Drive o enviarlo por WhatsApp. Al abrir la app en un móvil nuevo, simplemente importas el archivo y recuperas todo en 2 segundos.',
  },
  {
    question: '¿Puedo personalizar mis propios ejercicios con vídeos de técnica?',
    answer:
      'Sí. Puedes crear ejercicios ilimitados, asignar su grupo muscular principal, anotar recomendaciones y adjuntar enlaces a vídeos de YouTube para revisar la técnica antes de tus levantamientos pesados.',
  },
  {
    question: '¿Qué fórmula utiliza para calcular el 1RM?',
    answer:
      'Utiliza la fórmula científica de Brzycki y combinaciones con Epley para estimar de forma precisa tu repetición máxima en series de entre 1 y 12 repeticiones efectivas.',
  },
];

export const LandingFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#00FF87] mb-2">
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Respuestas claras, sin rodeos
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Todo lo que necesitas saber sobre el funcionamiento, privacidad y audio de la aplicación.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-zinc-950 border border-white/10 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00FF87]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
