import React from "react";

import { AppLayout } from "@/layouts";

import { AccountFormComponent } from "./components";

import classes from "./account.page.module.css";

export const AccountPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <AccountFormComponent />
      </div>
    </AppLayout>
  );
};
