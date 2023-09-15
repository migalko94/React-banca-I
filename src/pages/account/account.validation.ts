import { Account } from "./api";
import { AccountFormErrors, createEmptyAccountformErrors } from "./account.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: AccountFormErrors;
}

export const validateForm = (account: Account): ValidationResult => {
  let validationResult = {
    succeeded: true,
    errors: createEmptyAccountformErrors(),
  };

  if (!account.name.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      name: "Debe informar el campo alias",
    };
    validationResult.succeeded = false;
  }

  if (!account.type.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      type: "Debe informar el tipo de cuenta",
    };
    validationResult.succeeded = false;
  }

  return validationResult;
};
