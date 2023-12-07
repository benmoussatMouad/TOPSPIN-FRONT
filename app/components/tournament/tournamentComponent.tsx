"use client";
import React from "react";
import Groups from "./groups";
import classes from "./tournament.module.scss";
import Resulte from "./resulte";
import {
  MatchResultsT,
  MatchSchedules,
  MatchSchedulesT,
} from "@/app/utils/interface";
import { getAllMatches } from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";

function TournamentComponent({
  matchSchedules,
  resulte,
}: {
  matchSchedules: MatchSchedulesT;
  resulte: MatchResultsT;
}) {
  const { data } = useQuery({
    queryKey: ["matches"],
    queryFn: () => getAllMatches(),
  });


  const matchGroups = [];
  for (let i = 0; i < data?.matches?.length; i += 7) {
    matchGroups.push(data?.matches.slice(i, i + 7));
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
