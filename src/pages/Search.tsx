import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../redux/services/Shazam";
import Loader from "../components/Loader";
import Error from "../components/Error";
import SongCard from "../components/SongCard";

export default function Search() {
  const { searchTerm } = useParams();
  const {
    data: songsData,
    isFetching,
    error,
  } = useGetSearchQuery(searchTerm || "");

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error || !songsData || Object.keys(songsData).length === 0)
    return <Error />;

  const songs = songsData?.tracks?.hits.map((song) => song.track);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-white font-bold text-2xl mt-4">
        Showing results for {searchTerm}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 overflow-auto mt-4">
        {songsData &&
          songs?.map((track, index) => (
            <div key={track.key}>
              <SongCard track={track} index={index} trackList={songs} />
            </div>
          ))}
      </div>
    </div>
  );
}
