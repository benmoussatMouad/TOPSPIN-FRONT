"use client";
import React, { useState } from "react";
import classes from "./tournament.module.scss";
import Link from "next/link";

function TournamentComponent({
  translated,
  page,
}: {
  translated: any;
  page: string;
}) {
  const [pageContent, setPageContent] = useState("");

  const renderButtons = () => {
    switch (page) {
      case "2023-topspin-cankaya-winter-league":
        return (
          <div className={classes.linksWinterCankayaLeague}>
            <div>
              <Link
                className={`button`}
                href={
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1CznQr_m_Sw98pMnOL5nfVSxM96OaSjcjJo07xMJMbR3QVcoC6pfs2kqB8nEIvpkcbgHrBhosdTNL/pubhtml"
                }
              >
                {translated[0].buttons[0].text}
              </Link>
              <Link
                className={`button`}
                href={
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR8-t5Fc3yB7d4tUwMVETF0V94-5YRelXVekMSqRhG9AtlIFHjjHjd5VgHruBxqzizurnCdNwSRoCQh/pubhtml"
                }
              >
                {translated[0].buttons[1].text}
              </Link>
              <button
                onClick={() => setPageContent("A-LEAGUE")}
                className={`button ${
                  pageContent !== "B-LEAGUE" ? "activeButton" : ""
                } `}
              >
                {translated[0].buttons[2].text}
              </button>
              <button
                onClick={() => setPageContent("B-LEAGUE")}
                className={`button ${
                  pageContent == "B-LEAGUE" ? "activeButton" : ""
                } `}
              >
                {translated[0].buttons[3].text}
              </button>
              <Link
                className={`button`}
                href={
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTV968qI4ixYO1xRtmxGIMnQ_Duv8p86FaXUJfiapChqIERZGYp6rO4-yWgNvc5x5GSLTrmkirqpsRO/pubhtml"
                }
              >
                {translated[0].buttons[4].text}
              </Link>
            </div>
            <div>
              <div>
                <Link
                  className={`button`}
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSf5nINPfPfX39oEuyOKZXKY-xpILXz1zmKr5Jxkh1dD4Ru9WQ/viewform"
                  }
                >
                  {translated[0].buttons[5].text}
                </Link>
              </div>
              <div>
                <Link
                  className={`button`}
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSdKeSdYQGMjZjkGx2yXN4b2bgxKbgKfoy7rh9i8LJfjacMs_Q/viewform"
                  }
                >
                  {translated[0].buttons[6].text}
                </Link>
              </div>
            </div>
          </div>
        );
      case "2023-topspin-summer-bilkent-league":
        return (
          <>
            <div className={classes.summerBilkentLeague}>
              <div>
                <button
                  onClick={() => setPageContent("Man1stRules")}
                  className={`button ${
                    pageContent === "Man1stRules" ? "activeButton" : ""
                  } `}
                >
                  MENS 1ST LEAGUE SUMMER LEAGUE RULES
                </button>
                <button
                  className={`button ${
                    pageContent === "Women1stRules" ? "activeButton" : ""
                  } `}
                  onClick={() => setPageContent("Women1stRules")}
                >
                  WOMENS 1ST LEAGUE SUMMER LEAGUE RULES
                </button>
              </div>
              <div>
                <button
                  className={`button ${
                    pageContent === "Man2stRules" ? "activeButton" : ""
                  } `}
                  onClick={() => setPageContent("Man2stRules")}
                >
                  MENS 2ND LEAGUE SUMMER LEAGUE RULES{" "}
                </button>
                <button
                  onClick={() => setPageContent("Women2stRules")}
                  className={`button ${
                    pageContent === "Women2stRules" ? "activeButton" : ""
                  } `}
                >
                  WOMENS 2ND LEAGUE SUMMER LEAGUE RULES
                </button>
              </div>
              <div>
                <button
                  onClick={() => setPageContent("")}
                  className={`button ${
                    pageContent === "" ? "activeButton" : ""
                  } `}
                >
                  General rules
                </button>
                <Link
                  className={`button`}
                  href={
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ66DGLzzZ5HWkAH3eTpVnZ9uAkf20fRp2r1SLArYUqE7JrZvs6hNcDHjBOXMRs--Eu2x9RzPLdFZ4W/pubhtml"
                  }
                >
                  Team Lists
                </Link>
                <Link
                  className={`button`}
                  href={
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1CznQr_m_Sw98pMnOL5nfVSxM96OaSjcjJo07xMJMbR3QVcoC6pfs2kqB8nEIvpkcbgHrBhosdTNL/pubhtml"
                  }
                >
                  Match Schedule
                </Link>
                <Link
                  className={`button`}
                  href={
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTAYR-p1XyNz7xM3mOVH_fFDOsxvHb2KusR3G50TLUZ7v-JLHLcmg2-_kqn0mC-h_Pd8Qz9fZvZEv_L/pubhtml"
                  }
                >
                  Standings
                </Link>
                <Link
                  className={`button`}
                  href={
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSp3rczvSnPBD4ua-1zc1hL0WRrYvQGhQSha7e1lS4uk4MEIBTcwJ0zZlJqkIzo8j8U_bjY9qeriLWf/pubhtml"
                  }
                >
                  Match results
                </Link>
                <Link
                  className={`button`}
                  href={
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTRdDyRS6ElgXiy4ooeBIutz3X3aJafsa6rU42FJR6a7RQfbVwVu-_U_-j1N2aCtEjCgL7ode6E5bYS/pubhtml"
                  }
                >
                  Play-Off Fixtures{" "}
                </Link>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            {translated.buttons.map((el: any, index: number) => (
              <Link
                className={`button ${el.active ? "activeButton" : ""}`}
                href={"#"}
                key={index}
              >
                {el.text}
              </Link>
            ))}
          </>
        );
    }
  };

  const renderContent = () => {
    switch (page) {
      case "2023-topspin-bilkent-winter-league":
        return (
          <>
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
                  className={`${classes.listDisc} ${
                    el.isRed ? classes.redLi : ""
                  }`}
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
                  className={`${classes.listDisc} ${
                    el.isRed ? classes.redLi : ""
                  }`}
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
            <h3 style={{ marginTop: "1em" }}>
              {translated.categoryRanking.title}
            </h3>
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
                    <div>
                      {translated.categoryRanking.firstLeague.table.man}
                    </div>
                    <div className={classes.separator}></div>
                    <div>
                      {translated.categoryRanking.firstLeague.table.man}
                    </div>
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
                  this case it is mandatory to play A/B in the 2nd Mix double or
                  M/A in the 1st Mix double.
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
            <h3 style={{ marginTop: "2em" }}>
              {translated.playingTheMatch.title}
            </h3>
            <ul>
              {translated.playingTheMatch.ul.map(
                (el: string, index: number) => (
                  <li className={classes.listDisc} key={index}>
                    {el}
                  </li>
                )
              )}
            </ul>
            <h3>{translated.matchFormat.title}</h3>
            <ul>
              <li className={classes.listDisc}>
                {translated.matchFormat.ul[0]}
              </li>
              <li className={classes.listDisc}>
                {translated.matchFormat.ul[1]}
              </li>
            </ul>
            <h3>{translated.pointMatch.title}</h3>
            <ul>
              <li className={classes.listDisc}>
                {translated.pointMatch.ul[0]}
              </li>
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
          </>
        );
      case "2023-topspin-cankaya-winter-league":
        return (
          <>
            <h2>
              {pageContent === "B-LEAGUE"
                ? translated[1].title
                : translated[0].title}
            </h2>
            <p>
              {translated[0].dates.startDate}
              <span className={classes.boldText}> 26.10.2023</span>{" "}
            </p>
            <p>
              {translated[0].dates.deadline}
              <span className={classes.boldText}> 06.11.2023</span>{" "}
            </p>
            <div className={classes.contentTable}>
              <div>
                <div>#</div>
                <div>Contents:</div>
              </div>
              {translated[0].table?.map((el: string, index: number) => (
                <div key={index}>
                  <div>{index + 1}</div>
                  <div>{el}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "1em 0" }}>
              <h3>1. {translated[0].summary.title}</h3>
              <p>1. {translated[0].summary.description}</p>
            </div>
            <div style={{ padding: "1em 0" }}>
              <h3>2. {translated[0].details.title}</h3>
              {pageContent === "B-LEAGUE" ? (
                <ul>
                  {translated[1].details.description.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
              ) : (
                <p>1. {translated[0].details.description}</p>
              )}
            </div>
            <div style={{ padding: "1em 0" }}>
              <h3>
                3. {translated[pageContent === "B-LEAGUE" ? 1 : 0].rules.title}
              </h3>
              <ul>
                {translated[pageContent === "B-LEAGUE" ? 1 : 0].rules.li.map(
                  (el: string, index: number) => (
                    <li key={index}>{el}</li>
                  )
                )}
              </ul>
            </div>
            <h3>4. {translated[0].category.title}</h3>
            <div className={classes.contentTable}>
              <div>
                <div>
                  {
                    translated[pageContent === "B-LEAGUE" ? 1 : 0].category
                      .colomn[0]
                  }
                </div>
                <div className={classes.displayFlex}>
                  {
                    translated[pageContent === "B-LEAGUE" ? 1 : 0].category
                      .colomn2[0]
                  }
                </div>
              </div>
              {translated[pageContent === "B-LEAGUE" ? 1 : 0].category.colomn
                .slice(1)
                .map((el: string, index: number) => (
                  <div key={index + 1}>
                    <div>{el}</div>
                    {/* Check if there is a corresponding element in colomn2 array */}
                    {translated[pageContent === "B-LEAGUE" ? 1 : 0].category
                      .colomn2[index + 1] && (
                      <div>
                        {Array.isArray(
                          translated[pageContent === "B-LEAGUE" ? 1 : 0]
                            .category.colomn2[index + 1]
                        )
                          ? translated[
                              pageContent === "B-LEAGUE" ? 1 : 0
                            ].category.colomn2[index + 1].map(
                              (item: any, i: number) => (
                                <p style={{ padding: ".5em 0" }} key={i}>
                                  {item}
                                </p>
                              )
                            )
                          : translated[pageContent === "B-LEAGUE" ? 1 : 0]
                              .category.colomn2[index + 1]}
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <h3>5. {translated[0].ranking.title}</h3>
            <div className={classes.rankingRow}>
              <div>
                {translated[
                  pageContent === "B-LEAGUE" ? 1 : 0
                ].ranking.table.row.map((el: string, index: number) => (
                  <div key={index}>{el}</div>
                ))}
              </div>
              <div>
                {translated[
                  pageContent === "B-LEAGUE" ? 1 : 0
                ].ranking.table.row2.map((el: string, index: number) => (
                  <div key={index}>{el}</div>
                ))}
              </div>
              <div>
                {translated[
                  pageContent === "B-LEAGUE" ? 1 : 0
                ].ranking.table.row3.map((el: string, index: number) => (
                  <div key={index}>{el}</div>
                ))}
              </div>
              <div>
                {translated[
                  pageContent === "B-LEAGUE" ? 1 : 0
                ].ranking.table.row4.map((el: string, index: number) => (
                  <div key={index}>{el}</div>
                ))}
              </div>
              <div>
                {translated[
                  pageContent === "B-LEAGUE" ? 1 : 0
                ].ranking.table.row5.map((el: string, index: number) => (
                  <div key={index}>{el}</div>
                ))}
              </div>
            </div>
            <h3>6. {translated[0].matchFormat.title}</h3>
            <ul>
              {translated[0].matchFormat.li.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>7. {translated[0].matchesPlayed.title}</h3>
            <ul>
              {translated[
                pageContent === "B-LEAGUE" ? 1 : 0
              ].matchesPlayed.li.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>8. {translated[0].pointsSystem.title}</h3>
            <ul>
              {translated[0].pointsSystem.li.map(
                (el: string, index: number) => (
                  <li className={index > 1 ? classes.listDisc : ""} key={index}>
                    {el}
                  </li>
                )
              )}
            </ul>
            <h3>9. {translated[0].placement.title}</h3>
            <ul>
              <li>{translated[0].placement.li[0]}</li>
              <li>{translated[0].placement.li[1]}</li>
              <li>{translated[0].placement.li[2]}</li>
              <li className={classes.listDisc}>
                {translated[0].placement.li[3]}
              </li>
              <li className={classes.listDisc}>
                {translated[0].placement.li[4]}
                <span>{translated[0].placement.li[5]}</span>
              </li>
              <li className={classes.listDisc}>
                {translated[0].placement.li[6]}
              </li>
            </ul>
            <ul>
              {translated[0].placement.list.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>10. {translated[0].responsibilities.title}</h3>
            <ul>
              {translated[0].responsibilities.li.map(
                (el: string, index: number) => (
                  <li key={index}>{el}</li>
                )
              )}
            </ul>
            <h3>11. {translated[0].removing.title}</h3>
            <ul>
              <li>
                {translated[0].removing.li[0]}
                <span> {translated[0].removing.li[1]}</span>
              </li>
            </ul>
            <h3>12. {translated[0].detailsPlaysOff.title}</h3>
            <ul>
              {translated[0].detailsPlaysOff.li.map(
                (el: string, index: number) => (
                  <li key={index}>{el}</li>
                )
              )}
            </ul>
            <h3>13. {translated[0].application.title}</h3>
            <ul>
              {translated[0].application.li.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </>
        );
      case "2023-topspin-summer-bilkent-league":
        const getIndex: any = () => {
          if (pageContent === "Man1stRules") {
            return 1;
          }
          if (pageContent === "Women1stRules") {
            return 2;
          }
          if (pageContent === "Man2stRules") {
            return 3;
          }
          if (pageContent === "Women2stRules") {
            return 4;
          }
        };
        return (
          <>
            {pageContent === "" ? (
              <>
                <h2>{translated[0].title}</h2>
                <ul>
                  {translated[0].li.map((el: string, index: number) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
                <h3>{translated[0].captains}</h3>
                <h3>1. {translated[0].points.title}</h3>
                <ul>
                  {translated[0].points.li.map((el: string, index: number) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
                <h3>2. {translated[0].following.title}</h3>
                <ul>
                  {translated[0].following.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
                <h3>3. {translated[0].matchFormat.title} </h3>
                <ul>
                  {translated[0].matchFormat.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
                <h3>4. {translated[0].teamList.title} </h3>
                <ul>
                  {translated[0].teamList.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
                <h3>5. {translated[0].responsibility.title} </h3>
                <ul>
                  {translated[0].responsibility.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
                <h3>6. {translated[0].removing.title} </h3>
                <ul>
                  {translated[0].removing.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
                <h3>7. {translated[0].theOrder.title} </h3>
                <ul>
                  {translated[0].theOrder.li.map(
                    (el: string, index: number) => (
                      <li
                        style={{
                          paddingTop:
                            index === 2 ||
                            index === 5 ||
                            index === 8 ||
                            index === 10 ||
                            index === 11 ||
                            index === 14 ||
                            index === 17 ||
                            index === 19
                              ? "1em"
                              : "",
                        }}
                        key={index}
                        className={
                          index !== 0 && index !== 1 ? classes.listDisc : ""
                        }
                      >
                        {el}
                      </li>
                    )
                  )}
                </ul>
                <h3>8. {translated[0].postpone.title} </h3>
                <ul>
                  {translated[0].postpone.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
                <h3>9. {translated[0].detailsPlayOff.title} </h3>
                <ul>
                  {translated[0].detailsPlayOff.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
              </>
            ) : (
              <>
                <h2>{translated[getIndex()].title}</h2>
                <ul>
                  {translated[getIndex()].li.map(
                    (el: string, index: number) => (
                      <li
                        className={index === 0 ? classes.boldText : ""}
                        key={index}
                      >
                        {el}
                      </li>
                    )
                  )}
                </ul>
                <h3>{translated[getIndex()].singleMatch.title}</h3>
                <div className={classes.summerBilkentLeagueTable}>
                  {translated[getIndex()].singleMatch.table.map(
                    (rowData: any, rowIndex: number) => (
                      <div key={rowIndex}>
                        {rowData.map((cellData: string, colIndex: number) => (
                          <div key={colIndex}>{cellData}</div>
                        ))}
                      </div>
                    )
                  )}
                </div>
                <h3>{translated[getIndex()].category.title}</h3>
                <ul>
                  {translated[getIndex()].category.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
                <ul style={{ paddingTop: ".1em" }}>
                  {translated[getIndex()].category.list.map(
                    (el: string, index: number) => (
                      <li className={classes.listDisc} key={index}>
                        {el}
                      </li>
                    )
                  )}
                </ul>
                <h3>{translated[getIndex()].doubleMatch.title}</h3>
                <div className={classes.summerBilkentLeagueTable}>
                  {translated[getIndex()].doubleMatch.table.map(
                    (rowData: any, rowIndex: number) => (
                      <div key={rowIndex}>
                        {rowData.map((cellData: string, colIndex: number) => (
                          <div key={colIndex}>{cellData}</div>
                        ))}
                      </div>
                    )
                  )}
                </div>
                <ul>
                  {translated[getIndex()].doubleMatch.li.map(
                    (el: string, index: number) => (
                      <li key={index}>{el}</li>
                    )
                  )}
                </ul>
              </>
            )}
          </>
        );
      case "2023-topspin-summer-cankaya-league":
        return (
          <>
            <h2>{translated.title}</h2>
            <p>
              {translated.dates.startDate}
              <span className={classes.boldText}> 25.05.2023</span>{" "}
            </p>
            <p>
              {translated.dates.deadline}
              <span className={classes.boldText}> 05.06.2023</span>{" "}
            </p>
            <p>
              {translated.dates.Tournament}
              <span className={classes.boldText}> 10.06.2023</span>{" "}
            </p>
            <div className={classes.contentTable}>
              <div>
                <div>#</div>
                <div>Contents:</div>
              </div>
              {translated.table?.map((el: string, index: number) => (
                <div key={index}>
                  <div>{index + 1}</div>
                  <div>{el}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "1em 0" }}>
              <h3>1. {translated.summary.title}</h3>
              <p>1. {translated.summary.description}</p>
            </div>
            <div style={{ padding: "1em 0" }}>
              <h3>2. {translated.details.title}</h3>
              <ul>
                <li>{translated.details.li[0]}</li>
                <li>{translated.details.li[1]}</li>
              </ul>
              <ul>
                {translated.details.leagueA.map((el: string, index: number) => (
                  <li className={classes.listDisc} key={index}>
                    {el}
                  </li>
                ))}
              </ul>
              <ul>
                <li>{translated.details.li[2]}</li>
              </ul>
              <ul>
                {translated.details.leagueB.map((el: string, index: number) => (
                  <li className={classes.listDisc} key={index}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: "1em 0" }}>
              <h3>3. {translated.rules.title}</h3>
              <ul>
                {translated.rules.li.map((el: string, index: number) => (
                  <li
                    className={
                      index !== 0 && index !== 1 ? classes.listDisc : ""
                    }
                    key={index}
                  >
                    {el}
                  </li>
                ))}
              </ul>
              <div className={classes.summerCankayaLeagueTable}>
                <div>
                  <div>{translated.rules.table[0]}</div>
                  <div>{translated.rules.table[1]}</div>
                  <div>{translated.rules.table[2]}</div>
                </div>
              </div>
              <ul>
                {translated.rules.list.map((el: string, index: number) => (
                  <li
                    className={
                      index === 0 || index === 5 || index === 6
                        ? classes.listDisc
                        : index === 0
                        ? classes.boldText
                        : index === 2
                        ? classes.redLi
                        : ""
                    }
                    key={index}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <h3>4. {translated.category.title}</h3>
            <div className={classes.contentTable}>
              <div className={classes.tableRow}>
                <div className={classes.tableHeader}>
                  {translated.category.colomn[0]}
                </div>
                <div className={classes.tableHeader}>
                  {translated.category.colomn2[0]}
                </div>
                <div className={classes.tableHeader}>
                  {translated.category.colomn3[0]}
                </div>
                <div className={classes.tableHeader}>
                  {translated.category.colomn4[0]}
                </div>
              </div>
              {translated.category.colomn
                .slice(1)
                .map((el: any, index: number) => (
                  <div className={classes.tableRow} key={index + 1}>
                    <div>{el}</div>
                    {/* Check if there is a corresponding element in colomn2 array */}
                    {translated.category.colomn2[index + 1] && (
                      <div>
                        {Array.isArray(translated.category.colomn2[index + 1])
                          ? translated.category.colomn2[index + 1].map(
                              (item: string, i: number) => (
                                <p style={{ padding: ".5em 0" }} key={i}>
                                  {item}
                                </p>
                              )
                            )
                          : translated.category.colomn2[index + 1]}
                      </div>
                    )}
                    {translated.category.colomn3[index + 1] && (
                      <div>
                        {Array.isArray(translated.category.colomn3[index + 1])
                          ? translated.category.colomn3[index + 1].map(
                              (item: string, i: number) => (
                                <p style={{ padding: ".5em 0" }} key={i}>
                                  {item}
                                </p>
                              )
                            )
                          : translated.category.colomn3[index + 1]}
                      </div>
                    )}
                    {translated.category.colomn4[index + 1] && (
                      <div>
                        {Array.isArray(translated.category.colomn4[index + 1])
                          ? translated.category.colomn4[index + 1].map(
                              (item: string, i: number) => (
                                <p style={{ padding: ".5em 0" }} key={i}>
                                  {item}
                                </p>
                              )
                            )
                          : translated.category.colomn4[index + 1]}
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <h3>5. {translated.ranking.title}</h3>
            <div className={classes.rankingRow}>
              <div className={classes.rankingRowCankayaLeague}>
                <div></div>
                <div>{translated.ranking.table.row[1]}</div>
                <div>{translated.ranking.table.row[2]}</div>
              </div>
              <div>
                {translated.ranking.table.row2.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.ranking.table.row3.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.ranking.table.row4.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.ranking.table.row5.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.ranking.table.row6.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
            </div>
            <h3>6. {translated.matchFormat.title}</h3>
            <ul>
              {translated.matchFormat.li.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>7. {translated.matchesPlayed.title}</h3>
            <ul>
              {translated.matchesPlayed.li.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>8. {translated.pointsSystem.title}</h3>
            <ul>
              {translated.pointsSystem.li.map((el: string, index: number) => (
                <li className={index > 1 ? classes.listDisc : ""} key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <h3>9. {translated.placement.title}</h3>
            <ul>
              <li>{translated.placement.li[0]}</li>
              <li>{translated.placement.li[1]}</li>
              <li>{translated.placement.li[2]}</li>
              <li className={classes.listDisc}>{translated.placement.li[3]}</li>
              <li className={classes.listDisc}>
                {translated.placement.li[4]}
                <span>{translated.placement.li[5]}</span>
              </li>
              <li className={classes.listDisc}>{translated.placement.li[6]}</li>
            </ul>
            <ul>
              {translated.placement.list.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>10. {translated.responsibilities.title}</h3>
            <ul>
              {translated.responsibilities.li.map(
                (el: string, index: number) => (
                  <li key={index}>{el}</li>
                )
              )}
            </ul>
            <h3>11. {translated.removing.title}</h3>
            <ul>
              <li>
                {translated.removing.li[0]}
                <span> {translated.removing.li[1]}</span>
              </li>
            </ul>
            <h3>12. {translated.detailsPlaysOff.title}</h3>
            <div className={classes.detailsPlaysOffRow}>
              <div className={classes.detailsPlaysOffRowCankayaLeague}>
                <div>{translated.detailsPlaysOff.table.row[0]}</div>
                <div>{translated.detailsPlaysOff.table.row[1]}</div>
              </div>
              <div>
                {translated.detailsPlaysOff.table.row2.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.detailsPlaysOff.table.row3.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.detailsPlaysOff.table.row4.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.detailsPlaysOff.table.row5.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.detailsPlaysOff.table.row6.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <ul>
                <li>{translated.detailsPlaysOff.li[0]}</li>
              </ul>
              <div className={classes.detailsPlaysOffRowCankayaLeague}>
                <div>{translated.detailsPlaysOff.table2.row[0]}</div>
                <div>{translated.detailsPlaysOff.table2.row[1]}</div>
              </div>
              <div>
                {translated.detailsPlaysOff.table2.row2.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <div>
                {translated.detailsPlaysOff.table2.row3.map(
                  (el: string, index: number) => (
                    <div key={index}>{el}</div>
                  )
                )}
              </div>
              <ul>
                <li>{translated.detailsPlaysOff.li[1]}</li>
                <li>{translated.detailsPlaysOff.li[2]}</li>
                <li>{translated.detailsPlaysOff.li[3]}</li>
              </ul>
            </div>
            <h3>13. {translated.application.title}</h3>
            <ul>
              {translated.application.li.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </>
        );
      case "100th-anniversary-of-the-republic":
      case "2023-topspin-bilkent-autumn-singles-tournament":
        return (
          <>
            <h2>{translated.title}</h2>
            <p>
              {translated.dates[0]}
              <span className={classes.boldText}> 21.10.2023</span>{" "}
            </p>
            <p>
              {translated.dates[1]}
              <span className={classes.boldText}> 23.10.2023</span>{" "}
            </p>
            <h3>{translated.category?.title}</h3>
            <ul>
              {translated.category?.li?.map((el: string, index: number) => (
                <li className={classes.listDisc} key={index}>
                  {el}
                </li>
              ))}
            </ul>
            {translated?.li?.map((el: string, index: number) => (
              <p
                style={{ padding: ".7em 0" }}
                className={index === 7 ? classes.redLi : ""}
                key={index}
              >
                {el}
              </p>
            ))}
            <h3>{translated.tournament?.title}</h3>
            <ul>
              {translated.tournament?.li?.map((el: string, index: number) => (
                <li className={classes.listDisc} key={index}>
                  {el}
                </li>
              ))}
            </ul>
            <h3>{translated.format.title}</h3>
            <ul>
              {translated.format.li?.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>{translated.fixture?.title}</h3>
            <ul>
              {translated.fixture?.li?.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>{translated.matchFormat?.title}</h3>
            <ul>
              {translated.matchFormat?.li?.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3>{translated.application?.title}</h3>
            {translated.application?.li?.map((el: string, index: number) => (
              <p style={{ padding: ".5em 0" }} key={index}>
                {el}
              </p>
            ))}
            <h3 style={{ padding: ".5em 0" }}>{translated.fees}</h3>
            <h3 style={{ padding: ".5em 0" }}>{translated.iban}</h3>
            <h3 style={{ padding: ".5em 0" }}>{translated.address}</h3>
            <h3 style={{ padding: ".5em 0" }}>{translated.bank}</h3>
          </>
        );
      case "tta-2023-singles-and-doubles-spring-tournament":
        return (
          <>
            <h2>{translated.title}</h2>
            {translated.li.map((el: string, index: number) => (
              <p key={index} style={{ padding: "1em 0" }}>
                {el}
              </p>
            ))}
            <div className={classes.contentTable}>
              <div>
                <div>#</div>
                <div>Contents:</div>
              </div>
              {translated.table?.map((el: string, index: number) => (
                <div key={index}>
                  <div>{index + 1}</div>
                  <div>{el}</div>
                </div>
              ))}
            </div>
            <h3>{translated.account.title}</h3>
            {translated.account.li.map((el: string, index: number) => (
              <p key={index}>
                {el}
              </p>
            ))}
          </>
        );
      default:
        break;
    }
  };

  return (
    <div className={classes.tournament}>
      <div className={classes.buttonsLinks}>{renderButtons()}</div>
      <div className={classes.content}>{renderContent()}</div>
    </div>
  );
}

export default TournamentComponent;
