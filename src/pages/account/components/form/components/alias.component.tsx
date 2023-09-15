import React from "react";

import { Account, AccountFormErrors } from "@/pages/account/account.vm";

import classes from "./alias.component.module.css";

interface Props {
  errors: AccountFormErrors;
  account: Account;
  setAccount: (account: Account) => void;
}

export const AliasComponent: React.FC<Props> = (props) => {
  const { errors, account, setAccount } = props;

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={` ${classes.aliasContainer}`}>
      <p>Alias:</p>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleFieldChange}
        className={errors.name ? classes.inputError : ""}
        placeholder=""
      />
      {errors.name && <p className={classes.error}>{errors.name}</p>}
    </div>
  );
};
