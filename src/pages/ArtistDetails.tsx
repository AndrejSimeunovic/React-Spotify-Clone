import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import {
  useGetArtistDetailsQuery,
  useGetTopSongsQuery,
} from "../redux/services/Shazam";
import DetailsHeader from "../components/DetailsHeader";
import TopSongList from "../components/TopSongList";
import { TopSong } from "../types";
import { getCurrentTrack, playPause } from "../redux/features/playerSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function ArtistDetails() {
  const { artistId } = useParams();
  const dispatch = useAppDispatch();

  const { data: artistDetails, isFetching: fetchingArtistDetails, error: errorArtistdetails } =
    useGetArtistDetailsQuery(artistId || "");
  const { data: topSongs, isFetching: fetchingTopsongs, error:errorTopsongs } = useGetTopSongsQuery(
    artistId || ""
  );

  function handlePlay(track: TopSong, index: number, topSongs: TopSong[]) {
    dispatch(getCurrentTrack({ track, index, topSongs }));
    dispatch(playPause(true));
  }

  function handlePause() {
    dispatch(playPause(false));
  }

  if (fetchingArtistDetails && fetchingTopsongs) {
    return <Loader title="Loading artist details..." />;
  }
  if (errorArtistdetails && errorTopsongs) return <Error />;
  return (
    <div className="flex flex-col mt-20">
      <DetailsHeader artistDetails={artistDetails} />
      <TopSongList
        topSongsData={topSongs}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
    </div>
  );
}
