import { CONTACTS_PER_PAGE } from "./constants/contacts.constant";
import { ContactDto } from "./dtos/contact.dto";
import { ResultSet } from "../../../common/interfaces/result-set.interface";
import { axiosClient } from "../../../common/utils/axios-client";

export const getContacts = async (page: number, query?: string) => {
  const { data } = await axiosClient.get<ResultSet<ContactDto[]>>(
    `/passenger`,
    {
      params: {
        limit: CONTACTS_PER_PAGE,
        skip: page * CONTACTS_PER_PAGE,
        where: query
          ? JSON.stringify({
              first_name: { contains: query },
              // last_name: { contains: query },
              // phone: { contains: query },
            })
          : undefined,
      },
    }
  );
  return data;
};
