import { useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/Shazam";
import DetailsHeader from "../components/DetailsHeader";
import RelatedSongs from "../components/TopSongList";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function SongDetails() {
  const { songId } = useParams();

  const {
    data: songDetails,
    isFetching,
    error,
  } = useGetSongDetailsQuery(songId || "");

  if (isFetching) {
    return <Loader title="Searching song details" />;
  }
  if (error) return <Error />;
  return (
    <div className="flex flex-col mt-20">
      <DetailsHeader songDetails={songDetails} />
      <RelatedSongs songDetails={songDetails} />
    </div>
  );
}
