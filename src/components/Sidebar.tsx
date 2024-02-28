import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar() {
  const [shownav, setShowNav] = useState(false);
  const links = [
    { name: "Discover", to: "/", icon: HiOutlineHome },
    { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
    {
      name: "Top Artists",
      to: "/top-artists",
      icon: HiOutlineUserGroup,
    },
    { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
  ];
  function handleClick() {
    setShowNav(!shownav);
  }
  return (
    <>
      <div className="sm:flex flex-col w-[240px] gap-20 bg-[#191624] hidden">
        <div className="text-2xl self-center pt-8 font-bold  text-amber-600">
          Lyrixs
        </div>
        <div className="flex flex-col gap-6 pl-3">
          {links.map((item) => (
            <NavLink
              key={item.name}
              className="flex items-center gap-2 hover:text-blue-400 font-medium text-slate-400"
              to={item.to}
            >
              <item.icon className="w-6 h-6" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/** Mobile nav */}

      <div className="absolute sm:hidden block top-4 right-3 cursor-pointer">
        {shownav ? (
          <RiCloseLine
            onClick={handleClick}
            className="w-6 h-6 mr-2 text-white"
          />
        ) : (
          <HiOutlineMenu
            onClick={handleClick}
            className="w-6 h-6 mr-2 text-white"
          />
        )}
      </div>

      <AnimatePresence>
        {shownav && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "75vw", opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{
              opacity: 0,
              width: 0,
              transition: { ease: "easeInOut", duration: 0.2 },
            }}
            className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg p-6 sm:hidden"
          >
            <div className="text-2xl self-center text-center font-bold text-amber-600 pb-6">
              Lyrixs
            </div>
            <div className="flex flex-col gap-6 pl-3">
              {links.map((item) => (
                <NavLink
                  key={item.name}
                  className="flex items-center gap-2 hover:text-blue-400 font-medium text-slate-400"
                  to={item.to}
                  onClick={handleClick}
                >
                  <item.icon className="w-6 h-6" />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
