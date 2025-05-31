import React from 'react';

interface SpeechButtonProps {
  /**
   * Okunacak metin. Genellikle sayfa içeriği veya children ile alınır.
   */
  text: string;
}

const SpeechButton: React.FC<SpeechButtonProps> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  const handleSpeak = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onstart = () => setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={isSpeaking ? handleStop : handleSpeak}
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition bg-amber-600 hover:bg-amber-700 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${isSpeaking ? 'opacity-80' : ''}`}
        aria-label={isSpeaking ? 'Sesli anlatımı durdur' : 'Sayfa içeriğini sesli anlat'}
      >
        {isSpeaking ? (
          <span className="animate-pulse">Durdur</span>
        ) : (
          <span>Sesli Anlat</span>
        )}
      </button>
    </div>
  );
};

export default SpeechButton; 