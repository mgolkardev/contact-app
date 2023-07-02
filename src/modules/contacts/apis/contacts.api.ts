import { CONTACTS_PER_PAGE } from "./constants/contacts.constant";
import { ContactDto } from "./dtos/contact.dto";
import { ResultSet } from "../../../common/interfaces/result-set.interface";
import { axiosClient } from "../../../common/utils/axios-client";
import { isNumeric } from "../../../common/helpers/number.helper";

export const getContacts = async (page: number, query?: string) => {
  const { data } = await axiosClient.get<ResultSet<ContactDto[]>>(
    `/passenger`,
    {
      params: {
        limit: CONTACTS_PER_PAGE,
        skip: page,
        where: query
          ? JSON.stringify(
              isNumeric(query)
                ? {
                    phone: { contains: query },
                  }
                : {
                    first_name: { contains: query },
                  }
            )
          : undefined,
      },
    }
  );
  return data;
};
