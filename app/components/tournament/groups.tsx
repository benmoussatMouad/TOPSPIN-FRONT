import React from "react";
import classes from "./tournament.module.scss";
import TableRow from "./tableRow";
import { MatchResultsT, MatchSchedulesT } from "@/app/utils/interface";

function Groups({ matchSchedules }: { matchSchedules: MatchSchedulesT }) {
  return (
    <div className={classes.table}>
      <div className={classes.tableHeader}>
        <ul>
          <li>{matchSchedules.date}</li>
          <li>{matchSchedules.day}</li>
          <li>{matchSchedules.hour}</li>
          <li>{matchSchedules.team1}</li>
          <li>{matchSchedules.team2}</li>
        </ul>
      </div>
      <div className={classes.tableContent}>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
    </div>
  );
}

export default Groups;
