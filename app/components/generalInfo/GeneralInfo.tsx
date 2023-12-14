"use client";
import React, { useState } from "react";
import classes from "./generalInfo.module.scss";

function GeneralInfo({
  rules,
  general,
  buttons,
}: {
  buttons: any;
  rules: any;
  general: any;
}) {
  const [content, setContent] = useState("rules");

  return (
    <section className={classes.generalInfo}>
      <div className={classes.buttons}>
        <button
          onClick={() => setContent("rules")}
          className={`button ${content === "rules" ? "activeButton" : ""}`}
        >
          {buttons.rules}
        </button>
        <button
          onClick={() => setContent("ethics")}
          className={`button ${content === "ethics" ? "activeButton" : ""}`}
        >
          {buttons.ethics}
        </button>
      </div>
      {content === "rules" ? (
        <div>
          <h2>{rules.header}</h2>
          <ul>
            <li className={classes.listStyleDecimal}>
              {rules.liWithBoldText[0].text}
            </li>
            <li className={classes.listStyleDecimal}>
              {rules.liWithBoldText[1].text}
              <span>{rules.liWithBoldText[1].boldText}</span>
            </li>
            <li className={classes.listStyleDecimal}>
              {rules.liWithBoldText[2].text[0]}
              <span>{rules.liWithBoldText[2].boldText}</span>
              {rules.liWithBoldText[2].text[1]}
            </li>
            {rules.li.map((rule: string, index: number) => (
              <li className={classes.listStyleDecimal} key={index}>
                {rule}
              </li>
            ))}
          </ul>
          <h3>{rules.seriesHeads.header}</h3>
          <p>{rules.seriesHeads.description}</p>
          <h3>{rules.clothes.header}</h3>
          <ul>
            {rules.clothes.li.map((rule: string, index: number) => (
              <li className={classes.listStyleDecimal} key={index}>
                {rule}
              </li>
            ))}
          </ul>
          <h3>{rules.fairPlay.header}</h3>
          <p>{rules.fairPlay.description}</p>
          <ul>
            {rules.fairPlay.li.map((rule: string, index: number) => (
              <li className={classes.listStyleDecimal} key={index}>
                {rule}
              </li>
            ))}
          </ul>
          <p>{rules.fairPlay.footerDescription}</p>
          <h3>{rules.cases.header}</h3>
          <ul>
            {rules.cases.li.map((rule: string, index: number) => (
              <li className={classes.listStyleDecimal} key={index}>
                {rule}
              </li>
            ))}
          </ul>
          <h3>{rules.referee.header}</h3>
          <p>{rules.referee.description}</p>
          <h3>{rules.observer.header}</h3>
          <p>{rules.observer.description}</p>
        </div>
      ) : (
        <div>
          <h2>{general.header}</h2>
          <p>
            {general.description[0]} <br /> {general.description[1]}
          </p>
          <ul>
            {general.li.map((el: string, index: number) => (
              <li className={classes.listStyleDisc} key={index}>
                {el}
              </li>
            ))}
          </ul>
          <h3>{general.rules.header}</h3>
          <ul>
            {general.rules.li.map((el: string, index: number) => (
              <li className={classes.listStyleDisc} key={index}>
                {el}
              </li>
            ))}
          </ul>
          <h3>{general.score.header}</h3>
          <p>{general.score.description}</p>
          <h3>{general.line.header}</h3>
          <ul>
            {general.line.li.map((el: string, index: number) => (
              <li className={classes.listStyleDisc} key={index}>
                {el}
              </li>
            ))}
          </ul>
          <h3>{general.warming.header}</h3>
          <ul>
            {general.warming.li.map((el: string, index: number) => (
              <li className={classes.listStyleDisc} key={index}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;
