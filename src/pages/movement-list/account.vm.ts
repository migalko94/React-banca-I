export interface Account {
  iban: string;
  name: string;
  balance: number;
}

export const createEmptyAccount = (): Account => ({
  iban: "",
  name: "",
  balance: -1,
});
