import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Song Info (hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p className="font-semibold">{track.name}</p>
          <p className="text-xs text-gray-400">{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Music Controls (always visible) */}
      <div className="flex flex-col items-center gap-2 m-auto">
        {/* Top Controls */}
        <div className="flex gap-4 items-center">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="Play"
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
          />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 w-full px-4">
          <p className="text-xs">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="relative w-[60vw] max-w-[500px] bg-gray-600 rounded-full h-1 cursor-pointer"
          >
            <div
              ref={seekBar}
              className="absolute top-0 left-0 h-1 bg-green-500 rounded-full"
            ></div>
          </div>
          <p className="text-xs">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      {/* Empty div for future (like volume control) */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="Plays" />
        <img className="w-4" src={assets.mic_icon} alt="Mic" />
        <img className="w-4" src={assets.queue_icon} alt="Queue" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
        <img className="w-4" src={assets.volume_icon} alt="Volume" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="Mini Player" />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
