import CurrentTrack from "./CurrentTrack";
import Controls from "./Controls";
import SeekBar from "./SeekBar";
import VolumeBar from "./VolumeBar";
import Player from "./Player";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import {
  nextSong,
  playPause,
  prevSong,
} from "../../redux/features/playerSlice";

export default function MusicPlayer() {
  const { isPlaying, activeSong, currentIndex, trackList } = useAppSelector(
    (state) => state.player
  );
  const dispatch = useAppDispatch();
  const [volume, setVolume] = useState(0.2);
  const [duration, setDuration] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [skip, setSkip] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setshuffle] = useState(false);

  function handlePlayPause() {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  }
  function handleNextSong() {
    if (shuffle) {
      dispatch(nextSong(Math.floor(Math.random() * trackList.length)));
    } else {
      dispatch(nextSong(currentIndex + 1));
    }
  }
  function handlePrevSong() {
    if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * trackList.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  }

  function toggleRepeat() {
    setRepeat(!repeat);
  }
  function toggleShuffle() {
    setshuffle(!shuffle);
  }

  return (
    <div className="flex justify-between items-center h-full w-full px-10 ">
      <CurrentTrack activeSong={activeSong} isPlaying={isPlaying} />
      <div className="flex flex-col items-center justify-center sm:gap-2">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
          toggleRepeat={toggleRepeat}
          repeat={repeat}
          toggleShuffle={toggleShuffle}
          shuffle={shuffle}
        />
        <SeekBar
          duration={duration}
          currentProgress={currentProgress}
          setSkip={setSkip}
        />
        <Player
          isPlaying={isPlaying}
          activeSong={activeSong}
          volume={volume}
          setDuration={setDuration}
          setCurrentProgress={setCurrentProgress}
          skip={skip}
          handleNextSong={handleNextSong}
          repeat={repeat}
        />
      </div>
      <VolumeBar volume={volume} setVolume={setVolume} />
    </div>
  );
}
