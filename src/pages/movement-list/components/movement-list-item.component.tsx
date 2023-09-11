import React from "react";

import { MovementVm } from "../movement-list.vm";

import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.description}
      </span>

      <span
        className={`${classes.dataCell} ${classes.alignRight} 
          ${Number(movementItem.amount) >= 0 ? "" : classes.negativeFigure}
        }`}
      >
        {movementItem.amount} €
      </span>

      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.balance} €
      </span>
    </div>
  );
};
