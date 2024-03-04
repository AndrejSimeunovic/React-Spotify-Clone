import { TopSongs } from "../types";
import SongBar from "./SongBar";

type TopSongsProp = {
  topSongsData?: TopSongs;
};

export default function TopSongList({ topSongsData }: TopSongsProp) {
  return (
    <div className="flex flex-col mt-20 gap-3">
      <p className="text-white text-2xl">Top Songs</p>
      {topSongsData?.data.map((song, index) => (
        <div key={song.id}>
          <SongBar song={song} index={index} />
        </div>
      ))}
    </div>
  );
}
