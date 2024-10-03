// src/components/HoverAudio.js
import React, { useRef } from 'react';
import audioFile from '../assets/heartbit.mp3';

const HoverAudio = ({ children }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioFile} preload="auto" />
      <div onMouseEnter={playAudio} onMouseLeave={pauseAudio}>
        {children}
      </div>
    </>
  );
};

export default HoverAudio;
