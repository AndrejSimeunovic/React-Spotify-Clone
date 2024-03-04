import { ArtistDetails } from "../types";

type DetailsHeaderProps = {
  artistDetails?: ArtistDetails;
};

export default function DetailsHeader({ artistDetails }: DetailsHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={artistDetails?.data[0]?.attributes?.artwork?.url
          .replace("{w}", "500")
          .replace("{h}", "500")}
        alt="image"
        className="rounded-full border border-white w-28 h-28"
      />
        <div className="flex flex-col gap-1">
            <p className="text-white text-2xl">{artistDetails?.data[0]?.attributes?.name}</p>
            <p className="text-slate-500">{artistDetails?.data[0]?.attributes?.artistName}</p>
            <p className="text-slate-500">{artistDetails?.data[0]?.attributes?.genreNames.join(",")}</p>
        </div>
    </div>
  );
}
