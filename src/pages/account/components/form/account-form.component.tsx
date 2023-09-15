import React from "react";
import { appRoutes } from "@/core/router";
import { useNavigate } from "react-router-dom";

import { Account } from "@/pages/account/account.vm";
import {
  mapAccountFromVmToApi,
  AccountFormErrors,
  createEmptyAccount,
  createEmptyAccountformErrors,
  validateForm,
} from "@/pages/account";
import { saveAccount } from "@/pages/account/api";
import { AliasComponent, SelectComponent } from "./components";

import classes from "./account-form.component.module.css";

export const AccountFormComponent: React.FC = () => {
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());
  const [errors, setErrors] = React.useState<AccountFormErrors>(
    createEmptyAccountformErrors()
  );

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validateForm(account);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      const apiAccount = mapAccountFromVmToApi(account);
      saveAccount(apiAccount);
      navigate(appRoutes.accountList);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={` ${classes.formContainer}`}>
      <SelectComponent
        account={account}
        setAccount={setAccount}
        errors={errors}
      />
      <AliasComponent
        errors={errors}
        account={account}
        setAccount={setAccount}
      />
      <button type="submit">GUARDAR</button>
    </form>
  );
};
