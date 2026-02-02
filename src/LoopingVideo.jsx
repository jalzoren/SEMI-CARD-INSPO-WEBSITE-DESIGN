import { useRef, useEffect } from "react";

const LoopingVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force loop using timeupdate for mobile devices
    const handleTimeUpdate = () => {
      if (video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    // Ensure video starts playing
    const handleLoadedMetadata = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
    >
      <source src={src} type="video/gif" />
    </video>
  );
};

export default LoopingVideo;
