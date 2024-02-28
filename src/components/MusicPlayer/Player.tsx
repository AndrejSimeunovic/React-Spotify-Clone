import { useEffect, useRef } from "react";
import { Track } from "../../types";

type PlayerProps = {
  isPlaying?: boolean;
  activeSong: Track;
  volume: number;
  setDuration: (duration: number) => void;
  setCurrentProgress: (currentProgress: number) => void;
  skip: number;
  handleNextSong: () => void;
  repeat: boolean;
};
export default function Player({
  isPlaying,
  activeSong,
  volume,
  setDuration,
  setCurrentProgress,
  skip,
  handleNextSong,
  repeat,
}: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, activeSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = skip;
    }
  }, [skip]);

  const uri = activeSong?.hub?.actions?.[1]?.uri ?? "";
  return (
    <audio
      ref={audioRef}
      src={uri}
      preload="metadata"
      onDurationChange={(e) => setDuration(e.currentTarget.duration)}
      onTimeUpdate={(e) => setCurrentProgress(e.currentTarget.currentTime)}
      onEnded={handleNextSong}
      loop={repeat}
    />
  );
}
