"use client";
import React from "react";
import classes from "./tournament.module.scss";
import Link from "next/link";

function TournamentComponent({ translated }: { translated: any }) {
  return (
    <div className={classes.tournament}>
      <div className={classes.buttonsLinks}>
        <Link className="button activeButton" href={"#"}>
          {translated.buttons[0]}
        </Link>
        <Link
          className="button"
          href={
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSShxHTeyeZDRtj-PtMNS8fMOLFxuK8CXp-WSu2Kem_F_IPiSLKz4oE4G8UvqOjrARUVOGSDEfzVmKR/pubhtml"
          }
        >
          {translated.buttons[1]}
        </Link>
        <Link
          className="button"
          href={
            "https://docs.google.com/spreadsheets/d/1O9VTAuREy5HadTlPG_bNCFUz7Xx6SBwrh3Ox_PLshT4/edit#gid=0"
          }
        >
          {translated.buttons[2]}
        </Link>
        <Link
          className="button"
          href={
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTu5cxGgDvkL7JMTpBKIzPjpSq1wSgx1gth6MWrM3xmZK24ImrhT7_3hZR55EWZE_jJWcsd-ZqU66as/pubhtml"
          }
        >
          {translated.buttons[3]}
        </Link>
        <Link
          className="button"
          href={
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmO91kBxs5NqQdCqht3TESkRkOu2ot8hiyiojyk35nCZqxGbZByKwdWuajt7CNLNobImS1YaScXQWq/pubhtml"
          }
        >
          {translated.buttons[4]}
        </Link>
      </div>
      <div className={classes.content}>
        <h2>{translated.rules.title}</h2>
        <p>{translated.rules.p[0]}</p>
        <ul>
          <li>{translated.rules.ul[0].li[0].text}</li>
          <li>
            {translated.rules.ul[0].li[1].text[0]}{" "}
            <span>{translated.rules.ul[0].li[1].text[1]}</span>
          </li>
          <li>{translated.rules.ul[0].li[2].text}</li>
        </ul>
        <p>{translated.rules.p[1]}</p>
        <h3>{translated.teamList.title}</h3>
        <ul>
          <li>
            {translated.teamList.ul[0].text[0]}{" "}
            <span>{translated.teamList.ul[0].text[1]} </span>
            {translated.teamList.ul[0].text[2]}
          </li>
          <li>{translated.teamList.ul[1].text}</li>
          <li>
            <span>{translated.teamList.ul[2].text}</span>
          </li>
          <li>
            {translated.teamList.ul[3].text[0]}
            <span> {translated.teamList.ul[3].text[1]}</span>
          </li>
          <li>{translated.teamList.ul[4].text}</li>
          <li>{translated.teamList.ul[5].text}</li>
          <li>{translated.teamList.ul[6].text}</li>
          <li>{translated.teamList.ul[7].text}</li>
          <li>{translated.teamList.ul[8].text}</li>
        </ul>
        <h3>{translated.responsibilities.title}</h3>
        <ul>
          {translated.responsibilities.ul.map(
            (el: { text: string; isBold: boolean }, index: number) => (
              <li key={index}>
                {el.isBold ? <span>{el.text}</span> : el.text}
              </li>
            )
          )}
        </ul>
        <h3>{translated.removing.title}</h3>
        <ul>
          <li>
            {translated.removing.li[0]}{" "}
            <span> {translated.removing.li[1]} </span>
            {translated.removing.li[2]}
          </li>
        </ul>
        <h3>{translated.leaguesRules.title}</h3>
        <ul>
          {translated.leaguesRules.ul.map((el: any, index: any) => (
            <li key={index} className={classes.listDisc}>
              {el.isBold ? <span>{el.text}</span> : el.text}
            </li>
          ))}
        </ul>
        <h3>{translated.ranking.title}</h3>
        <ul>
          {translated.ranking.ul.map((el: any, index: any) => (
            <li
              key={index}
              className={`${classes.listDisc} ${el.isRed ? classes.redLi : ""}`}
            >
              {Array.isArray(el.text)
                ? el.text.map((el: string, index: number) => (
                    <span className={classes.spanRanking} key={index}>
                      {el}
                    </span>
                  ))
                : el.text}
            </li>
          ))}
        </ul>
        <h3>{translated.additional.title}</h3>
        {translated.additional.p.map((el: string, index: number) => (
          <p className={classes.boldText} key={index}>
            {el}
          </p>
        ))}
        <h3>{translated.rankingEachTeam.title}</h3>
        <ul>
          {translated.rankingEachTeam.ul.map((el: any, index: any) => (
            <li
              key={index}
              className={`${classes.listDisc} ${el.isRed ? classes.redLi : ""}`}
            >
              {Array.isArray(el.text)
                ? el.text.map((el: string, index: number) => (
                    <span className={classes.spanRanking} key={index}>
                      {el}
                    </span>
                  ))
                : el.text}
            </li>
          ))}
        </ul>
        <h3 style={{ marginTop: "1em" }}>{translated.categoryRanking.title}</h3>
        <h3 style={{ marginTop: "2em" }}>
          {translated.categoryRanking.firstLeague.league}
        </h3>
        <h3> {translated.categoryRanking.firstLeague.title}</h3>
        <div className={classes.table}>
          <div>
            <div>
              <div className={classes.ERKEKdouble}>
                {translated.categoryRanking.firstLeague.table.man} DOUBLE
              </div>
              <div className={classes.empty}></div>
              <div className={classes.KADINdouble}>
                {" "}
                {translated.categoryRanking.firstLeague.table.female} DOUBLE
              </div>
              <div className={classes.MIXdouble}>MIX DOUBLE</div>
              <div className={classes.empty}></div>
            </div>
            <div>
              <div className={classes.ERKEKdoubleRow}>
                <div>{translated.categoryRanking.firstLeague.table.man}</div>
                <div className={classes.separator}></div>
                <div>{translated.categoryRanking.firstLeague.table.man}</div>
              </div>
              <div className={classes.emptyRow}>
                {translated.categoryRanking.firstLeague.table.man}
              </div>
              <div className={classes.KADINdoubleRow}>
                {translated.categoryRanking.firstLeague.table.female}
              </div>
              <div>
                <div className={classes.MIXdoubleRow}>MIX</div>
                <div className={classes.MIXdoubleRow}>MIX</div>
                <div className={classes.MIXdoubleRow}>MIX</div>
              </div>
              <div className={classes.MIXdoubleRow}>MIX</div>
            </div>
            <div>
              <div className={classes.ERKEKdoubleCategorie}>
                <div>   M / A+       A+/A+    </div>
                <div className={classes.separator}></div>
                <div>   A / A       A/B     </div>
              </div>
              <div className={classes.EmptyCategorie}>
                   A / B       B/B    
              </div>
              <div className={classes.EmptyCategorie}>
                   A+ / A       A/A    
              </div>
              <div className={classes.EmptyCategorie}>
                M/A+ M/A       <br /> A+/A+ A+/A
              </div>
              <div className={classes.EmptyCategorie}>
                   A / A       A/B    
              </div>
              <div className={classes.EmptyCategorie}>   B / B</div>
              <div className={classes.EmptyCategorie}>   B / B</div>
            </div>
          </div>
        </div>
        <ul>
          <li className={classes.listDisc}>
            <span>
              1M Male and 1M Female players can play on the same day, but in
              this case it is mandatory to play A/B in the 2nd Mix double or M/A
              in the 1st Mix double.
            </span>
          </li>
        </ul>
        <h3 style={{ marginTop: "2em" }}>
          {translated.categoryRanking.secondLeague.league}
        </h3>
        <h3> {translated.categoryRanking.secondLeague.title}</h3>
        <div className={classes.table}>
          <div>
            <div>
              <div className={classes.ERKEKdouble}>
                {translated.categoryRanking.firstLeague.table.man} DOUBLE
              </div>
              <div
                style={{ borderTop: "1px solid black" }}
                className={classes.KADINdouble}
              >
                {translated.categoryRanking.firstLeague.table.female} DOUBLE
              </div>
              <div
                style={{ borderBottom: "1px solid black" }}
                className={classes.MIXdouble}
              >
                MIX DOUBLE
              </div>
            </div>
            <div>
              <div className={classes.ERKEKdoubleRow}>
                <div></div>
                <div className={classes.separator}></div>
                <div></div>
              </div>
              <div className={classes.KADINdoubleRow}></div>
              <div>
                <div className={classes.MIXdoubleRow}></div>
                <div className={classes.MIXdoubleRow}></div>
                <div className={classes.MIXdoubleRow}></div>
              </div>
            </div>
            <div>
              <div className={classes.ERKEKdoubleCategorie}>
                <div>   B/B   B/C   C/C    </div>
                <div className={classes.separator}></div>
                <div>   C/C       C/D     </div>
              </div>
              <div className={classes.EmptyCategorie}>
                   B/C   C/C   B/D    
              </div>
              <div className={classes.EmptyCategorie}>
                   B/B   B/C   C/C    
              </div>
              <div className={classes.EmptyCategorie}>  C/D</div>
              <div className={classes.EmptyCategorie}>   D/D</div>
            </div>
          </div>
        </div>
        <h3 style={{ marginTop: "2em" }}>{translated.playingTheMatch.title}</h3>
        <ul>
          {translated.playingTheMatch.ul.map((el: string, index: number) => (
            <li className={classes.listDisc} key={index}>
              {el}
            </li>
          ))}
        </ul>
        <h3>{translated.matchFormat.title}</h3>
        <ul>
          <li className={classes.listDisc}>{translated.matchFormat.ul[0]}</li>
          <li className={classes.listDisc}>{translated.matchFormat.ul[1]}</li>
        </ul>
        <h3>{translated.pointMatch.title}</h3>
        <ul>
          <li className={classes.listDisc}>{translated.pointMatch.ul[0]}</li>
        </ul>
        <h3>{translated.following.title}</h3>
        <ul>
          {translated.following.ulBullet.map((el: any, index: number) => (
            <li className={classes.listDisc} key={index}>
              {el.text}
            </li>
          ))}
        </ul>
        <ul>
          {translated.following.ul.map((el: any, index: number) => (
            <li key={index}>{el.text}</li>
          ))}
        </ul>
        <h3>{translated.playOff.title}</h3>
        <ul>
          {translated.playOff.ul.map((el: any, index: number) => (
            <li className={classes.listDisc} key={index}>
              <span>{el}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TournamentComponent;
