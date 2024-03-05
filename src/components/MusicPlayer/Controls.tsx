import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

type ControlsProps = {
  isPlaying?: boolean;
  handlePlayPause: () => void;
  handleNextSong: () => void;
  handlePrevSong: () => void;
  toggleRepeat: () => void;
  repeat: boolean;
  toggleShuffle: () => void;
  shuffle: boolean;
};

export default function Controls({
  isPlaying,
  handlePlayPause,
  handleNextSong,
  handlePrevSong,
  toggleRepeat,
  repeat,
  toggleShuffle,
  shuffle,
}: ControlsProps) {
  return (
    <div className="flex lg:gap-6 items-center justify-center text-slate-300">
      <BsArrowRepeat
        size={20}
        className={`cursor-pointer hidden sm:block ${
          repeat ? "text-red-500" : ""
        }`}
        onClick={toggleRepeat}
      />
      <MdSkipPrevious
        size={30}
        className="cursor-pointer"
        onClick={handlePrevSong}
      />
      {isPlaying ? (
        <BsFillPauseFill
          size={40}
          className="cursor-pointer"
          onClick={handlePlayPause}
        />
      ) : (
        <BsFillPlayFill
          size={40}
          className="cursor-pointer"
          onClick={handlePlayPause}
        />
      )}
      <MdSkipNext
        size={30}
        className="cursor-pointer"
        onClick={handleNextSong}
      />
      <BsShuffle
        size={20}
        className={`cursor-pointer hidden sm:block ${
          shuffle ? "text-red-500" : ""
        }`}
        onClick={toggleShuffle}
      />
    </div>
  );
}
