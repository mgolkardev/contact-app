import { axiosClient } from "../../../common/utils/axios-client";
import { ContactDto } from "../../contacts/apis/dtos/contact.dto";

export const getContact = async (id: number) => {
  const { data } = await axiosClient.get<ContactDto>(`/passenger/${id}`);
  return data;
};
