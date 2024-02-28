import { Variants } from "framer-motion";

export function formatTime(seconds: number): string {
  const roundedSeconds = Math.round(seconds);
  const minutes = Math.floor(roundedSeconds / 60);
  const remainingSeconds = roundedSeconds % 60;

  const formattedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export const SongVariant: Variants = {
  initial: { opacity: 0, y: "25%" },
  animate: { opacity: 1, y: 0, transition: { duration: 1, type: "easeInOut" } },
};
export const PlayerVariant: Variants = {
  initial: { opacity: 0, y: "100%" },
  animate: {
    opacity: 1,
    y: "0%",
    transition: { duration: 1, type: "linear" },
  },
};
