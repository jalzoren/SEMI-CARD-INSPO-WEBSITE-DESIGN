import React, { useState, useEffect } from "react";
import "./App.css";
import jayGif from "./assets/won2.gif";

export default function App() {
  const [showMessaging, setShowMessaging] = useState(false);
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const [audioUnlocked, setAudioUnlocked] = useState(false);

  // Unlock music on ANY user interaction anywhere on the page
  useEffect(() => {
    const unlockAudio = () => {
      setAudioUnlocked(true);
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);
    document.addEventListener("touchstart", unlockAudio);
    document.addEventListener("keydown", unlockAudio);

    return () => {
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  const Background = () => (
    <>
  <div className="lines cursor-pointer"></div>


      <div className="noise"></div>
    
        <div className="fixed inset-0 w-full h-full -z-10 cursor-pointer">
          <img
            src={jayGif}
            alt="background animation"
            className="w-full h-full object-cover"
          />
        </div>
      
    </>
  );
  // Background music component using YouTube embed
  // Background music component using YouTube embed
  const BackgroundMusic = () => {
    const iframeRef = React.useRef(null);

    return (
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        src={`https://www.youtube-nocookie.com/embed/xdX_8R8Unik?autoplay=1&mute=0&loop=1&playlist=xdX_8R8Unik&controls=0&playsinline=1&enablejsapi=1&start=0`}
        title="Background music - ENHYPEN 'Outside'"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        style={{
          position: "absolute",
          left: "-9999px",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      />
    );
  };
  if (showMessaging) {
    return (
      <>
        {audioUnlocked && <BackgroundMusic />}
        <Background />
        <div className="app-container min-h-screen flex items-center justify-center text-white p-4 sm:p-8 relative z-10">
          <div className="max-w-[500px] w-full bg-black/80 backdrop-blur-md rounded-lg p-6 sm:p-8 border border-white/20">
            <button
              onClick={() => setShowMessaging(false)}
              className="mb-6 text-white hover:text-red-900 transition-colors flex items-center gap-2 text-sm font-bold"
            >
              <span className="text-xl">←</span> Back to Profile
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <img
                    src="https://64.media.tumblr.com/9514fdd886461875fe2f87dee8fa3adf/7c737a4fb030b56b-8d/s75x75_c1/c81eaeebef1cb9b98afdb09bcacfc67d4d98ac37.gifv"
                    alt="success"
                    className="inline-block mx-auto w-16 h-16"
                  />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ color: "#B71C1C" }}
                >
                  Message Sent!
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  Thanks for reaching out!
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    );
  }

  // Main Profile View
  return (
    <>
      {audioUnlocked && <BackgroundMusic />}
      <Background />
  
      <div className="app-container min-h-screen flex items-center justify-center text-white p-4 sm:p-8 relative z-10">
       
        <div className="max-w-[500px] w-full bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10">
          <div className="text-center mb-4 text-xs sm:text-sm text-gray-400"></div>

          <div className="text-center mb-4 sm:mb-6">
            <img
              src="https://external-media.spacehey.net/media/sEfYjT8_76L5bFsBH31E5NrAM201Hs2Q2jrHbGH01QYY=/https://64.media.tumblr.com/f0781a9ad0ea14e403f9c6bcb1e0ee56/6f9e7505f82bc822-4c/s640x960/4d1dda505d4231d243e261352c0d08441177ec46.gifv"
              alt="Decorative header"
              className="mx-auto max-w-full h-auto rounded"
            />
          </div>

          <div className="text-center mb-3 sm:mb-4">
            <img
              src="https://y2k.neocities.org/blinkiez/blink63.gif"
              alt="Blinkie"
              className="inline-block max-w-full h-auto"
            />
          </div>

          <div className="mx-auto text-center leading-relaxed text-sm sm:text-base">
            <p>
              <img
                src="https://64.media.tumblr.com/tumblr_ll7wpyHlj71qi6qow.gif"
                alt="Decoration"
                className="inline-block mr-1 align-middle max-w-[20px]"
              />
              <span className="james1 inline-block font-bold tracking-wider align-middle text-lg sm:text-xl md:text-2xl leading-tight">
                <span className="italic" style={{ color: "#B71C1C" }}>
                  J
                </span>
                <span className="font-extrabold" style={{ color: "#B71C1C" }}>
                  P
                </span>
                </span>
                {/* 
                <span>E</span>
                <span className="font-extrabold">S</span>
              </span>
              <img
                src="https://64.media.tumblr.com/9514fdd886461875fe2f87dee8fa3adf/7c737a4fb030b56b-8d/s75x75_c1/c81eaeebef1cb9b98afdb09bcacfc67d4d98ac37.gifv"
                alt="Small decoration"
                className="inline-block ml-1 max-w-[32px]"
              />
              <br />
              <span className="italic text-xs sm:text-sm">filo</span>
              <span className="font-bold ml-1 text-xs sm:text-sm">(+63)</span>
              */}
            </p>

            <p className="mt-4">
              Hello, I go by{" "}
              <span className="font-bold italic" style={{ color: "#B71C1C" }}>
                J
              </span>
              
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                P
              </span>

              {/* 
              <span
                className="font-bold underline"
                style={{ color: "#B71C1C" }}
              >
                M
              </span>
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                E
              </span>
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                S
              </span>{" "}
              and{" "}
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                Jay
              </span>
              . Nicknames are fine, just keep it{" "}
              <span className="font-bold" style={{ color: "#CD0000" }}>
                respectful
              </span>
              . Male, Adult.{" "}
              <span className="font-bold" style={{ color: "#CD0000" }}>
                He/Him/His
              </span>*/}
            </p> 

            <p className="mt-3">
              I'm a{" "}
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                REAL IT-boi !
              </span>
              , currently in Junior Year, I make{" "}
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                UI/UX designs
              </span>
              ,{" "}
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                websites
              </span>
              , and{" "}
              <span className="font-bold" style={{ color: "#B71C1C" }}>
                Frontend Website Designs
              </span>
              . Ask if you're curious, I don't mind.
            </p>

            <p className="mt-3">
              Inbox is open. Replies? Depends on the{" "}
              <span className="font-bold" style={{ color: "#CD0000" }}>
                day
              </span>
              , the{" "}
              <span className="font-bold" style={{ color: "#CD0000" }}>
                mind
              </span>
              , and the{" "}
              <span className="font-bold" style={{ color: "#CD0000" }}>
                mood
              </span>
              . 
            </p>
          </div>

          <div className="my-6 sm:my-8 border-t border-gray-700"></div>

          <div className="text-center">
            <img
              src="https://gifcity.carrd.co/assets/images/gallery01/71a50ca4.gif?v=e3c0bc0f"
              alt="eye"
              className="inline-block mr-2 max-w-[24px] sm:max-w-[30px]"
            />

            <a
              href="https://jpauljp.sayout.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black text-white border-2 border-white px-4 sm:px-6 py-2 inline-block hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm sm:text-base cursor-pointer rounded">
                send me a message!
              </button>
            </a>

            <img
              src="https://gifcity.carrd.co/assets/images/gallery01/71a50ca4.gif?v=e3c0bc0f"
              alt="eye"
              className="inline-block ml-2 scale-x-[-1] max-w-[24px] sm:max-w-[30px]"
            />
          </div>
        </div>
      </div>
     
    </>
  );
}
