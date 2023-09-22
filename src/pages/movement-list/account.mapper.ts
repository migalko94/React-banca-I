import * as apiModel from "./api/account.api-model";
import * as viewModel from "./account.vm";

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.Account => ({
  iban: account.iban,
  name: account.name,
  balance: account.balance,
});
