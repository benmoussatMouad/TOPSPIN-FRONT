import React from "react";
import Groups from "./groups";
import classes from "./tournament.module.scss";
import { useTranslations } from "next-intl";

function TournamentComponent() {
  const t = useTranslations("LeagueInfo");

  return (
    <div className={classes.tournament}>
      <div>
        <h3>{t("tournaments.bilkent")}</h3>
        <Groups />
        <Groups />
        <Groups />
        <Groups />
        <Groups />
      </div>
      <div>
        <h3>{t("tournaments.Cankaya")}</h3>
        <Groups />
        <Groups />
        <Groups />
        <Groups />
        <Groups />
      </div>
    </div>
  );
}

export default TournamentComponent;
