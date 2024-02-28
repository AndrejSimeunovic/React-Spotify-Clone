import { useAppSelector } from "../redux/hooks";
import { HiPause, HiPlay } from "react-icons/hi";
import { Track } from "../types";

type PlayPauseProps = {
  track: Track;
  handlePlay: () => void;
  handlePause: () => void;
};

export default function PlayPause({
  track,
  handlePlay,
  handlePause,
}: PlayPauseProps) {
  const { isPlaying, activeSong } = useAppSelector((state) => state.player);

  return (
    <>
      {isPlaying && activeSong.key === track.key ? (
        <HiPause size={40} onClick={handlePause} className="text-gray-300" />
      ) : (
        <HiPlay size={40} onClick={handlePlay} className="text-gray-300" />
      )}
    </>
  );
}
