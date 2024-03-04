import { Search } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();
  const searchTermRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const term = searchTermRef.current?.value;
    if (term) {
      navigate(`search/${term}`);
      searchTermRef.current && (searchTermRef.current.value = "");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex items-center focus-within:text-gray-600"
    >
      <Search color="#4a4545" size={15} />
      <input
        ref={searchTermRef}
        className="w-48 rounded pl-2 bg-transparent text-slate-400 outline-none text-sm"
        type="search"
        placeholder="Search"
        onSubmit={handleSubmit}
      />
    </form>
  );
}
