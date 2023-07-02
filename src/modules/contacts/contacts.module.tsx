import { useState } from "react";
import { ContactsFilter } from "./components/contacts-filter/contacts-filter.component";
import { useContacts } from "./hooks/contacts.hook";
import { Scroller, Link } from "../../common/components";
import { ContactsRecent } from "./components/contacts-recent/contacts-recent.component";

export const ContactsModule = () => {
  const [query, setQuery] = useState<string>();

  const {
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useContacts(query);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Contacts</h1>

      <ContactsFilter
        onChange={(value) => {
          setQuery(value);
        }}
      />

      <Scroller
        className="bg-white p-5"
        isLoading={isFetching || isFetchingNextPage}
        error={
          (!(isFetching || isFetchingNextPage) && !data) ||
          data?.pages
            .flatMap((x) => x.items)
            .length === 0 ||
          !!error
        }
        pagination={{
          hasMore: hasNextPage,
          onEnd: () => {
            fetchNextPage();
          },
        }}
      >
        {!query && <ContactsRecent />}

        {data?.pages
          .flatMap((x) => x.items)
          .map((contact) => (
            <Link key={contact.id} href={`/contact/${contact.id}`}>
              <div className="flex items-center gap-4">
                <img
                  src={contact.avatar}
                  alt={contact.first_name}
                  width={72}
                  height={72}
                />
                <span className="flex flex-col gap-2">
                  <span className="text-black">
                    {contact.first_name} {contact.last_name}
                  </span>
                  <span className="text-black text-xs">{contact.phone}</span>
                </span>
              </div>
            </Link>
          ))}
      </Scroller>
    </div>
  );
};
