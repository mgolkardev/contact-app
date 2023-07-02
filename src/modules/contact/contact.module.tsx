import { useContact } from "./hooks/contact.hook";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRecentContacts } from "./hooks/recent-contact.hook";

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
      <span
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </span>

      <h1 className="font-bold text-2xl mb-6">
        {data.first_name} {data.last_name}
      </h1>

      <div className="flex items-center gap-4">
        <img src={data.avatar} alt={data.first_name} width={72} height={72} />
        <span className="flex flex-col gap-2">
          <span className="text-black">
            {data.first_name} {data.last_name}
          </span>
          <span className="text-black text-xs">{data.phone}</span>
          <span className="text-black text-xs">{data.company}</span>
        </span>
      </div>
    </div>
  );
};
