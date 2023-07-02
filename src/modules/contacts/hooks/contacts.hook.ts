import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../apis/contacts.api";

export const useContacts = (page: number = 0, query?: string) => {
  return useQuery(["contacts", page, query], () => getContacts(page, query));
};
