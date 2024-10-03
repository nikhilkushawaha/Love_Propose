import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HoverAudio from './Heartbeat';

export default function AskHerOut() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="tenor-gif-embed"
        data-postid="15195810"
        data-share-method="host"
        data-aspect-ratio="1"
        data-width="100%"
      >
        <a href="https://tenor.com/view/couple-forgive-me-asking-for-forgiveness-begging-crying-gif-15195810">
          Couple Forgive Me Sticker
        </a>
        from
        <a href="https://tenor.com/search/couple-stickers">Couple Stickers</a>
      </div>

      <h1>Ek baar aur Soch lo! 😣</h1>
      <p>kyu aisa kar rahi ho 😣</p>

      <div className="btn">
        <HoverAudio><Link to="/yes">Yes</Link></HoverAudio>
        <Link to="/againno">No</Link>
      </div>
    </div>
  );
}

