import {
  useGetAllChartsQuery,
  useGetAllSongsByGenreQuery,
} from "../redux/services/Shazam";
import { genres } from "../assets/constants";
import SongCard from "../components/SongCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeGenreListId } from "../redux/features/playerSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Discover() {
  const { genreListId } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();
  const {
    data: songsData,
    isFetching,
    error,
  } = useGetAllSongsByGenreQuery(genreListId || "genre-global-chart-1");
  const { data: chartsData } = useGetAllChartsQuery();

  const genre =
    chartsData?.global.genres.find((item) => item.listid === genreListId)
      ?.name || "";

  function handleSelect(genre: string) {
    const listId =
      chartsData?.global.genres.find((item) => item.name === genre)?.listid ||
      "";
    dispatch(changeGenreListId(listId));
  }

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }

  if (error) {
    <Error />;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex xl:flex-row xl:justify-between flex-col justify-center items-center gap-3 mt-4">
        <div className="text-white font-bold text-2xl">Discover {genre}</div>
        <select
          onChange={(e) => handleSelect(e.target.value)}
          name="genres"
          value={genre || "Pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option
              key={genre}
              value={genre}
              className="border bg-black text-gray-300 p-3"
            >
              {genre}
            </option>
          ))}
        </select>
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
