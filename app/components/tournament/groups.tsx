import React from "react";
import classes from "./tournament.module.scss";
import TableRow from "./tableRow";

function Groups() {
  return (
    <table className={classes.table}>
      <thead className={classes.tableHeader}>
        <tr>
          <th></th>
          <th>Sets</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th></th>
        </tr>
      </thead>
      <tbody className={classes.tableContent}>
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}

export default Groups;
