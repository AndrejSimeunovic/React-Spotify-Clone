import loader from "../assets/loader.svg";

export default function Loader({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
      <h1 className="font-bold text-2xl text-white mt-2">{title || "Loading..."}</h1>
    </div>
  );
}
