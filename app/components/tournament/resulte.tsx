import React from "react";
import classes from "./tournament.module.scss";
import ResulteTableRow from "./resulteTableRow";
import { MatchResultsT, MatchSchedules } from "@/app/utils/interface";

function Resulte({
  resulte,
  match,
}: {
  resulte: MatchResultsT;
  match: MatchSchedules[];
}) {
  return (
    <div className={classes.table}>
      <div className={classes.tableHeader}>
        <ul>
          <li>{resulte.team1}</li>
          <li>{resulte.team2}</li>
        </ul>
      </div>
      <div className={classes.tableContent}>
        {match.map((el) => (
          <ResulteTableRow resulte={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default Resulte;
