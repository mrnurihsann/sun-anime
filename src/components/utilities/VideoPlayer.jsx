"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Video = () => {
    return (
      <div div className="fixed bottom-2 right-2">
        <button className="text-color-primary bg-color-secondary  float-right px-1 mb-2">
          <XCircle size={32} onClick={handleVideoPlayer} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const OpenVideo = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        onError={() => alert("Trailer not found!")}
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-dark hover:text-color-accent transition-all px-2 py-1 rounded"
      >
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <Video /> : <OpenVideo />;
};

export default VideoPlayer;
