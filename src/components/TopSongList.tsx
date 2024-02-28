import { TopSong, TopSongs } from "../types";
import SongBar from "./SongBar";

type TopSongsProp = {
  topSongsData: TopSongs;
  handlePlay: (track: TopSong, index: number, topSongs: TopSong[]) => void;
  handlePause: () => void;
};

export default function TopSongList({
  topSongsData,
  handlePlay,
  handlePause,
}: TopSongsProp) {
  return (
    <div className="flex flex-col mt-20 gap-3">
      <p className="text-white text-2xl">Top Songs</p>
      {topSongsData?.data.map((song, index) => (
        <div key={song.id}>
          <SongBar
            song={song}
            index={index}
            handlePlay={() => handlePlay(song, index, topSongsData.data)}
            handlePause={handlePause}
          />
        </div>
      ))}
    </div>
  );
}
