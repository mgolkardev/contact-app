import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ContactsFilterProperties } from "./contacts-filter-properties.interface";

export const ContactsFilter = ({ onChange }: ContactsFilterProperties) => {
  const [query, setQuery] = useState("");
  const [inputValue] = useDebounce(query, 1000);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <div className="flex items-center justify-between gap-2 pb-2">
      <input
        className="bg-slate-800 p-2 rounded-xl"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
