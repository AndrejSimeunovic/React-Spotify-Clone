import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

type VolumeBarProps = {
  volume: number;
  setVolume: (volume: number) => void;
};

export default function VolumeBar({ volume, setVolume }: VolumeBarProps) {
  return (
    <div className="md:flex text-slate-400 items-center gap-2 hidden">
      {volume > 0 ? (
        <BsFillVolumeUpFill
          size={20}
          onClick={() => setVolume(0)}
          className="hover:cursor-pointer"
        />
      ) : (
        <BsFillVolumeMuteFill
          size={20}
          onClick={() => setVolume(1)}
          className="hover:cursor-pointer"
        />
      )}
      <input
        type="range"
        min={0}
        step={0.05}
        max={1}
        value={volume}
        className="h-1 lg:w-32 md:w-24"
        onChange={(e) => setVolume(e.currentTarget.valueAsNumber)}
      />
    </div>
  );
}
