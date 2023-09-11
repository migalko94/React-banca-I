import classes from "./movement-header.component.module.css";

export const MovementListHeaderComponent: React.FC = () => {
  return (
    <div className={classes.headerTable}>
      <span className={classes.headerCell}>FECHA</span>
      <span className={classes.headerCell}>FECHA VALOR</span>
      <span className={classes.headerCell}>DESCRIPCIÓN</span>
      <span className={classes.headerCell}>IMPORTE</span>
      <span className={classes.headerCell}>SALDO DISPONIBLE</span>
    </div>
  );
};
