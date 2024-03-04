import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import TopPlay from "./components/TopPlay";
import AroundYou from "./pages/AroundYou";
import TopArtists from "./pages/TopArtists";
import TopCharts from "./pages/TopCharts";
import MusicPlayer from "./components/MusicPlayer";
import { useAppSelector } from "./redux/hooks";
import SongDetails from "./pages/SongDetails";
import ArtistDetails from "./pages/ArtistDetails";
import Search from "./pages/Search";
import { motion } from "framer-motion";
import { PlayerVariant } from "./utils";

function App() {
  const { activeSong } = useAppSelector((state) => state.player);

  return (
    <>
      <div className="flex relative">
        <Sidebar />

        <div className="flex flex-1 flex-col h-screen bg-gradient-to-br from-black to-[#121286] p-4 gap-3">
          <Searchbar />

          <div className="flex xl:flex-row flex-col-reverse overflow-auto  hide-scrollbar gap-5">
            <div className="flex-1 w-full xl:overflow-auto  hide-scrollbar pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/song-details/:songId" element={<SongDetails />} />
                <Route
                  path="/artist-details/:artistId"
                  element={<ArtistDetails />}
                />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>
            <div className="xl:max-w-md w-full xl:overflow-auto hide-scrollbar lg:pb-24 pb-5">
              <TopPlay />
            </div>
          </div>
        </div>
        {activeSong.title && (
          <motion.div
            variants={PlayerVariant}
            initial="initial"
            animate="animate"
            className="absolute bottom-0 left-0 right-0  w-full h-24 rounded-t-3xl z-10 bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg"
          >
            <MusicPlayer />
          </motion.div>
        )}
      </div>
    </>
  );
}

export default App;
