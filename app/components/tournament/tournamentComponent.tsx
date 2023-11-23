import React from "react";
import Groups from "./groups";
import classes from "./tournament.module.scss";
import Resulte from "./resulte";
import {
  MatchResultsT,
  MatchSchedules,
  MatchSchedulesT,
} from "@/app/utils/interface";

async function getTournamentData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`);
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

  const matchGroups = [];
  for (let i = 0; i < matches.length; i += 7) {
    matchGroups.push(matches.slice(i, i + 7));
  }

  return (
    <div className={classes.tournament}>
      <div>
        {matchGroups.map((el: MatchSchedules[], index) => (
          <Groups match={el} key={index} matchSchedules={matchSchedules} />
        ))}
      </div>
      <div>
        {matchGroups.map((el: MatchSchedules[], index) => (
          <Resulte match={el} key={index} resulte={resulte} />
        ))}
      </div>
    </div>
  );
}

export default TournamentComponent;
