import { Search } from "lucide-react";
import { useRef } from "react";
import { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();
  const searchTermRef = useRef<HTMLInputElement>(null);

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    const term = searchTermRef.current?.value;
    if (event.key === "Enter" && term) {
      navigate(`search/${term}`);
      searchTermRef.current && (searchTermRef.current.value = "");
    }
  }

  return (
    <div className="flex items-center">
      <Search color="#4a4545" size={15} />
      <input
        ref={searchTermRef}
        className="w-48 rounded pl-2 bg-transparent text-slate-400 outline-none text-sm"
        type="search"
        placeholder="Search"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
