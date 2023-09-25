import Axios from "axios";

import { Movement, Account } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

const urlIban = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccount = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlIban}/${accountId}`).then(({ data }) => data);
