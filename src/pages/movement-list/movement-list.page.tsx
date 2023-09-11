import React from "react";

import { useParams } from "react-router-dom";

import { AppLayout } from "@/layouts";

import { MovementListTableComponent } from "./components/movement-list.table.component";
import { MovementVm } from "./movement-list.vm";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { getIban } from "./api/iban.api";

import classes from "./movement-list.page.module.css";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [iban, setIban] = React.useState<string>("");
  const [balance, setBalance] = React.useState<string>("");

  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      try {
        getMovements(id).then((result) => {
          const movements = mapMovementListFromApiToVm(result);
          const lastBalance = movements[0].balance;
          setMovementList(movements);
          setBalance(lastBalance);
        });
      } catch (error) {
        throw new Error("Error al cargar los movimientos");
      }
    }
  }, []);

  React.useEffect(() => {
    if (id) {
      try {
        getIban(id).then((result) => setIban(result));
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
            <p className={classes.balanceFigure}>{balance} €</p>
          </span>
        </div>
        <div className={classes.subtitle}>
          <p>Alias: Gastos mes</p>
          <p>IBAN: {iban}</p>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
