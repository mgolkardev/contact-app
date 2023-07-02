import { useEffect, useState } from "react";
import { ContactDto } from "../../apis/dtos/contact.dto";
import * as Persistence from '../../../../common/persistence/persistence'
import { Divider, Link } from "../../../../common/components";

export const ContactsRecent = () => {
  const [recentList, setResentList] = useState<ContactDto[]>([]);

  useEffect(() => {
    const visitedContacts = Persistence.get<ContactDto[]>("visited-contacts") ?? []
    setResentList(visitedContacts);
  }, []);

  if (recentList.length === 0) {
    return <></>
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 pb-2">
        {recentList.map(contact => <Link key={contact.id} href={`/contact/${contact.id}`}>
          <div className="flex flex-col items-center gap-4 flex-1">
            <img
              src={contact.avatar}
              alt={contact.first_name}
              width={48}
              height={48}
            />
            <span className="flex flex-col gap-2">
              <span className="text-black">
                {contact.first_name}
              </span>
            </span>
          </div>
        </Link>)}
      </div>
      <Divider />
    </div>
  );
};
