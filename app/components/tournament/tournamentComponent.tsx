import React from "react";
import Groups from "./groups";
import classes from "./tournament.module.scss";
import Resulte from "./resulte";
import { MatchResultsT, MatchSchedulesT } from "@/app/utils/interface";

async function getTournamentData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function TournamentComponent({
  matchSchedules,
  resulte,
}: {
  matchSchedules: MatchSchedulesT;
  resulte: MatchResultsT;
}) {
  const { matches } = await getTournamentData();

  return (
    <div className={classes.tournament}>
      <div>
        <Groups  matchSchedules={matchSchedules} />
      </div>
      <div>
        <Resulte resulte={resulte} />
      </div>
    </div>
  );
}

export default TournamentComponent;
