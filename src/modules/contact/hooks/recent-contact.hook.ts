import { unique } from "../../../common/helpers/array.helper";
import * as Persistence from "../../../common/persistence/persistence";
import { ContactDto } from "../../contacts/apis/dtos/contact.dto";

export const useRecentContacts = () => {
  const visitedContacts =
    Persistence.get<ContactDto[]>("visited-contacts") ?? [];

  return {
    recents: visitedContacts,
    setRecents: (data?: ContactDto) => {
      if (data) {
        Persistence.set(
          "visited-contacts",
          unique(
            [
              {
                id: data.id,
                avatar: data.avatar,
                first_name: data.first_name,
              } as ContactDto,
              ...visitedContacts,
            ],
            "id"
          ).slice(0, 4)
        );
      }
    },
  };
};
