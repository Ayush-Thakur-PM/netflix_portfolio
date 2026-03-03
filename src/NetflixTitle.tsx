import React, { useEffect, useRef, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/ayush-logo-new.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio on mount so it starts in sync with the animation (no buffer delay)
  useEffect(() => {
    audioRef.current = new Audio(netflixSound);
    audioRef.current.preload = 'auto';
    audioRef.current.load();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlaySound = () => {
    if (!audioRef.current || isClicked) return;
    // Play sound and start animation at the same moment so they stay in sync
    audioRef.current.play().catch((err) => console.error('Audio play error:', err));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <div className="netflix-intro">
        <img
          src={logoImage}
          alt="Ayush Thakur"
          className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        />
      </div>
    </div>
  );
};

export default NetflixTitle;
