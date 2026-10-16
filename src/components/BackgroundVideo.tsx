import { useEffect, useRef, memo } from "react";

function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Directly stream the full 16-second WebM file via Dropbox raw link
  const videoUrl = "https://dl.dropboxusercontent.com/scl/fi/c8iianrkthkxievcv6oqp/Loop-NamiPharm.webm?rlkey=wne30aig5b3q6yeazssjh0t0d&st=wr1v7ktz&raw=1";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isSubscribed = true;
    const playVideo = () => {
      if (!isSubscribed || !video) return;
      video.play().catch(() => {
        // Autoplay or resume prevented
      });
    };

    // Trigger play as soon as data or metadata becomes available
    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("canplay", playVideo);
    
    // Defer network buffering of video to after initial render
    const raf = requestAnimationFrame(() => {
      if (isSubscribed && video) {
        playVideo();
      }
    });

    return () => {
      isSubscribed = false;
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-obsidian-950 select-none pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-[0.65] scale-110 select-none pointer-events-none"
      >
        <source src={videoUrl} type="video/webm" />
        <source src="/background.webm" type="video/webm" />
        <source src="/background.mp4" type="video/mp4" />
      </video>
      {/* Premium dark aesthetic overlay */}
      <div className="absolute inset-0 bg-black/35 mix-blend-multiply pointer-events-none select-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-obsidian-950/70 pointer-events-none select-none"></div>
    </div>
  );
}

export default memo(BackgroundVideo);
