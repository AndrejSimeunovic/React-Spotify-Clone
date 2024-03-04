import { useParams } from "react-router-dom";
import {useGetArtistDetailsQuery,useGetTopSongsQuery} from "../redux/services/Shazam";
import DetailsHeader from "../components/DetailsHeader";
import TopSongList from "../components/TopSongList";

import Loader from "../components/Loader";
import Error from "../components/Error";

export default function ArtistDetails() {
  const { artistId } = useParams();


  const { data: artistDetails, isFetching: fetchingArtistDetails, error: errorArtistdetails } =
    useGetArtistDetailsQuery(artistId || "");
  const { data: topSongsData, isFetching: fetchingTopsongs, error:errorTopsongs } = useGetTopSongsQuery(
    artistId || ""
  );


  if (fetchingArtistDetails && fetchingTopsongs) {
    return <Loader title="Loading artist details..." />;
  }
  if (errorArtistdetails && errorTopsongs) return <Error />;
  return (
    <div className="flex flex-col mt-20">
      <DetailsHeader artistDetails={artistDetails} />
      <TopSongList
        topSongsData={topSongsData}
      />
    </div>
  );
}
