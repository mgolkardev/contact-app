import { useQuery } from "@tanstack/react-query";
import { getContact } from "../apis/contact.api";

export const useContact = (id: number) => {
  return useQuery(["contact", id], () => getContact(id));
};
