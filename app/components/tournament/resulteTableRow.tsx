import React from "react";
import classes from "./tournament.module.scss";
import { MatchSchedules } from "@/app/utils/interface";

function ResulteTableRow({ resulte }: { resulte: MatchSchedules }) {

  return (
    <div className={classes.tableRowResulte}>
      <ul>
        <li>{resulte.team1MatchResult[0].team}</li>
        <li>{resulte.team1MatchResult[0].result}</li>
      </ul>
      <ul>
        <li>{resulte.team2MatchResult[0].team}</li>
        <li>{resulte.team1MatchResult[0].result}</li>
      </ul>
    </div>
  );
}

export default ResulteTableRow;
