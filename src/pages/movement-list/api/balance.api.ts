import Axios from "axios";

import { Account } from "@/pages/account-list/api";

const urlIban = `${import.meta.env.VITE_BASE_API_URL}/account-list/`;

export const getBalance = (accountId: string): Promise<string | number> =>
  Axios.get<Account>(`${urlIban}${accountId}`).then(({ data }) => data.balance);
