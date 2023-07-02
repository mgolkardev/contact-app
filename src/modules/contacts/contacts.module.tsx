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
        className="bg-white p-5"
        isLoading={isLoading}
        error={(!isLoading && !data) || data?.meta.total === 0 || !!error}
      >
        {data?.items?.map((contact) => (
          <Link key={contact.id} href={`/contact/${contact.id}`}>
            <div className="flex items-center gap-4">
              <img
                src={contact.avatar}
                alt={contact.first_name}
                width={48}
                height={48}
              />
              <span className="flex flex-col gap-2">
                <span className="text-black">
                  {contact.first_name} {contact.last_name}
                </span>
                <span className="text-black text-xs">
                  {contact.phone}
                </span>
              </span>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  );
};
