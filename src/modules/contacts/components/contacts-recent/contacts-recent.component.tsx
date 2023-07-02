import { Divider, Link } from "../../../../common/components";
import { useRecentContacts } from "../../../contact/hooks/recent-contact.hook";

export const ContactsRecent = () => {
  const { recents } = useRecentContacts();

  if (recents.length === 0) {
    return <></>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 pb-2">
        {recents.map((contact) => (
          <Link key={contact.id} href={`/contact/${contact.id}`}>
            <div className="flex flex-col items-center gap-4 flex-1">
              <img
                src={contact.avatar}
                alt={contact.first_name}
                width={48}
                height={48}
              />
              <span className="flex flex-col gap-2">
                <span className="text-black">{contact.first_name}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Divider />
    </div>
  );
};
