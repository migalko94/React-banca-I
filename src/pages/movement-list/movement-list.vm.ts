export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
}

export interface Account {
  iban: string;
  name: string;
  balance: number;
}

export const createEmptyAccount = (): Account => ({
  iban: "",
  name: "",
  balance: 0,
});
