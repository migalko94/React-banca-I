import React from "react";

import { Account, AccountFormErrors } from "@/pages/account/account.vm";

import classes from "./select-component.module.css";

interface Props {
  errors: AccountFormErrors;
  account: Account;
  setAccount: (account: Account) => void;
}

const ACTION_NONE = "";
const ACTION_CHECKING_ACCOUNT = "1";
const ACTION_SAVINGS_ACCOUNT = "2";

export const SelectComponent: React.FC<Props> = (props) => {
  const { errors, account, setAccount } = props;

  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    switch (e.target.value) {
      case ACTION_NONE:
      case ACTION_CHECKING_ACCOUNT:
      case ACTION_SAVINGS_ACCOUNT:
        setAccount({ ...account, type: e.target.value });
        break;
    }
  };

  return (
    <div className={` ${classes.selectContainer}`}>
      <p>Tipo de cuenta:</p>
      <select
        className={`${classes.select} ${errors.type ? classes.inputError : ""}`}
        onChange={handleSelectedOptionChange}
      >
        <option value={ACTION_NONE}>Seleccionar</option>
        <option value={ACTION_CHECKING_ACCOUNT}>Cuenta corriente</option>
        <option value={ACTION_SAVINGS_ACCOUNT}>Cuenta de ahorro</option>
      </select>
      {errors.type && <p className={classes.error}>{errors.type}</p>}
    </div>
  );
};
