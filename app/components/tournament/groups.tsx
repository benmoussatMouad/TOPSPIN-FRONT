import React from "react";
import classes from "./tournament.module.scss";
import TableRow from "./tableRow";
import {
  MatchResultsT,
  MatchSchedules,
  MatchSchedulesT,
} from "@/app/utils/interface";

function Groups({
  matchSchedules,
  match,
}: {
  matchSchedules: MatchSchedulesT;
  match: MatchSchedules[];
}) {
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
        {match.map((el: MatchSchedules) => (
          <TableRow match={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default Groups;
