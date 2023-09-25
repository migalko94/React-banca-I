import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount.toString(),
    balance: movement.balance.toString(),
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
  }));

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.Account => ({
  iban: account.iban,
  name: account.name,
  balance: account.balance,
});
