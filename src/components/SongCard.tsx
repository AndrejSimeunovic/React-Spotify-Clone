import { Track } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCurrentTrack, playPause } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SongVariant } from "../utils";

type SongCardProps = {
  track: Track;
  index: number;
  trackList: Track[];
};

export default function SongCard({ track, index, trackList }: SongCardProps) {
  const { activeSong } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  function handlePlay() {
    dispatch(getCurrentTrack({ track, index, trackList }));
    dispatch(playPause(true));
  }

  function handlePause() {
    dispatch(playPause(false));
  }
  const currentUrl = window.location.pathname;
  const artistDetailsIndex = currentUrl.indexOf("/artist-details");

  return (
    <motion.div
      variants={SongVariant}
      initial="initial"
      animate="animate"
      className="flex flex-col text-slate-400 bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-md p-3 h-fit"
    >
      <div className="group relative">
        <img
          src={track.share.image}
          alt="image"
          className={`mb-5 group-hover:opacity-50 ${
            activeSong.key === track.key ? "opacity-50" : ""
          }`}
        />

        <div
          className={`opacity-0 group-hover:opacity-100  cursor-pointer absolute inset-0 flex justify-center items-center  ${
            activeSong.key === track.key ? "opacity-100" : ""
          } `}
        >
          <PlayPause
            track={track}
            handlePlay={handlePlay}
            handlePause={handlePause}
          />
        </div>
      </div>
      {/*<Link
        className="font-bold text-white mb-1 truncate"
        to={
          track?.hub?.actions ? `song-details/${track.hub.actions[0].id}` : "#"
        }
      >
        {track.title}
      </Link>*/}
      <p className="font-bold text-white mb-1 truncate">{track.title}</p>
      <Link
        to={
          track.artists
            ? `${currentUrl.substring(0, artistDetailsIndex)}/artist-details/${
                track.artists[0].adamid
              }`
            : "#"
        }
        className="text-sm truncate"
      >
        {track.subtitle}
      </Link>
    </motion.div>
  );
}
