import { useAppDispatch } from "../redux/hooks";
import { getCurrentTrack, playPause } from "../redux/features/playerSlice";
import { Track } from "../types";
import PlayPause from "./PlayPause";
import { useGetAllSongsByGenreQuery } from "../redux/services/Shazam";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

type TopChartCardProps = {
  track: Track;
  index: number;
  trackList: Track[];
  handlePlay: () => void;
  handlePause: () => void;
};

function TopChartCard({
  track,
  index,
  handlePlay,
  handlePause,
}: TopChartCardProps) {
  return (
    <div className="flex justify-between items-center hover:bg-[#4c426e] rounded-lg">
      <div className="flex items-center gap-2 mb-2 py-2 px-4">
        <h1 className="text-white">{index + 1}.</h1>
        <img
          src={track.share.image}
          alt="image"
          className="rounded h-16 w-16"
        />
        <div className="flex flex-col">
          {/*<Link
            className="font-bold text-white mb-1 truncate"
            to={
              track?.hub?.actions
                ? `song-details/${track.hub.actions[0].id}`
                : "#"
            }
          >
            {track.title}
          </Link>*/}
          <p className="font-bold text-white mb-1 truncate">{track.title}</p>
          <Link
            to={
              track.artists ? `artist-details/${track.artists[0].adamid}` : "#"
            }
            className="text-sm text-slate-400 truncate"
          >
            {track.subtitle}
          </Link>
        </div>
      </div>
      <div className="cursor-pointer">
        <PlayPause
          track={track}
          handlePlay={handlePlay}
          handlePause={handlePause}
        />
      </div>
    </div>
  );
}

export default function TopPlay() {
  const dispatch = useAppDispatch();
  const { data } = useGetAllSongsByGenreQuery("genre-global-chart-1");
  const topCharts = data?.tracks.slice(0, 5);
  const divRef = useRef<HTMLDivElement>(null);

  /*useEffect(() => {
   divRef.current?.scrollIntoView({ behavior: "instant" });
  });*/

  function handlePlay(track: Track, index: number, trackList: Track[]) {
    dispatch(getCurrentTrack({ track, index, trackList }));
    dispatch(playPause(true));
  }

  function handlePause() {
    dispatch(playPause(false));
  }
  return (
    <div ref={divRef} className="flex flex-col gap-3 w-full overflow-auto">
      <div className="flex flex-col">
        <div className="flex justify-between mb-3 items-center">
          <span className="text-2xl bold text-white">Top charts</span>
          <Link
            className="text-slate-400 text-sm hover:text-slate-300"
            to={"/top-charts"}
          >
            See more
          </Link>
        </div>

        {topCharts?.map((topChart, index) => (
          <div key={topChart.key}>
            <TopChartCard
              track={topChart}
              index={index}
              trackList={topCharts}
              handlePlay={() => handlePlay(topChart, index, topCharts)}
              handlePause={handlePause}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mb-3 items-center">
          <span className="text-2xl bold text-white">Top Artists</span>
          <Link
            className="text-slate-400 text-sm hover:text-slate-300"
            to={"/top-artists"}
          >
            See more
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topCharts?.map((topChart) => {
            const artist = topChart?.artists?.[0];
            return (
              <SwiperSlide
                key={artist?.id}
                className="shadow-lg animate-slideright w-[25%] h-auto"
              >
                <Link
                  to={
                    topChart.artists
                      ? `artist-details/${topChart.artists[0].adamid}`
                      : "#"
                  }
                  className="text-sm text-slate-400 truncate"
                >
                  <img
                    src={topChart.images?.background}
                    alt="image"
                    className="rounded-full w-full"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
