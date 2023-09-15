import * as apiModel from "./api/account-api.model";
import * as viewModel from "./account.vm";

export const mapAccountFromVmToApi = (
  account: viewModel.Account
): apiModel.Account => ({
  type: account.type,
  name: account.name,
});
