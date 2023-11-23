import React from "react";
import classes from "./tournament.module.scss";
import { MatchSchedules } from "@/app/utils/interface";
import moment from "moment";

function TableRow({ match }: { match: MatchSchedules }) {

  return (
    <div className={classes.tableRow}>
      <ul>
        <li>{moment(match.date).format("DD-MM-YYYY")}</li>
        <li>{match.day}</li>
        <li>{match.hour}</li>
        <li>{match.team1}</li>
        <li>{match.team2}</li>
      </ul>
    </div>
  );
}

export default TableRow;
