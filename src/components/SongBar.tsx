import { TopSong } from "../types";
import PlayPause from "./PlayPause";

type SongBarProp = {
  song: TopSong;
  index: number;
  handlePlay: () => void;
  handlePause: () => void;
};

export default function SongBar({
  song,
  index,
  handlePlay,
  handlePause,
}: SongBarProp) {
  return (
    <div className="flex justify-between items-center hover:bg-[#4c426e] rounded-lg">
      <div className="flex items-center gap-2 mb-2 py-2 px-4">
        <h1 className="text-white">{index + 1}.</h1>
        <img
          src={song.attributes.artwork.url
            .replace("{w}", "125")
            .replace("{h}", "125")}
          alt="image"
          className="rounded h-16 w-16"
        />
        <div className="flex flex-col">
          <span className="text-white text-lg">{song.attributes.name}</span>
          <span className="text-slate-400 text-sm">
            {song.attributes.artistName}
          </span>
        </div>
      </div>
      <div className="cursor-pointer">
        {/* <PlayPause
          track={song}
          handlePlay={handlePlay}
          handlePause={handlePause}
          />*/}
      </div>
    </div>
  );
}
