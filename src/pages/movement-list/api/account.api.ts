import Axios from "axios";

import { Account } from "./account.api-model";

const urlIban = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccount = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlIban}/${accountId}`).then(({ data }) => data);
