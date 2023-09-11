import Axios from "axios";

import { Account } from "@/pages/account-list/api";

const urlIban = `${import.meta.env.VITE_BASE_API_URL}/account-list/`;

export const getIban = (accountId: string): Promise<string> =>
  Axios.get<Account>(`${urlIban}${accountId}`).then(({ data }) => data.iban);
