import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
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

  useEffect(() => {
    const moveRandom = document.getElementById("move-random");

    function moveRandomEl(elm) {
      elm.style.position = "absolute";
      elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
      elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }

    if (moveRandom) {
      moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
      });
    }

    return () => {
      if (moveRandom) {
        moveRandom.removeEventListener("mouseenter", moveRandomEl);
      }
    };
  }, []);

  return (
    <div className="container">
      <div
        className="tenor-gif-embed"
        data-postid="15974530976611222074"
        data-share-method="host"
        data-aspect-ratio="1.26923"
        data-width="100%"
      >
        <a href="https://tenor.com/view/peach-goma-phone-gif-15974530976611222074">
          Peach Goma Phone Sticker
        </a>
        from
        <a href="https://tenor.com/search/peach+goma-stickers">
          Peach Goma Stickers
        </a>
      </div>

      <h1>Baby Man jao na! Kitna bhav khaogi 😭</h1>
      <p>bhut glt baat hai yaar😭</p>

      <div className="btn">
        <HoverAudio><Link to="/yes">Yes</Link></HoverAudio>
        <a href="#" id="move-random">No</a>
      </div>
    </div>
  );
}
