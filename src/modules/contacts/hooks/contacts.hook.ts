import { useInfiniteQuery } from "@tanstack/react-query";
import { getContacts } from "../apis/contacts.api";

export const useContacts = (query?: string) => {
  return useInfiniteQuery(
    ["contacts", query],
    ({ pageParam }) => getContacts(pageParam, query),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.meta.skipped + lastPage.meta.limit;
      },
    }
  );
};
