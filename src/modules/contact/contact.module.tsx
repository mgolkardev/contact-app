import { useContact } from "./hooks/contact.hook";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRecentContacts } from "./hooks/recent-contact.hook";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

export const ContactModule = () => {
  const { id } = useParams();

  let navigate = useNavigate();

  const { data, isFetching, error } = useContact(parseInt(id ?? "0"));
  const { setRecents } = useRecentContacts();

  useEffect(() => {
    setRecents(data);
  }, [data]);

  if (isFetching) {
    return <div className="text-center">Loading...</div>;
  }

  if (error || !data) {
    return <div className="text-center">Not Found</div>;
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <span
          className="cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowSmallLeftIcon width={24} />
        </span>

        <h1 className="font-bold text-2xl">
          {data.first_name} {data.last_name}
        </h1>
      </div>

      <div>
        <div className="h-24 bg-green-950 rounded-lg relative">
          <div className="w-24 h-24 bg-green-950 border border-primary rounded-full absolute right-4 bottom-0 translate-y-1/2 flex items-center justify-center">
            <img className="" src={data.avatar} alt={data.first_name} width={60} height={60} />
          </div>
          <span className="flex flex-col gap-2 p-3 text-white">
            <span>
              {data.first_name} {data.last_name}
            </span>
            <span className="text-gray-400 text-xs">Phone: {data.phone}</span>
            <span className="text-gray-400 text-xs">Company: {data.company}</span>
          </span>
        </div>
            <p className="text-black text-xs mt-2 pr-32">{data.note}</p>
      </div>
    </div>
  );
};
