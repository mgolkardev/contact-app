import { axiosClient } from "common/utils/axios-client";
import { CONTACTS_PER_PAGE } from "./constants/contacts.constant";
import { ContactDto } from "./dtos/contact.dto";

export const getContacts = async (page: number, query?: string) => {
  const { data } = await axiosClient.get<ContactDto[]>(`/contacts`, {
    params: {
      limit: CONTACTS_PER_PAGE,
      skip: page * CONTACTS_PER_PAGE,
      where: query
        ? {
            first_name: { contains: query },
            last_name: { contains: query },
            phone: { contains: query },
          }
        : undefined,
    },
  });
  return data;
};
