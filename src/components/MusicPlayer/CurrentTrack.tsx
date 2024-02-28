import { Track } from "../../types";

type TrackProps = {
  activeSong: Track;
  isPlaying?: boolean;
};

export default function CurrentTrack({ activeSong, isPlaying }: TrackProps) {
  return (
    <div className="flex items-center gap-3 w-60">
      <img
        src={activeSong.share.image}
        alt="image"
        className={`rounded-full w-16 h-16 sm:block hidden ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      />
      <div className="w-[50%]">
        <p className="font-bold text-white text-base truncate">
          {activeSong.title}
        </p>
        <p className="text-sm text-slate-400 truncate">{activeSong.subtitle}</p>
      </div>
    </div>
  );
}
