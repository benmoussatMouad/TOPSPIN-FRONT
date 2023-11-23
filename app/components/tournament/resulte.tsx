import React from "react";
import classes from "./tournament.module.scss";
import ResulteTableRow from "./resulteTableRow";
import { MatchResultsT } from "@/app/utils/interface";

function Resulte({ resulte }: { resulte: MatchResultsT }) {
  return (
    <div className={classes.table}>
      <div className={classes.tableHeader}>
        <ul>
          <li>{resulte.team1}</li>
          <li>{resulte.team2}</li>
        </ul>
      </div>
      <div className={classes.tableContent}>
        <ResulteTableRow />
        <ResulteTableRow />
        <ResulteTableRow />
        <ResulteTableRow />
        <ResulteTableRow />
        <ResulteTableRow />
        <ResulteTableRow />
      </div>
    </div>
  );
}

export default Resulte;
