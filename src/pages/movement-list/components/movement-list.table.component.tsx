import { MovementVm } from "../movement-list.vm";
import { MovementListHeaderComponent } from "./movement-header.component";
import { MovementListItemComponent } from "./movement-list-item.component";

import classes from "./movement-list-table.component.module.css";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <MovementListHeaderComponent />
        {movementList.map((movement) => (
          <MovementListItemComponent
            key={movement.id}
            movementItem={movement}
          />
        ))}
      </div>
    </>
  );
};
