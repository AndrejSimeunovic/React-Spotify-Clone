import { formatTime } from "../../utils";

type SeekBarProps = {
  duration: number;
  currentProgress: number;
  setSkip: (skip: number) => void;
};

export default function SeekBar({
  duration,
  currentProgress,

  setSkip,
}: SeekBarProps) {
  return (
    <div className="flex items-center gap-3 text-slate-400">
      <button
        className="hover:text-red-500 hidden sm:block"
        onClick={() => setSkip(currentProgress - 5)}
      >
        -
      </button>
      <span className="sm:block hidden">{formatTime(currentProgress)}</span>

      <input
        type="range"
        className="lg:w-96 h-1 rounded-lg md:w-52 md:max-w-2xl w-24 hidden sm:block"
        min={0}
        max={duration}
        value={currentProgress}
        onChange={(e) => setSkip(e.currentTarget.valueAsNumber)}
      />
      <span className="sm:block hidden">{formatTime(duration)}</span>
      <button
        className="hover:text-red-500 hidden sm:block"
        onClick={() => setSkip(currentProgress + 5)}
      >
        +
      </button>
    </div>
  );
}
