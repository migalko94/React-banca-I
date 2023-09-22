import React from "react";
import { useParams } from "react-router-dom";

import { AppLayout } from "@/layouts";
import { MovementListTableComponent } from "./components";
import { getMovements, getAccount } from "./api";

import { MovementVm } from "./movement-list.vm";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

import classes from "./movement-list.page.module.css";
import { Account, createEmptyAccount } from "./account.vm";

export const MovementListPage: React.FC = () => {
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      try {
        getMovements(id).then((result) => {
          const movements = mapMovementListFromApiToVm(result);
          setMovementList(movements);
        });
      } catch (error) {
        throw new Error("Error al cargar los movimientos");
      }
    }
  }, []);

  React.useEffect(() => {
    if (id) {
      try {
        getAccount(id).then((result) => setAccount(result));
      } catch (error) {
        throw new Error("Error al cargar el IBAN");
      }
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <span>
            <p className={classes.balanceTitle}>SALDO DISPONIBLE</p>
            <p className={classes.balanceFigure}>{account.balance} €</p>
          </span>
        </div>
        <div className={classes.subtitle}>
          <p>Alias: {account.name}</p>
          <p>IBAN: {account.iban}</p>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
