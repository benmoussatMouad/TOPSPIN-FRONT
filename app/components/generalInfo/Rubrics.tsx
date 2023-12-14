import React from "react";
import classes from "./generalInfo.module.scss";
import Link from "next/link";
function Rubrics({
  buttons,
  scoreSystem,
}: {
  buttons?: any;
  scoreSystem: any;
}) {
  return (
    <section className={classes.generalInfo}>
      <div className={classes.buttons}>
        <button className={`button activeButton`}>{buttons?.scoring}</button>
        <Link
          href={
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHX8V2GGWtjp3zIycrR_wsvxrBITf7YsthMo_s7THxz2GVBgsUgPHP6DTzmFAuRLfBBcXp2PciqFOY/pubhtml#"
          }
          className={`button`}
        >
          {buttons?.match}
        </Link>
      </div>
      <div>
        <h2>{scoreSystem.header}</h2>
        <ul>
          {scoreSystem.li.map((el: string, index: number) => (
            <li className={classes.listStyleDecimal} key={index}>
              {el}
            </li>
          ))}
        </ul>
        <h4>{scoreSystem.system.header}</h4>
        <div className={classes.table}>
          <div className={classes.header}>
            {scoreSystem.system.table.header.map((item: any, index: number) => (
              <div key={index}>
                {Array.isArray(item.text) ? (
                  item.text.map((subItem: string, subIndex: number) => (
                    <p key={subIndex}>{subItem}</p>
                  ))
                ) : (
                  <>{item.text}</>
                )}
              </div>
            ))}
          </div>
          <div>
            <div>{scoreSystem.system.table.content[0]}</div>
            <div>180</div>
            <div>150</div>
            <div>120</div>
          </div>
          <div>
            <div>{scoreSystem.system.table.content[1]}</div>
            <div>120</div>
            <div>100</div>
            <div>80</div>
          </div>
          <div>
            <div>{scoreSystem.system.table.content[2]}</div>
            <div>80</div>
            <div>60</div>
            <div>50</div>
          </div>
          <div>
            <div>{scoreSystem.system.table.content[3]}</div>
            <div>50</div>
            <div>40</div>
            <div>30</div>
          </div>
          <div>
            <div>{scoreSystem.system.table.content[4]}</div>
            <div>30</div>
            <div>25</div>
            <div>20</div>
          </div>
          <div>
            <div>{scoreSystem.system.table.content[5]}</div>
            <div>20</div>
            <div>15</div>
            <div>10</div>
          </div>
          <div>
            <div>{scoreSystem.system.table.content[6]}</div>
            <div>10</div>
            <div>5</div>
            <div>5</div>
          </div>
          <div className={classes.lastRound}>
            <div>{scoreSystem.system.table.content[7]}</div>
            <div>5</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
        <h4>{scoreSystem.system.header}</h4>
        <div className={classes.tableLeague}>
          <div className={classes.header}>
            {scoreSystem.league.table.header.map((item: any, index: number) => (
              <div key={index}>
                {Array.isArray(item.text) ? (
                  item.text.map((subItem: string, subIndex: number) => (
                    <p key={subIndex}>{subItem}</p>
                  ))
                ) : (
                  <>{item.text}</>
                )}
              </div>
            ))}
          </div>
          <div>
            <div>{scoreSystem.league.table.content[0]}</div>
            <div>20</div>
            <div>20</div>
            <div>20</div>
          </div>
          <div>
            <div>{scoreSystem.league.table.content[1]}</div>
            <div>5</div>
            <div>5</div>
            <div>5</div>
          </div>
          <div>
            <div>{scoreSystem.league.table.content[2]}</div>
            <div>10</div>
            <div>10</div>
            <div>10</div>
          </div>
          <div className={classes.lastRound}>
            <div>{scoreSystem.league.table.content[3]}</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rubrics;
