import { useGetAllSongsByGenreQuery } from "../redux/services/Shazam";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";

export default function TopCharts() {
  const { data: songsData, isFetching } = useGetAllSongsByGenreQuery(
    "genre-global-chart-1"
  );

  if (isFetching) {
    return <Loader title="Loading Top Charts" />;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex xl:flex-row xl:justify-between flex-col justify-center items-center gap-3 mt-4">
        <div className="text-white font-bold text-2xl">Top Charts</div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 overflow-auto mt-4">
        {songsData &&
          songsData.tracks.map((track, index) => (
            <div key={track.key}>
              <SongCard
                track={track}
                index={index}
                trackList={songsData.tracks}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
