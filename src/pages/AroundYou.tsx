import {
  useGetAllChartsQuery,
  useLazyGetAllSongsByGenreQuery,
} from "../redux/services/Shazam";
import SongCard from "../components/SongCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function AroundYou() {
  const [country, setCountry] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const {
    data: chartsData,
    isFetching,
    error: errorAllCharts,
  } = useGetAllChartsQuery();
  const [
    getAllSongsByGenre,
    { data: songsData, isFetching: isFetchingSongs, error: errorAllSongs },
  ] = useLazyGetAllSongsByGenreQuery();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=${
            import.meta.env.VITE_GEO_API_KEY
          }`
        );
        const country = res.data.location.country;
        setCountry(country);
        getAllSongsByGenre(
          chartsData?.countries.find((item) => item.id === country)?.listid ||
            ""
        );
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };
    fetchdata();
  }, [country]);

  if (isLoading || isFetching || isFetchingSongs) {
    return <Loader title="Loading Songs around you..." />;
  }
  if (errorAllCharts && errorAllSongs) return <Error />;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex xl:flex-row xl:justify-between flex-col justify-center items-center gap-3 mt-4">
        <div className="text-white font-bold text-2xl">
          Around You {country}
        </div>
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
