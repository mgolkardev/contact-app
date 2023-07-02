import { useState } from "react";
import { ContactsFilter } from "./components/contacts-filter/contacts-filter.component";
import { useContacts } from "./hooks/contacts.hook";
import { Grid, Link } from "../../common/components";

export const ContactsModule = () => {
  const [page, setPage] = useState<number>();
  const [query, setQuery] = useState<string>();

  const { data, isLoading, error } = useContacts(page, query);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Contacts</h1>

      <ContactsFilter
        onChange={(value) => {
          setQuery(value);
        }}
      />

      <Grid
        className="bg-slate-800 p-5 rounded-2xl"
        isLoading={isLoading}
        error={(!isLoading && !data) || !!error}
      >
        {data?.items?.map((contact) => (
          <Link key={contact.id} href={`/contacts/${contact.id}`}>
            <div className="flex items-center gap-4">
              <img
                src={contact.avatar}
                alt={contact.first_name}
                width={48}
                height={48}
              />
              <span className="flex flex-col gap-2">
                <span className="text-gray-400">
                  {contact.first_name} {contact.last_name}
                </span>
                <span className="text-gray-400 text-xs">
                  <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
                </span>
              </span>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  );
};
