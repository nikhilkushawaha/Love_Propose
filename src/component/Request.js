import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import HoverAudio from './Heartbeat';

export default function Request() {
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
        data-postid="22885016"
        data-share-method="host"
        data-aspect-ratio="1.04918"
        data-width="100%"
      >
        <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from 
        <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
      </div>
      <h1>Do you love me? 🤗</h1>
      <p>~I'm all yours 💕</p>

      <div className="btn">
       <HoverAudio><Link to="/yes">Yes</Link></HoverAudio>
        <Link to="/no">No</Link>
      </div>
    </div>
  );
}
