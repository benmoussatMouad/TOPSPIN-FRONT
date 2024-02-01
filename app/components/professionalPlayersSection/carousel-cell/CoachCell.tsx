import Image from "next/image";
import React from "react";
import classes from "../flickityViewPortSection.module.scss"


interface Trainer {
  id: number;
  iamgeName: string;
  imageUrl: string;
  informationEnglish?: string;
  informationTurkish?: string;
  firstName: string;
  lastName: string;
}


function CoachCell({ data, information, type }: { data: Trainer, information?:string, type:string }) {
  return (
    <a>
      {data ? (
        <Image
          fill
          sizes="(max-width:768px) 400px , 700px"
          alt={data?.iamgeName}
          src={data?.imageUrl}
        />
      ) : (
        ""
      )}
      <div>
        <h3>{data?.firstName + " " + data?.lastName}</h3>
        {(type=="coaches") && information && <p className="italicText">{information}</p>}
        </div>
      <span />
    </a>
  );
}

export default CoachCell;
