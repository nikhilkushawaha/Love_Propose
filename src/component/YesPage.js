import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import './heartbeat.css';
import crackers from '../assets/crackers.mp3'

export default function AskHerOut() {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.play();
            audio.loop = true; // Loop the audio
            setIsPlaying(true);
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

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
        const myhol = document.getElementById("hol");
        const color = ['#cc3673', '#273522', '#7c001b', '#3a0003', '#dbd000', '#824275', '#eba2a3', '#d1003b'];
        const sizebox = [10, 15, 20, 5, 12, 30, 22, 34, 16];
        const lV = document.getElementById("h");

        function randVal(myVal) {
            if (Array.isArray(myVal)) {
                const ranInArray = Math.floor(Math.random() * myVal.length);
                return myVal[ranInArray];
            } else {
                return Math.floor(Math.random() * myVal);
            }
        }

        // Create 100 divs with random styles
        for (let i = 0; i < 100; i++) {
            for (let x = 0; x < myhol.children.length; x++) {
                const mypub = document.createElement("div");
                const size = randVal(sizebox) + "px";

                mypub.style.backgroundColor = randVal(color);
                mypub.style.borderColor = randVal(color);
                mypub.style.width = size;
                mypub.style.height = size;
                mypub.style.left = randVal(100) + "%";
                mypub.style.top = randVal(100) + "%";

                myhol.children[x].appendChild(mypub);
            }
        }

        const ct = document.getElementById("center");
        const interval = setInterval(() => {
            // lV.style.backgroundColor = randVal(color);
            // lV.nextElementSibling.style.backgroundColor = randVal(color);
            for (let i = 0; i < ct.children.length; i++) {
                ct.children[i].style.backgroundColor = randVal(color);
            }
        }, 1000);

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className="container">
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}>
        <audio ref={audioRef} src={crackers} preload="auto" />
            {!isPlaying && (
                <button onClick={handlePlay}>
                    Play Music
                </button>
            )}
            {isPlaying && (
                <button onClick={() => {
                    audioRef.current.pause();
                    setIsPlaying(false);
                }}>
                    Pause Music
                </button>
            )}
        </div>
        <div>            
            <div className="heart love1"></div>
            <div className="heart love2"></div>
            <div className="box-bottom">
                <div className="h" id="h">
                    <div></div>
                    <div></div>
                </div>
                <div className="hol" id="hol">
                    <div id="center" className="block-center"></div>
                </div>
            </div>
            <div
                className="tenor-gif-embed"
                data-postid="253027946666209433"
                data-share-method="host"
                data-aspect-ratio="1.37853"
                data-width="100%"
            >
                <a href="https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433">
                    Mochi Cat GIF
                </a>
                from
                <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a>
            </div>
            <h1>Hehehehe, I knew it! Love you a lot 😘</h1>
        </div>
        </div>
    );
}
